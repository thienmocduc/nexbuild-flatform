# NexBuild Flatform

Hệ sinh thái xây dựng thông minh — Hub · Marketplace · Dashboard · NexDesign AI.

**Production:** https://nexbuild.holdings (ZeniCloud Cloud Run)

---

## 🏗️ Stack

| Layer | Vendor | Service |
|-------|--------|---------|
| Source code | GitHub | `thienmocduc/nexbuild-flatform` |
| CI/CD | GitHub Actions | Build + push image, call ZeniCloud API |
| Image registry | ZeniCloud | `us-central1-docker.pkg.dev/zeni-cloud-core/zeni-images/` |
| Compute | ZeniCloud Cloud Run | `nexbuild-flatform-api`, `nexbuild-flatform-web` |
| Database | ZeniCloud Cloud SQL | PostgreSQL 16 schema `nexbuild_app` |
| AI gateway | ZeniCloud | `/ai/complete` (6 LLMs), `/ai/generate-image` (Imagen 3) |
| Email | ZeniCloud | `/email/send` (2000/day Pro tier) |
| Custom domain | Namecheap → ZeniCloud | `nexbuild.holdings` |

**Production = 100% ZeniCloud.** GitHub chỉ là source backup + CI runner.

---

## 📁 Repo structure

```
nexbuild-flatform/
├── backend/              # FastAPI Python (api.* package)
│   ├── core/             # config, database, security, redis
│   ├── models/           # SQLAlchemy models
│   ├── routers/          # 20+ endpoints
│   ├── schemas/          # Pydantic
│   ├── services/         # business logic
│   │   ├── agents/       # 3 design agents (interior/architecture/structural)
│   │   ├── deliverables/ # PDF/Excel/SVG/GLB exporters
│   │   ├── zenicloud_service.py
│   │   ├── rag_service.py
│   │   ├── reference_service.py
│   │   └── multistage_service.py
│   ├── tests/
│   ├── requirements.txt
│   └── main.py
├── public/               # Frontend (HTML/CSS/JS)
│   ├── index.html        # Hub Landing
│   ├── dashboard.html    # 5-role Dashboard
│   ├── marketplace.html  # B2B/B2C/D2C Market
│   ├── nexdesign-app.html       # NexDesign AI app
│   ├── nexdesign-landing.html
│   ├── css/
│   └── js/
├── Dockerfile                    # Backend (FastAPI)
├── Dockerfile.frontend           # Frontend (nginx)
├── .dockerignore
├── .github/workflows/
│   └── deploy-zenicloud.yml      # Auto deploy on push
├── scripts/
│   └── deploy-zenicloud.sh       # Manual deploy fallback
└── README.md
```

---

## 🚀 Deployment

### Auto deploy (push to main)

```bash
git push origin main
# → GitHub Actions triggers:
#   1. Build backend image → push us-central1-docker.pkg.dev/.../nexbuild-flatform-api
#   2. Build frontend image → push us-central1-docker.pkg.dev/.../nexbuild-flatform-web
#   3. POST /api/v1/projects to deploy backend
#   4. POST /api/v1/projects to deploy frontend (with API_BACKEND env)
#   5. Print deployment URLs in summary
```

### Manual deploy (fallback)

```bash
export ZENI_TOKEN="zeni_pat_..."
export ZENI_DB_URL="postgresql+asyncpg://nexbuild_app:...@/zeni_cloud?host=/cloudsql/zeni-cloud-core:us-central1:zeni-cloud-db"
export ZENI_JWT_SECRET="$(openssl rand -hex 32)"
export ZENI_GCP_KEY_PATH="$HOME/keys/nexbuild-pusher.json"

./scripts/deploy-zenicloud.sh           # deploy both
./scripts/deploy-zenicloud.sh backend   # backend only
./scripts/deploy-zenicloud.sh frontend  # frontend only
```

### Required GitHub Secrets

| Secret | Purpose | Source |
|--------|---------|--------|
| `ZENI_TOKEN` | ZeniCloud PAT | https://zenicloud.io/app → API Tokens |
| `ZENI_GCP_KEY` | GCP service account JSON | Chairman cấp (role `roles/artifactregistry.writer`) |
| `ZENI_DB_URL` | Cloud SQL Auth Proxy connection string | Chairman cấp |
| `ZENI_JWT_SECRET` | JWT signing key | `openssl rand -hex 32` |

---

## 🧪 Local development

```bash
# Backend
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
export DATABASE_URL="sqlite+aiosqlite:///nexbuild_dev.db"
export ZENI_TOKEN="zeni_pat_..."
uvicorn api.main:app --reload --port 8000

# Frontend (any static server)
cd public
python -m http.server 3000
# Open http://localhost:3000
```

---

## 🏛️ Multi-discipline design (Phase 1)

3 specialized AI agents with detailed prompting + Vietnamese KB:

- **🏠 Interior** — 50+ vật liệu VN, 8 phong cách, phong thủy 8 hướng
- **🏛️ Architecture** — TCVN 4205/9411/6160/5687, sun path 9 cities, climate 5 zones
- **🏗️ Structural** — TCVN 5574/2737/1651, BTCT B15-B40, thép CB240-CB600

## 🔁 Iterative refinement (Phase 5)

User picks variant + feedback → AI applies ONLY that change while preserving rest.
Cap 10 rounds per chain. History stored in `ai_response.refinement`.

## 📚 RAG (Phase 2)

28-doc Vietnamese KB embedded via ZeniCloud `/ai/embed`. Each generate() call
retrieves top-5 similar docs (cosine), injected into agent prompt for richer output.

## 📸 Reference-guided (Phase 4)

Upload reference image → ZeniCloud Gemini multi-modal extracts style + palette +
materials → enhanced prompt auto-fills textarea.

## ⭐ Multi-stage pipeline (Phase 3)

Optional `high_quality=true` → PLAN (gemini-2.5-pro) → SKETCH (4 variants) →
RENDER (Imagen 3 parallel) → SELECT (top 2 + critique). 3-5x slower, hyper-detailed.

## 📦 Multi-format deliverables (Phase 6)

`GET /api/v1/design/{id}/download?format=pdf|xlsx|svg|glb`

- **PDF** — Báo giá VAT 10% format VN (ReportLab)
- **Excel** — BOM với formulas (openpyxl)
- **SVG** — Mặt bằng dimensioned (svgwrite)
- **GLB** — 3D scene glTF 2.0 (Three.js compatible)

---

## 🔐 Security

- JWT HS256 (RS256-ready when keys provided)
- Rate limit per X-Forwarded-For real IP (5 login attempts / 30 min lockout)
- HSTS + CSP + X-Frame + X-Content-Type
- Passwords bcrypt (cost 12)
- All AI keys server-side only (never exposed to client)

---

## 📞 Support

- **Issues:** https://github.com/thienmocduc/nexbuild-flatform/issues
- **ZeniCloud:** caotuanphat581@gmail.com
- **Docs API:** https://zenicloud.io/docs

---

**License:** Proprietary — NexBuild Holdings 2026
