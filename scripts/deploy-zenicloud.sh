#!/usr/bin/env bash
# ── NexBuild · Manual ZeniCloud deploy (fallback when GitHub Actions down) ──
# Requires: gcloud, docker, jq, curl
# Usage:
#   export ZENI_TOKEN="zeni_pat_..."
#   export ZENI_DB_URL="postgresql+asyncpg://..."
#   export ZENI_JWT_SECRET="$(openssl rand -hex 32)"
#   export ZENI_GCP_KEY_PATH="$HOME/keys/nexbuild-pusher.json"
#   ./scripts/deploy-zenicloud.sh
#
# Or for partial:
#   ./scripts/deploy-zenicloud.sh backend     # only backend
#   ./scripts/deploy-zenicloud.sh frontend    # only frontend

set -euo pipefail

# ─── Config ────────────────────────────────────────────────
ZENI_BASE="${ZENI_BASE:-https://zenicloud.io/api/v1}"
ZENI_WS="${ZENI_WS:-nexbuild}"
REGISTRY="us-central1-docker.pkg.dev"
GCP_PROJECT="zeni-cloud-core"
REPO="zeni-images"
REGION="us-central1"

# Image tag from git short SHA (or "manual" if not in git)
TAG=$(git rev-parse --short HEAD 2>/dev/null || echo "manual-$(date +%s)")

BACKEND_IMG="${REGISTRY}/${GCP_PROJECT}/${REPO}/nexbuild-flatform-api:${TAG}"
BACKEND_LATEST="${REGISTRY}/${GCP_PROJECT}/${REPO}/nexbuild-flatform-api:latest"
FRONTEND_IMG="${REGISTRY}/${GCP_PROJECT}/${REPO}/nexbuild-flatform-web:${TAG}"
FRONTEND_LATEST="${REGISTRY}/${GCP_PROJECT}/${REPO}/nexbuild-flatform-web:latest"

# ─── Helpers ───────────────────────────────────────────────
log() { echo -e "\033[1;36m[$(date +%H:%M:%S)]\033[0m $*"; }
err() { echo -e "\033[1;31mERROR:\033[0m $*" >&2; }
ok() { echo -e "\033[1;32m✓\033[0m $*"; }

# ─── Pre-flight checks ─────────────────────────────────────
require() {
  if [ -z "${!1:-}" ]; then
    err "Missing env var: $1"
    exit 1
  fi
}
require ZENI_TOKEN
require ZENI_DB_URL
require ZENI_JWT_SECRET
require ZENI_GCP_KEY_PATH

if [ ! -f "$ZENI_GCP_KEY_PATH" ]; then
  err "GCP key not found: $ZENI_GCP_KEY_PATH"
  exit 1
fi

for tool in docker curl jq gcloud; do
  if ! command -v $tool &>/dev/null; then
    err "Missing tool: $tool. Install before running."
    exit 1
  fi
done

# ─── Auth GCP + Docker ─────────────────────────────────────
log "Authenticating with GCP..."
gcloud auth activate-service-account --key-file="$ZENI_GCP_KEY_PATH" --quiet
gcloud auth configure-docker "$REGISTRY" --quiet
ok "GCP auth done"

# ─── Build + push helpers ──────────────────────────────────
build_push() {
  local dockerfile="$1"
  local img="$2"
  local latest="$3"
  log "Building $img..."
  docker build -f "$dockerfile" -t "$img" -t "$latest" --platform linux/amd64 .
  log "Pushing $img..."
  docker push "$img"
  docker push "$latest"
  ok "Pushed $img"
}

deploy_project() {
  local name="$1"
  local image="$2"
  local size="$3"
  local extra_env="$4"  # JSON string with extra env vars

  log "Deploying $name to ZeniCloud..."
  local payload
  payload=$(cat <<JSON
{
  "name": "$name",
  "type": "web",
  "runtime": "container",
  "size": "$size",
  "region": "$REGION",
  "image": "$image",
  "port": 8080,
  "allow_unauthenticated": true,
  "env_vars": $extra_env
}
JSON
)
  local res
  res=$(curl -sf -X POST "$ZENI_BASE/projects?ws=$ZENI_WS" \
    -H "Authorization: Bearer $ZENI_TOKEN" \
    -H "Content-Type: application/json" \
    -d "$payload")
  echo "$res" | jq .
  local url
  url=$(echo "$res" | jq -r '.url // .public_url // .domain // empty')
  ok "$name deployed: $url"
  echo "$url"
}

# ─── Targets ───────────────────────────────────────────────
TARGET="${1:-all}"

if [ "$TARGET" = "backend" ] || [ "$TARGET" = "all" ]; then
  log "═══ BACKEND ═══"
  build_push "Dockerfile" "$BACKEND_IMG" "$BACKEND_LATEST"
  BACKEND_ENV=$(jq -n \
    --arg db "$ZENI_DB_URL" \
    --arg jwt "$ZENI_JWT_SECRET" \
    --arg zt "$ZENI_TOKEN" \
    --arg zb "$ZENI_BASE" \
    --arg zw "$ZENI_WS" \
    '{
      DEBUG: "false",
      ALLOWED_ORIGINS: "[\"https://nexbuild.holdings\",\"https://www.nexbuild.holdings\"]",
      DATABASE_URL: $db,
      REDIS_URL: "redis://localhost:6379/0",
      JWT_SECRET_KEY: $jwt,
      JWT_PRIVATE_KEY_PATH: "nonexistent.pem",
      JWT_PUBLIC_KEY_PATH: "nonexistent.pem",
      ZENI_TOKEN: $zt,
      ZENI_BASE: $zb,
      ZENI_WS: $zw,
      AGENT_MODEL: "gemini-2.5-flash",
      RAG_ENABLED: "1",
      ESCROW_AUTO_RELEASE_DAYS: "30",
      COMMISSION_SUPPLIER_PCT: "2.5",
      COMMISSION_BOOKING_PCT: "8.0",
      ESCROW_FEE_PCT: "0.5"
    }')
  BACKEND_URL=$(deploy_project "nexbuild-flatform-api" "$BACKEND_IMG" "m" "$BACKEND_ENV")
fi

if [ "$TARGET" = "frontend" ] || [ "$TARGET" = "all" ]; then
  log "═══ FRONTEND ═══"
  build_push "Dockerfile.frontend" "$FRONTEND_IMG" "$FRONTEND_LATEST"
  BACKEND="${BACKEND_URL:-https://nexbuild-flatform-api.zenicloud.run}"
  FRONTEND_ENV=$(jq -n --arg api "$BACKEND" '{API_BACKEND: $api}')
  FRONTEND_URL=$(deploy_project "nexbuild-flatform-web" "$FRONTEND_IMG" "s" "$FRONTEND_ENV")
fi

# ─── Summary ──────────────────────────────────────────────
log "═══ DEPLOY SUMMARY ═══"
[ -n "${BACKEND_URL:-}" ] && echo "Backend:  $BACKEND_URL"
[ -n "${FRONTEND_URL:-}" ] && echo "Frontend: $FRONTEND_URL"
echo ""
echo "Next:"
echo "  curl -X POST $ZENI_BASE/projects/<frontend_id>/domain?ws=$ZENI_WS \\"
echo "    -H 'Authorization: Bearer \$ZENI_TOKEN' \\"
echo "    -d '{\"domain\":\"nexbuild.holdings\"}'"
