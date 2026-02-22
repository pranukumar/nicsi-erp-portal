import { getPool } from "@/lib/postgres";

export type HomeTrack = {
  title: string;
  text: string;
  href: string;
  iconKey: string;
};

const fallbackTracks: HomeTrack[] = [
  {
    title: "Company Profile",
    text: "Institutional delivery support for government digital initiatives, consulting, and implementation services.",
    href: "/about",
    iconKey: "building",
  },
  {
    title: "National & International Projects",
    text: "Project support model spanning domestic assignments and international collaboration-oriented engagements.",
    href: "/services",
    iconKey: "globe",
  },
  {
    title: "Cloud Services",
    text: "Managed cloud and hosting-oriented services for secure, scalable public systems.",
    href: "/services",
    iconKey: "cloud",
  },
  {
    title: "Tender Information",
    text: "Notices, bid-related updates, and process references for participating organizations.",
    href: "/tenders",
    iconKey: "file",
  },
];

export async function getHomeTracks(): Promise<HomeTrack[]> {
  const pool = getPool();
  if (!pool) {
    return fallbackTracks;
  }

  try {
    const result = await pool.query<{
      title: string;
      description: string;
      href: string;
      icon_key: string;
    }>(
      `
        SELECT title, description, href, icon_key
        FROM home_key_tracks
        WHERE is_active = true
        ORDER BY display_order ASC, id ASC
      `,
    );

    if (!result.rows.length) {
      return fallbackTracks;
    }

    return result.rows.map((row) => ({
      title: row.title,
      text: row.description,
      href: row.href,
      iconKey: row.icon_key,
    }));
  } catch (error) {
    console.error("Failed to load home tracks from PostgreSQL:", error);
    return fallbackTracks;
  }
}
