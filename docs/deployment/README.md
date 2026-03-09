# Next.js 16 Deployment Setup

This setup is for a Next.js 16 App Router application running on the Node.js runtime behind Nginx on port `3000`.

## Environments

- Local development
- Development VM
- Staging VM
- Production

## Environment Files

- [.env.local](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/.env.local)
- [.env.development](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/.env.development)
- [.env.staging](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/.env.staging)
- [.env.production](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/.env.production)

Each file defines:

- `APP_ENV`: logical environment name
- `HOSTNAME`: bind address for the Node process
- `PORT`: application port, fixed at `3000`
- `NEXT_PUBLIC_APP_BASE_PATH`: public base path
- `NEXT_PUBLIC_APP_URL`: canonical external URL
- `NEXT_PUBLIC_ENABLE_ANALYTICS`: analytics toggle
- `NEXT_PUBLIC_ENABLE_SOCIAL_EMBEDS`: social/embed toggle
- `TRUST_PROXY`: whether the app is expected behind Nginx

## next.config.ts

Configured in [next.config.ts](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/next.config.ts).

What it does:

- uses `standalone` output for Node deployments
- keeps the separate static export flow for `build:static`
- reads `NEXT_PUBLIC_APP_BASE_PATH`
- disables `X-Powered-By`
- enables compression and ETags
- adds enterprise-safe security headers
- sets long cache TTL for optimized static image delivery
- pins Turbopack root to the repo to avoid workspace-root ambiguity

## package.json Scripts

Defined in [package.json](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/package.json).

- `npm run dev`: local development on port `3000`
- `npm run dev:local`: same as local development
- `npm run dev:vm`: development VM bind on `0.0.0.0:3000`
- `npm run build:development`: build using `.env.development`
- `npm run build:staging`: build using `.env.staging`
- `npm run build:production`: build using `.env.production`
- `npm run start:development`: run development VM build on port `3000`
- `npm run start:staging`: run staging build on port `3000`
- `npm run start:production`: run production build on port `3000`

The scripts use [run-with-env.mjs](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/scripts/run-with-env.mjs) so each environment can load its own env file without extra dependencies.

## Folder Structure

Recommended Linux deployment layout:

```text
/opt/nicsi-portal/
  current/
    .next/
    public/
    package.json
    node_modules/
    .env.production
  shared/
    logs/
  releases/
    2026-03-08_120000/
```

Recommended Windows deployment layout:

```text
D:\\apps\\nicsi-portal\\
  current\\
    .next\\
    public\\
    package.json
    node_modules\\
    .env.development
  logs\\
```

## Nginx

- Windows local dynamic: [nginx.windows.local.conf](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/docs/deployment/nginx.windows.local.conf)
- Development VM: [nginx.dev.conf](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/docs/deployment/nginx.dev.conf)
- Staging VM: [nginx.staging.conf](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/docs/deployment/nginx.staging.conf)
- Production: [nginx.production.conf](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/docs/deployment/nginx.production.conf)

What the Nginx configs do:

- reverse proxy all app traffic to `127.0.0.1:3000`
- preserve real client IP and forwarded protocol headers
- support WebSocket upgrades
- add security headers at the edge
- cache `/_next/static` aggressively
- cache public static assets for a shorter controlled duration
- force HTTPS in staging and production

## Windows Commands

Local development:

```bash
npm install
npm run dev:local
```

Local Windows Nginx reverse proxy:

```text
1. Keep `npm run dev` or `npm run dev:local` running on port 3000
2. Replace your Windows Nginx server block with `docs/deployment/nginx.windows.local.conf`
3. Test and reload Nginx
4. Open http://localhost/nicsi/
```

Development-style Node run:

```bash
npm install
npm run build:development
npm run start:development
```

Production-style Node run:

```bash
npm install
npm run build:production
npm run start:production
```

## Linux Commands

Install and run on VM:

```bash
npm ci
npm run build:staging
npm run start:staging
```

Production:

```bash
npm ci
npm run build:production
npm run start:production
```

Nginx enable on Linux:

```bash
sudo cp docs/deployment/nginx.staging.conf /etc/nginx/sites-available/nicsi-portal
sudo ln -s /etc/nginx/sites-available/nicsi-portal /etc/nginx/sites-enabled/nicsi-portal
sudo nginx -t
sudo systemctl reload nginx
```

## Production Readiness Notes

- keep `.env.production` only on the target server
- terminate TLS at Nginx
- run Node as a non-root service account
- use `npm ci` instead of `npm install` on VMs
- rotate logs outside the app directory
- restrict SSH and Nginx admin access by policy
- prefer a systemd service or NSSM/Windows Service wrapper for process supervision
