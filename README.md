# NICSI ERP Portal

Government-focused ERP web portal built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Tech Stack
- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4

## Available Scripts
- `npm run dev`: Start development server on `http://localhost:3000`
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run lint`: Run ESLint checks

## Main Routes
- `/`: Home dashboard
- `/about`: About portal
- `/services`: ERP service modules
- `/tenders`: Tender information
- `/empanelled-vendors`: Empanelled vendors
- `/circulars`: Circulars and notices
- `/career`: Career information
- `/contact`: Contact details
- `/login`: Portal login UI

## Project Structure
```text
app/                    App Router pages and layout
components/layout/      Shared layout components (header/footer/hero/sidebar)
public/                 Static assets (logos/images/gallery)
services/               Shared service helpers
```

## Notes
- Header and footer are rendered globally via `app/layout.tsx`.
- Design tokens are defined in `app/globals.css` using CSS variables.
- Homepage "Core Sections" supports dynamic content from PostgreSQL table `home_key_tracks`.
- Header notices support dynamic content from PostgreSQL table `header_announcements`.
- Contact page details support dynamic content from PostgreSQL table `contact_details`.
- Footer links/resources support dynamic content from PostgreSQL table `footer_links`.
- Approval workflow tables are available for governed publishing:
  - `workflow_users`
  - `home_track_change_requests`
  - `workflow_audit_logs`

## PostgreSQL Dynamic Content Setup
1. Install dependencies:
   - `npm install`
2. Configure environment:
   - Copy `.env.example` to `.env.local`
   - Set `DATABASE_URL` for your PostgreSQL instance
3. Initialize DB schema and seed data:
   - Run SQL in `db/init.sql` on your PostgreSQL database
4. Start app:
   - `npm run dev`

If DB is unavailable or `DATABASE_URL` is not set, homepage cards fall back to built-in defaults.
Header notices and contact details also use built-in fallback values in the same scenario.
Footer links/resources also use built-in fallback values in the same scenario.

## Role-Based Approval Workflow (Home Tracks)
The workflow APIs use request headers for role simulation:
- `x-user-id`
- `x-user-role` (`content_editor`, `approver`, `publisher`, `admin`)

### Endpoints
- `POST /api/workflow/home-tracks/propose`
  - Roles: `content_editor`, `approver`, `publisher`, `admin`
  - Creates a pending change request
- `GET /api/workflow/home-tracks/pending`
  - Roles: `approver`, `publisher`, `admin`
  - Lists pending requests
- `POST /api/workflow/home-tracks/{requestId}/approve`
  - Roles: `approver`, `publisher`, `admin`
  - Approves and publishes request
- `POST /api/workflow/home-tracks/{requestId}/reject`
  - Roles: `approver`, `publisher`, `admin`
  - Rejects request with mandatory `reviewNote`

## Getting Started
1. Install dependencies: `npm install`
2. Start local server: `npm run dev`
