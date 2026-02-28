const routes = [
  "",
  "/about",
  "/services",
  "/contact",
  "/sitemap",
  "/privacy-policy",
  "/terms-and-conditions",
  "/copyright-policy",
  "/help",
  "/website-policy",
  "/hyperlinking-policy",
  "/accessibility-statement",
  "/national-projects",
  "/state-projects",
  "/meity-projects",
  "/pbd-projects",
  "/centre-of-excellence",
  "/career",
  "/internship",
  "/internship/apply",
  "/news-updates",
  "/press-releases",
  "/events",
  "/awards-recognition",
] as const;

function toIsoDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return new Date("2026-02-28").toISOString();
  }
  return date.toISOString();
}

export function GET() {
  const baseUrl = "https://nicsi.nic.in";
  const lastModified = toIsoDate(process.env.NEXT_PUBLIC_SITE_LAST_UPDATED ?? "2026-02-28");

  const urlset = routes
    .map((route) => {
      const loc = `${baseUrl}${route}`;
      const priority = route === "" ? "1.0" : "0.7";
      const changefreq = route === "" ? "daily" : "weekly";
      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=900",
    },
  });
}
