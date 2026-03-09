import type { NextConfig } from "next";

const isStaticAuditBuild = process.env.NICSI_STATIC_AUDIT === "1";
const configuredBasePath = process.env.NEXT_PUBLIC_APP_BASE_PATH ?? "/nicsi";
const turbopackRoot = process.env.NICSI_TURBOPACK_ROOT ?? process.cwd();
const normalizeBasePath = (value: string | undefined, fallback = "") => {
  const source = value ?? fallback;
  if (source === "/" || source === "") {
    return "";
  }

  return source.startsWith("/")
    ? source.replace(/\/+$/, "")
    : `/${source.replace(/\/+$/, "")}`;
};
const auditBasePath = normalizeBasePath(process.env.NICSI_STATIC_AUDIT_BASE_PATH, "");
const normalizedBasePath = normalizeBasePath(configuredBasePath, "/nicsi");
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https: ws: wss:",
  "manifest-src 'self'",
  "frame-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  distDir: isStaticAuditBuild ? "home" : ".next",
  output: isStaticAuditBuild ? "export" : "standalone",
  basePath: isStaticAuditBuild ? auditBasePath : normalizedBasePath,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  experimental: {
    cpus: 1,
    workerThreads: false,
    webpackBuildWorker: false,
  },
  turbopack: {
    root: turbopackRoot,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  ...(isStaticAuditBuild
    ? {
        typescript: {
          ignoreBuildErrors: true,
        },
      }
    : {}),
  ...(!isStaticAuditBuild
    ? {
        async headers() {
          return [
            {
              source: "/(.*)",
              headers: [
                { key: "X-DNS-Prefetch-Control", value: "off" },
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
                { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
                { key: "Cross-Origin-Resource-Policy", value: "same-site" },
                { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
                { key: "Origin-Agent-Cluster", value: "?1" },
                {
                  key: "Strict-Transport-Security",
                  value: "max-age=31536000; includeSubDomains; preload",
                },
                {
                  key: "Content-Security-Policy",
                  value: contentSecurityPolicy,
                },
              ],
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
