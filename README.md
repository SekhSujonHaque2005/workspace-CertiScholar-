# CertiScholar: Master Enterprise Polyrepo Workspace
Governed by **CS-SRS-002 v3.2** (LPU Institutional Scholarship & Document Verification Platform).

---

## 🏛️ 9-Repository Enterprise Polyrepo Architecture

This workspace is structured into **6 role-scoped frontend portals** and **3 backend microservices**, ensuring strict bundle isolation, independent release cadences, and zero cross-role leakage.

```
d:\CertiScholar\
│
├── 🌐 FRONTEND PORTALS (6 Repositories)
│   ├── certischolar-web-public/        ← [Port 3000] Public Website, Framer About Page, FAQ, Scheme Directory
│   ├── certischolar-portal-student/     ← [Port 3001] Student Dashboard, Application Wizard, Document Vault
│   ├── certischolar-portal-reviewer/    ← [Port 3002] M5 Document Verification Queue & Split-Screen OCR Canvas
│   ├── certischolar-portal-committee/   ← [Port 3003] Quorum Voting, Award Deliberation & Scheme Rule Builder
│   ├── certischolar-portal-admin/       ← [Port 3004] Multi-tenant Administration, Audit Explorer & Celery Vitals
│   └── certischolar-portal-agency/      ← [Port 3005] External CSR Donors, Trust Listings & Webhook Telemetry
│
├── ⚙️ BACKEND SERVICES (3 Repositories)
│   ├── certischolar-core/               ← [Port 8000] Django 5 API, Celery, OCR Engine, Contracts & Infra
│   ├── certischolar-auth/               ← [Port 8080] Golang Identity, OIDC & High-Performance JWT Gateway
│   └── certischolar-notifications/      ← [Port 8081] Golang Async Email, SMS & Webhooks Dispatcher
│
└── 📄 Docs/                             ← Authoritative SRS (v3.2), Wireframes, Process Flows & Charters
```

---

## 🚀 Port & Service Matrix

| Repository | Service / Role | Runtime & Stack | Local Port |
| :--- | :--- | :--- | :---: |
| **`certischolar-web-public`** | Public Web & External Discovery | React 19, Vite, Tailwind CSS, Bun | **`3000`** |
| **`certischolar-portal-student`** | Enrolled LPU Students | React 19, Vite, Tailwind CSS, Bun | **`3001`** |
| **`certischolar-portal-reviewer`** | Document Verification Officers | React 19, Vite, Tailwind CSS, Bun | **`3002`** |
| **`certischolar-portal-committee`** | Deans & Committee Chairs | React 19, Vite, Tailwind CSS, Bun | **`3003`** |
| **`certischolar-portal-admin`** | University Registrars & SREs | React 19, Vite, Tailwind CSS, Bun | **`3004`** |
| **`certischolar-portal-agency`** | Corporate CSR Donors & Trusts | React 19, Vite, Tailwind CSS, Bun | **`3005`** |
| **`certischolar-core`** | Transactional Core & OCR Pipeline | Python 3.12, Django 5, Celery, PostgreSQL | **`8000`** |
| **`certischolar-auth`** | Identity, OIDC & JWT Token Gateway | Golang 1.23, Stateless HS256/EdDSA | **`8080`** |
| **`certischolar-notifications`** | Email, SMS & Signed Webhooks | Golang 1.23, High-concurrency I/O | **`8081`** |

---

## 🛠️ Quick Start & Development

### 1. Run All Frontend Portals
```bash
# In each portal directory:
bun install
bun dev
```

### 2. Run Golang Microservices
```bash
# In certischolar-auth:
go run cmd/server/main.go

# In certischolar-notifications:
go run cmd/server/main.go
```

### 3. Run Backend & Infrastructure with Docker
```bash
docker compose up -d
```
