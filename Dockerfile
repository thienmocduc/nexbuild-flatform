# ── NexBuild Backend · ZeniCloud Cloud Run image ─────────────
# Multi-stage build: ~250MB final image (vs ~600MB single-stage)
# Build:  docker build -t nexbuild-flatform-api:latest .
# Run:    docker run -p 8080:8080 -e DATABASE_URL=... nexbuild-flatform-api

# ─── Stage 1: builder (compile native deps) ───────────────────
FROM python:3.12-slim AS builder

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

WORKDIR /build

# Install only what's needed to BUILD wheels (gcc, libpq-dev for asyncpg)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first for caching
COPY backend/requirements.txt .
RUN pip install --upgrade pip wheel && \
    pip wheel --wheel-dir /wheels -r requirements.txt

# ─── Stage 2: runtime (slim, no compilers) ────────────────────
FROM python:3.12-slim AS runtime

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

# Runtime deps only (libpq for asyncpg connection, curl for healthcheck)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq5 \
    curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install pre-built wheels from builder stage
COPY --from=builder /wheels /wheels
COPY backend/requirements.txt .
RUN pip install --no-index --find-links=/wheels -r requirements.txt && \
    rm -rf /wheels

# Copy backend code (imports use `api.*` namespace — symlink via folder name)
COPY backend/ ./api/

# Required runtime directories
RUN mkdir -p uploads keys

# Cloud Run injects PORT env (default 8080)
ENV PORT=8080
EXPOSE 8080

# Healthcheck — Cloud Run uses /health internally too
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:${PORT}/health || exit 1

# Single worker — Cloud Run scales horizontally via instances, not workers.
# --proxy-headers + --forwarded-allow-ips so request.client.host shows real IP
# (rate limit by X-Forwarded-For, not Cloud Run internal LB IP).
CMD uvicorn api.main:app \
    --host 0.0.0.0 \
    --port ${PORT} \
    --workers 1 \
    --proxy-headers \
    --forwarded-allow-ips="*" \
    --access-log \
    --log-level info
