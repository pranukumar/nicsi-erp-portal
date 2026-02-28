const baseUrl = "https://nicsi.nic.in";

const feedItems = [
  {
    title: "Career Opportunities - NICSI",
    description: "Current openings and archived recruitment notifications.",
    link: `${baseUrl}/career`,
    pubDate: "Fri, 27 Feb 2026 10:00:00 GMT",
  },
  {
    title: "Internship Application Window",
    description: "Online internship application process and window details.",
    link: `${baseUrl}/internship`,
    pubDate: "Fri, 27 Feb 2026 10:00:00 GMT",
  },
  {
    title: "News and Updates",
    description: "Latest notices, announcements and institutional updates.",
    link: `${baseUrl}/news-updates`,
    pubDate: "Fri, 27 Feb 2026 10:00:00 GMT",
  },
];

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const itemsXml = feedItems
    .map(
      (item) => `
      <item>
        <title>${escapeXml(item.title)}</title>
        <description>${escapeXml(item.description)}</description>
        <link>${escapeXml(item.link)}</link>
        <guid>${escapeXml(item.link)}</guid>
        <pubDate>${item.pubDate}</pubDate>
      </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>NICSI ERP Portal Updates</title>
    <link>${baseUrl}</link>
    <description>Official updates from NICSI portal.</description>
    <language>en-in</language>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=900",
    },
  });
}
