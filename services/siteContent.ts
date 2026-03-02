import { getPool } from "@/lib/postgres";

export type Announcement = {
  text: string;
  href: string;
};

export type ContactInfo = {
  officeName: string;
  addressLines: string[];
  phones: string[];
  emails: string[];
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterContent = {
  quickLinks: FooterLink[];
  resourceLinks: FooterLink[];
};

const fallbackAnnouncements: Announcement[] = [
  { text: "Corrigendum issued for cloud infrastructure tender batch Q1-2026.", href: "/tenders" },
  { text: "Updated vendor document checklist published in forms section.", href: "/forms" },
  { text: "Vacancies are open for project and security operations teams.", href: "/vacancies" },
];

const fallbackContactInfo: ContactInfo = {
  officeName: "National Informatics Centre Services Incorporated",
  addressLines: ["6th Floor (Hall No. 2 & 3), NBCC Tower, 15 Bhikaji Cama Place, New Delhi - 110066"],
  phones: ["+91-11-22900525", "+91-11-22900523", "8527625551"],
  emails: ["info-nicsi@nic.in", "mdnicsi@nic.in"],
};

const fallbackFooterContent: FooterContent = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Tenders", href: "/tenders" },
    { label: "Vacancies", href: "/vacancies" },
    { label: "Contact Us", href: "/contact" },
  ],
  resourceLinks: [
    { label: "Forms", href: "/forms" },
    { label: "Empanelled Vendors", href: "/empanelled-vendors" },
    { label: "Portal Login", href: "/login" },
  ],
};

export async function getHeaderAnnouncements(): Promise<Announcement[]> {
  const pool = getPool();
  if (!pool) {
    return fallbackAnnouncements;
  }

  try {
    const result = await pool.query<{
      notice_text: string;
      href: string;
    }>(
      `
        SELECT notice_text, href
        FROM header_announcements
        WHERE is_active = true
        ORDER BY display_order ASC, id ASC
      `,
    );

    if (!result.rows.length) {
      return fallbackAnnouncements;
    }

    return result.rows.map((row) => ({
      text: row.notice_text,
      href: row.href,
    }));
  } catch (error) {
    console.error("Failed to load header announcements from PostgreSQL:", error);
    return fallbackAnnouncements;
  }
}

export async function getContactInfo(): Promise<ContactInfo> {
  const pool = getPool();
  if (!pool) {
    return fallbackContactInfo;
  }

  try {
    const result = await pool.query<{
      office_name: string;
      address_line_1: string;
      address_line_2: string | null;
      phone_primary: string | null;
      phone_secondary: string | null;
      phone_tertiary: string | null;
      email_primary: string | null;
      email_secondary: string | null;
    }>(
      `
        SELECT
          office_name,
          address_line_1,
          address_line_2,
          phone_primary,
          phone_secondary,
          phone_tertiary,
          email_primary,
          email_secondary
        FROM contact_details
        WHERE is_active = true
        ORDER BY id DESC
        LIMIT 1
      `,
    );

    const row = result.rows[0];
    if (!row) {
      return fallbackContactInfo;
    }

    return {
      officeName: row.office_name,
      addressLines: [row.address_line_1, row.address_line_2].filter((value): value is string => Boolean(value)),
      phones: [row.phone_primary, row.phone_secondary, row.phone_tertiary].filter((value): value is string => Boolean(value)),
      emails: [row.email_primary, row.email_secondary].filter((value): value is string => Boolean(value)),
    };
  } catch (error) {
    console.error("Failed to load contact details from PostgreSQL:", error);
    return fallbackContactInfo;
  }
}

export async function getFooterContent(): Promise<FooterContent> {
  const pool = getPool();
  if (!pool) {
    return fallbackFooterContent;
  }

  try {
    const result = await pool.query<{
      section_key: string;
      label: string;
      href: string;
    }>(
      `
        SELECT section_key, label, href
        FROM footer_links
        WHERE is_active = true
        ORDER BY section_key ASC, display_order ASC, id ASC
      `,
    );

    if (!result.rows.length) {
      return fallbackFooterContent;
    }

    const quickLinks = result.rows
      .filter((row) => row.section_key === "quick")
      .map((row) => ({ label: row.label, href: row.href }));

    const resourceLinks = result.rows
      .filter((row) => row.section_key === "resource")
      .map((row) => ({ label: row.label, href: row.href }));

    return {
      quickLinks: quickLinks.length > 0 ? quickLinks : fallbackFooterContent.quickLinks,
      resourceLinks: resourceLinks.length > 0 ? resourceLinks : fallbackFooterContent.resourceLinks,
    };
  } catch (error) {
    console.error("Failed to load footer links from PostgreSQL:", error);
    return fallbackFooterContent;
  }
}
