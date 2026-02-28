export type CppActiveTender = {
  ePublishedDate: string;
  openingDate: string;
  closingDate: string;
  tenderId: string;
  titleRefNo: string;
  description: string;
  noticeUrl?: string;
  documentUrl?: string;
};

export type CppArchiveTender = {
  description: string;
  tenderReferenceNumber: string;
  tenderId: string;
  noticeUrl?: string;
  documentUrl?: string;
  endDate: string;
};

export type CppTendersContent = {
  active: CppActiveTender[];
  archive: CppArchiveTender[];
  fallbackUsed: boolean;
};

const ACTIVE_URL = "https://nicsi.nic.in/active-Tender";
const ARCHIVE_URL = "https://nicsi.nic.in/archive-active-tenders";

const FALLBACK_ACTIVE: CppActiveTender[] = [];

const FALLBACK_ARCHIVE: CppArchiveTender[] = [
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/e-Governance Consultancy Services/2025/06",
    tenderId: "2025_NICSI_240876_1",
    endDate: "-",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/MSP for CDN Services/2025/07",
    tenderId: "2025_NICSI_242231_1",
    endDate: "-",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/MSP for APM Services/2025/08",
    tenderId: "2025_NICSI_242246_1",
    endDate: "-",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/Communication And Outreach Services/2025/09",
    tenderId: "2025_NICSI_249282_1",
    endDate: "-",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/e-Governance QR Code Services/2025/11",
    tenderId: "2025_NICSI_244438_1",
    endDate: "-",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/National e-Vidhan Application/2025/03",
    tenderId: "2025_NICSI_236984_1",
    endDate: "-",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/e-Passport Readers/2025/10",
    tenderId: "2025_NICSI_243612_1",
    endDate: "2025-12-02",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/Office Support and PMS/2025/14",
    tenderId: "2025_NICSI_253313_1",
    endDate: "2025-12-30",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/MSP for CDN Services /2025/18",
    tenderId: "2025_NICSI_256966_1",
    endDate: "2026-01-12",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI /CSA - Critical Applications /2025/16",
    tenderId: "2025_NICSI_257137_1",
    endDate: "2026-01-28",
  },
  {
    description: "Notice Inviting RFE",
    tenderReferenceNumber: "NICSI/Application Modernization and Digital Transformation/2025/12",
    tenderId: "2025_NICSI_246754_1",
    endDate: "2025-10-28",
  },
  {
    description: "RFP Notice",
    tenderReferenceNumber: "NICSI/MSP for NEVA-MP Vidhan Sabha/2025/13",
    tenderId: "2025_NICSI_249706_1",
    endDate: "2025-10-08",
  },
  {
    description: "RFE NOTICE",
    tenderReferenceNumber: "NICSI /DTM-Digitization /2025/15",
    tenderId: "2025_NICSI_254752_1",
    endDate: "2025-12-17",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/CLOUD SERVICE PROVIDERS- RATES/2025/04",
    tenderId: "2025_NICSI_237065_1",
    endDate: "2025-12-23",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI /ICT Infrastructure Audit/2025/17",
    tenderId: "2025_NICSI_257116_1",
    endDate: "2026-02-04",
  },
  {
    description: "RFE Notice",
    tenderReferenceNumber: "NICSI/Communication And Outreach Services/2025/09",
    tenderId: "2025_NICSI_242982_1",
    endDate: "2025-12-15",
  },
];

function stripTags(value: string): string {
  return value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function cellValues(rowHtml: string): string[] {
  return [...rowHtml.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) => stripTags(m[1] ?? ""));
}

function hrefFromCell(cellHtml: string): string | undefined {
  const hrefMatch = cellHtml.match(/href=["']([^"']+)["']/i);
  const href = hrefMatch?.[1]?.trim();
  if (!href) return undefined;
  if (href.startsWith("http://") || href.startsWith("https://")) return href;
  if (href.startsWith("/")) return `https://nicsi.nic.in${href}`;
  return `https://nicsi.nic.in/${href}`;
}

function cellHtmlList(rowHtml: string): string[] {
  return [...rowHtml.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) => m[1] ?? "");
}

function parseActive(html: string): CppActiveTender[] {
  if (/No Active Tenders available/i.test(html)) return [];
  const rows = html.match(/<tr[\s\S]*?<\/tr>/gi) ?? [];
  const parsed: CppActiveTender[] = [];
  const seen = new Set<string>();

  for (const row of rows) {
    const vals = cellValues(row);
    const htmlCells = cellHtmlList(row);
    if (vals.length < 7) continue;
    const tenderId = vals[4] ?? "";
    if (!tenderId || !/\d{4}_NICSI_/i.test(tenderId)) continue;
    if (seen.has(tenderId)) continue;
    seen.add(tenderId);

    parsed.push({
      ePublishedDate: vals[1] || "-",
      openingDate: vals[2] || "-",
      closingDate: vals[3] || "-",
      tenderId,
      titleRefNo: vals[5] || "-",
      description: vals[6] || "-",
      noticeUrl: htmlCells[7] ? hrefFromCell(htmlCells[7]) : undefined,
      documentUrl: htmlCells[8] ? hrefFromCell(htmlCells[8]) : undefined,
    });
  }

  return parsed;
}

function parseArchive(html: string): CppArchiveTender[] {
  const rows = html.match(/<tr[\s\S]*?<\/tr>/gi) ?? [];
  const parsed: CppArchiveTender[] = [];
  const seen = new Set<string>();

  for (const row of rows) {
    const vals = cellValues(row);
    const htmlCells = cellHtmlList(row);
    if (vals.length < 5) continue;
    const tenderId = vals[3] ?? "";
    if (!tenderId || !/\d{4}_NICSI_/i.test(tenderId)) continue;
    const key = `${tenderId}|${vals[2] ?? ""}`;
    if (seen.has(key)) continue;
    seen.add(key);

    parsed.push({
      description: vals[1] || "-",
      tenderReferenceNumber: vals[2] || "-",
      tenderId,
      noticeUrl: htmlCells[4] ? hrefFromCell(htmlCells[4]) : undefined,
      documentUrl: htmlCells[5] ? hrefFromCell(htmlCells[5]) : undefined,
      endDate: vals[6] || "-",
    });
  }

  return parsed;
}

async function fetchHtml(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 * 60 * 6 },
      headers: { "User-Agent": "NICSI-Portal/1.0 (+https://nicsi.nic.in)" },
    });
    if (!response.ok) return "";
    return await response.text();
  } catch {
    return "";
  }
}

export async function getCppTendersContent(): Promise<CppTendersContent> {
  const [activeHtml, archiveHtml] = await Promise.all([
    fetchHtml(ACTIVE_URL),
    fetchHtml(ARCHIVE_URL),
  ]);

  const active = activeHtml ? parseActive(activeHtml) : [];
  const archive = archiveHtml ? parseArchive(archiveHtml) : [];

  return {
    active: activeHtml ? active : FALLBACK_ACTIVE,
    archive: archive.length ? archive : FALLBACK_ARCHIVE,
    fallbackUsed: !activeHtml || !archiveHtml || archive.length === 0,
  };
}
