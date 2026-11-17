# CertiScholar: Enterprise Architecture Workspace

**Institutional Discovery & Pilot Feasibility Initiative**  
*Governed by CS-SRS-002 v3.2, DOC-001 (Business Case), DOC-002 (Project Charter), DOC-003 (Process Flows), and DOC-004 (Wireframes).*

---

## 📁 Complete Enterprise Directory Architecture

```
D:\CertiScholar\
│
├── Docs/                               # Authoritative Planning & Governance Suite
│   ├── Business Case ROI.pdf           # DOC-001: Financial & TCO model, Options appraisal
│   ├── Project Charter.pdf             # DOC-002: Mandate, RACI, Stage gates G0–G4
│   ├── SRS.pdf                         # CS-SRS-002 v3.2: 133 FRs (M0–M20), 345 Acceptance Tests
│   ├── User Journey Process Flow.pdf   # DOC-003: 15 Core Processes, 17 User Journeys
│   └── Wireframes Prototype.pdf        # DOC-004: 25 Screens (SCR-001–025), UI tokens
│
├── contracts/                          # Multi-Protocol Interfaces & Shared IDLs
│   ├── openapi/v1/                     # REST API v1 Specification (OpenAPI 3.1)
│   ├── protobuf/document_ai/           # gRPC Protobuf v3 (High-speed Binary OCR Service)
│   ├── graphql/                        # GraphQL Schema Definition (Unified Client Queries)
│   └── events/                         # Transactional Outbox & Signed Webhook Schemas
│
├── backend/                            # Django 5 + ASGI + Channels Modular Monolith
│   ├── certischolar/                   # Core Project Configuration
│   │   ├── settings/                   # Split settings (base, dev, prod)
│   │   ├── asgi.py                     # ASGI Entrypoint (HTTP + WebSockets)
│   │   ├── wsgi.py                     # WSGI Entrypoint
│   │   └── celery.py                   # Async Task Broker Configuration
│   │
│   ├── apps/                           # Bounded Context Domain Apps (M0–M20)
│   │   ├── identity/                   # M0: Multi-Tenancy, OIDC, RBAC (Student, Reviewer, Committee)
│   │   ├── documents/                  # M1–M4: Intake, Quarantine, OCR, Classification, Extraction
│   │   ├── schemes/                    # M8: Scholarship Schemes, Policies, Versioned Criteria
│   │   ├── evaluations/                # M5, M6: Reviewer Corrections, Academic Recomputation (M6)
│   │   ├── committees/                 # M9, M10: Explainable Recommendations, Quorum Voting, Audit Trail
│   │   ├── marketplace/                # M13–M16: Source Registry, Agency Workspace, Consented Passport
│   │   └── intelligence/               # M17: Policy Circular Ingestion, AI-Assisted Rule Drafting
│   │
│   ├── api/                            # Multi-Protocol Entrypoints
│   │   ├── v1/                         # REST ViewSets & Serializers
│   │   ├── graphql/                    # Graphene Resolvers & Types
│   │   └── websockets/                 # Channels Consumers (Real-time Pipeline Telemetry)
│   │
│   ├── services/                       # Heavy Compute & Microservice Adapters
│   │   ├── ocr/                        # Tesseract OCR & Cloud Vision Adapters
│   │   ├── grpc_services/              # gRPC Server & Client Stubs
│   │   └── outbox/                     # Transactional Outbox Event Publisher
│   └── tests/                          # Automated Pytest Suite (Unit, Integration, Contract)
│
├── frontend/                           # React + JavaScript (Bun Runtime) + Tailwind CSS
│   ├── src/
│   │   ├── components/                 # Reusable Design System Tokens (CMP-001–010)
│   │   │   ├── common/                 # Buttons, StatusChips, MetricCards, Modals
│   │   │   ├── pdf-viewer/             # Canvas Viewer with Interactive Bounding Boxes
│   │   │   └── layout/                 # Navigation Shell, Sidebar, Role Context
│   │   ├── pages/                      # Screen Specifications (SCR-001–025)
│   │   │   ├── student/                # SCR-001 (Dashboard), SCR-005 (Application Wizard)
│   │   │   ├── reviewer/               # SCR-008 (Split-Screen Reviewer), SCR-009 (Queue)
│   │   │   ├── committee/              # SCR-010 (Quorum Console & Award Decision)
│   │   │   └── admin/                  # SCR-012 (Scheme Setup & Visual Rule Builder)
│   │   ├── services/                   # Client Network Layers (REST Axios, WS, GraphQL)
│   │   ├── hooks/                      # Custom React Hooks (useWebSocket, useAuth)
│   │   └── contexts/                   # Global State (AuthContext, PipelineContext)
│   └── package.json                    # Bun dependencies & build scripts
│
├── infra/                              # DevOps, Infrastructure & Gateway
│   ├── docker-compose.yml              # PostgreSQL 16 + Redis 7 + Mailpit
│   ├── gateway/                        # Nginx Reverse Proxy (Routes REST, WS, Static)
│   └── docker/                         # Production Multi-Stage Container Dockerfiles
│
└── scripts/                            # Operational Tooling & Seed Data
    ├── fixtures/                       # LPU Scheme Circulars & Baseline Fixtures
    ├── seed_schemes.py                 # Seeds Need-Based Aid & Shikshak Samman schemes
    └── generate_synthetic_docs.py      # Generates synthetic marksheets & income certs
```

---

## 🚀 Protocols Mapped to Directory

| Protocol | Implementation Location | Operational Role |
| :--- | :--- | :--- |
| **REST / OpenAPI 3.1** | `contracts/openapi/` & `backend/api/v1/` | Standard CRUD endpoints |
| **WebSocket (`wss://`)** | `backend/certischolar/asgi.py` & `backend/api/websockets/` | Real-time OCR streaming |
| **GraphQL** | `contracts/graphql/` & `backend/api/graphql/` | Flexible nested graph queries |
| **gRPC / Protobuf v3** | `contracts/protobuf/` & `backend/services/grpc_services/` | Fast binary OCR worker link |
| **AMQP / RESP** | `backend/certischolar/celery.py` & `infra/docker-compose.yml` | Celery async worker queue |
| **Signed Webhooks** | `contracts/events/` & `backend/apps/marketplace/` | DigiLocker & board callbacks |
