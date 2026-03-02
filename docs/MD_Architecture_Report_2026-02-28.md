# NICSI ERP Portal
## Architect-Level Brief
**Date:** February 28, 2026  
**Prepared For:** Leadership Review, NICSI  
**Prepared By:** Architecture & Engineering Team

## 1. Executive Summary
- The NICSI ERP Portal has evolved into a unified government-facing digital platform for information publishing, tender interfaces, internship workflows, personnel directories, and governed content operations.
- Architecture is based on Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, and PostgreSQL-backed dynamic services.
- The platform already supports role-based workflow approval for home content, database fallback strategy, accessibility controls, and policy pages.
- Recent enhancements include:
  - Dynamic GeM and CPP tender integrations with archive search/pagination.
  - State projects interactive view and submission API.
  - Internship validation controls with strengthened data quality checks.

## 2. Business Objectives Alignment
- Single trusted digital window for NICSI communications and service discovery.
- Faster content publishing with workflow governance and auditability.
- Better public access to procurement and policy disclosures.
- Scalable foundation for future state/department level program dashboards.

## 3. Current System Architecture
### 3.1 Application Layer
- Framework: Next.js 16.1.6 App Router.
- Rendering model:
  - Server-rendered pages for authoritative content.
  - Client components for interactive modules (social embeds, accessibility, chatbot, map interactions).
- Routing domains:
  - Public information pages (`/about`, `/services`, `/contact`, policy pages).
  - Opportunity and procurement pages (`/active-tenders`, `/nicsi-gem-bids`).
  - Program pages (`/national-projects`, `/state-projects`, `/meity-projects`, `/pbd-projects`).
  - Submission workflows (`/internship/apply`).
  - Admin/workflow APIs (`/api/workflow/...`, `/api/auth/login`).

### 3.2 Service Layer
- Encapsulated domain services in `services/`:
  - `homeContent`, `siteContent`, `workflow`, `auth`
  - `gemBids`, `cppTenders` (official-site aligned ingestion + fallback)
  - `internshipApplications`, `stateProjects` (validation + persistence)
- Clear separation between page composition and business logic.

### 3.3 Data Layer
- PostgreSQL connection pooling via `lib/postgres.ts`.
- Pattern used: “DB first, fallback defaults if DB unavailable” for non-critical read content.
- Tables include:
  - Workflow and audit (`workflow_users`, `home_track_change_requests`, `workflow_audit_logs`)
  - Domain datasets (`internship_applications`, `state_projects`, personnel/content tables).

### 3.4 ERP Module Integration Blueprint (Discussion Focus)
The ERP direction should be organized as service-driven modules with strict ownership boundaries:

1. AUTH Service
- Identity, login, role mapping, session/token lifecycle, policy enforcement.
- Integrates with all downstream modules through role claims and access scopes.

2. MASTER Service
- Single source of truth for reference entities:
  - Departments, ministries, states/UTs, vendor categories, project types, status masters.
- Versioned master APIs consumed by PI, Vendor, Accounts, Notification modules.

3. PI Service (Project Implementation / Program Intelligence)
- Program/project lifecycle tracking, milestones, state mapping, progress indicators.
- Should publish project events for notification and dashboard updates.

4. Vendor Management Service
- Empanelment lifecycle, compliance tracking, bid/vendor linkage, category-level capabilities.
- Integrates with procurement visibility pages and contract execution milestones.

5. Notification Service
- Event-driven communication (email/SMS/in-app) for approval, submission, SLA reminders.
- Should subscribe to AUTH, PI, Vendor, and Accounts event streams.

6. Accounts Service
- Cost capture, budget mapping, invoice/payment status, utilization snapshots.
- Finance-level controls and audit trails aligned with approved workflow states.

7. Zoho Integration Layer
- Adapter service to synchronize leads/tickets/CRM entities where approved.
- Must include transformation layer, retry queue, and reconciliation logs.

Recommended integration pattern:
- API Gateway + module APIs for synchronous reads/writes.
- Event bus pattern for async updates (`project_created`, `vendor_approved`, `invoice_processed`, etc.).
- Shared observability stack with module-level tracing and failure alerting.

## 4. Security & Governance Posture
- Role-gated workflow APIs via header-based RBAC checks for proposal/approval/rejection.
- Input validation implemented in service layer prior to persistence.
- Server-side submission checks added for high-risk inputs (dates, identity fields, domain constraints).
- Authentication API in place for portal users (`/api/auth/login`) with role and redirect metadata.
- Architecture supports controlled publishing and traceability for content changes.

## 5. Accessibility & Public Compliance Readiness
- Accessibility tooling integrated in top strip (font scaling, contrast, grayscale, readable text controls).
- Dedicated policy pages present (Terms, Privacy, Copyright, Help, Website Policy, Hyperlinking, Accessibility).
- Structural readiness for GIGW/WCAG progression exists; formal audit and checkpoint reports should be scheduled.

## 6. Reliability, Scalability, and Operations
- Fetch revalidation used for external listing sync modules.
- Defensive fallback patterns reduce outage risk when DB or external source is unavailable.
- API-first design enables progressive migration of manual pages to managed datasets.
- Current deployment is suitable for modular scale-out by vertical feature domain.

## 7. Key Architectural Risks (Current)
- External source HTML structure changes can impact tender scraping parsers.
- Header-based role simulation should be replaced by production-grade identity enforcement for full hardening.
- Some presentation modules still rely on static demo baselines until production datasets mature.
- No dedicated observability dashboard (SLA telemetry/log analytics) is currently surfaced in portal UI.

## 8. Recommended 90-Day Architecture Plan
### 0-30 Days (Stabilize)
- Freeze data contracts for tenders, projects, internship, and content workflows.
- Add centralized validation schema registry for all form APIs.
- Enable standard API response telemetry (latency, failure category, source health).
- Finalize ERP module boundaries and API contracts for AUTH, MASTER, PI, Vendor, Notification, Accounts, Zoho adapter.

### 31-60 Days (Harden)
- Upgrade role enforcement from header simulation to token/session-backed policy checks.
- Add automated source-monitor checks for GeM/CPP parser drift.
- Introduce database migration tracking and environment-level release gates.
- Implement integration security controls (signed webhooks, secret rotation, replay protection for Zoho sync).

### 61-90 Days (Scale)
- Launch managed admin console for state project entries and approvals.
- Build dashboard views for state/UT project analytics with export capability.
- Implement automated accessibility and policy compliance validation in CI pipeline.
- Roll out event-driven orchestration between PI, Vendor, Accounts, and Notification services.

## 9. Decision Requests
- Approve phased hardening roadmap (identity + observability + parser resilience).
- Approve architecture governance model for content/data ownership by functional unit.
- Approve KPI set for next review:
  - Content publish lead time
  - Procurement listing accuracy
  - API validation failure ratio
  - Accessibility audit score delta

## 10. Conclusion
- Current platform foundation is architecturally sound for controlled expansion.
- With targeted hardening, modular ERP integration, and governance automation, this can become the authoritative and auditable digital operations front for NICSI program communication and stakeholder workflows.
