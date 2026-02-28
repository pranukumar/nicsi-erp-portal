export type GemBid = {
  bidNo: string;
  startDate: string;
  endDate: string;
  brief: string;
  documentUrl?: string;
};

export type GemBidsContent = {
  currentBids: GemBid[];
  archiveBids: GemBid[];
  sourceDate: string;
  fallbackUsed: boolean;
};

const CURRENT_URL = "https://nicsi.nic.in/gem-bids";
const ARCHIVE_URL = "https://nicsi.nic.in/archive-gem-bids";

const FALLBACK_CURRENT: GemBid[] = [
  {
    bidNo: "GEM/2026/B/7086136",
    startDate: "08-01-2026",
    endDate: "25-02-2026",
    brief: "Network Load Balancer and Web Application Firewall",
    documentUrl: "https://nicsi.nic.in/downloadPdf?fileName=GeM-Bidding-8811162.pdf",
  },
  {
    bidNo: "GEM/2026/B/7215376",
    startDate: "10-02-2026",
    endDate: "03-03-2026",
    brief: "Selection of System Integrator",
  },
  {
    bidNo: "GEM/2026/B/7249666",
    startDate: "17-02-2026",
    endDate: "27-02-2026",
    brief: "Video Conferencing End Point",
  },
];

const FALLBACK_ARCHIVE: GemBid[] = [
  {
    bidNo: "GEM/2025/B/6569628",
    startDate: "-",
    endDate: "18-09-2025",
    brief: "Customized AMC/CMC for Pre-owned products",
    documentUrl: "https://nicsi.nic.in/downloadPdf?fileName=GeM-Bidding-8221341.pdf",
  },
  {
    bidNo: "GEM/2025/B/6882638",
    startDate: "-",
    endDate: "22-11-2025",
    brief: "Video Conferencing End Point",
    documentUrl: "https://nicsi.nic.in/downloadPdf?fileName=GeM-Bidding-8578887.pdf",
  },
  {
    bidNo: "GEM/2025/B/6140386",
    startDate: "-",
    endDate: "19-09-2025",
    brief: "Hiring of Agency for IT Projects",
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

function formatDateParts(day: number, month: number, year: number): string {
  const dd = String(day).padStart(2, "0");
  const mm = String(month).padStart(2, "0");
  const yyyy = String(year);
  return `${dd}-${mm}-${yyyy}`;
}

function normalizeDate(value: string): string {
  const raw = value.trim();
  if (!raw) return "";

  const numeric = raw.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{2,4})$/);
  if (numeric) {
    const day = Number(numeric[1]);
    const month = Number(numeric[2]);
    let year = Number(numeric[3]);
    if (year < 100) year += 2000;
    if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
      return formatDateParts(day, month, year);
    }
  }

  const textual = raw.match(/^(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})$/);
  if (textual) {
    const day = Number(textual[1]);
    const monthToken = textual[2];
    const year = Number(textual[3]);
    const parsed = new Date(`${monthToken} ${day}, ${year}`);
    if (!Number.isNaN(parsed.getTime())) {
      return formatDateParts(parsed.getDate(), parsed.getMonth() + 1, parsed.getFullYear());
    }
  }

  return raw.replace(/[/.]/g, "-");
}

function extractDateValues(text: string): string[] {
  const values: string[] = [];
  const patterns = [
    /\b\d{1,2}[-/.]\d{1,2}[-/.]\d{2,4}\b/g,
    /\b\d{1,2}\s+[A-Za-z]{3,9}\s+\d{4}\b/g,
  ];

  for (const pattern of patterns) {
    const matches = text.match(pattern) ?? [];
    for (const match of matches) {
      const normalized = normalizeDate(match);
      if (normalized && !values.includes(normalized)) {
        values.push(normalized);
      }
    }
  }

  return values;
}

function extractCellHtml(rowHtml: string): string[] {
  return [...rowHtml.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) => m[1] ?? "");
}

function getDocumentLink(rowHtml: string, preferredCellHtml?: string): string | undefined {
  const source = preferredCellHtml ?? rowHtml;
  const hrefMatch = source.match(/href=["']([^"']+)["']/i);
  if (!hrefMatch?.[1]) return undefined;
  const href = hrefMatch[1].trim();
  if (!href) return undefined;
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return href;
  }
  if (href.startsWith("/")) {
    return `https://nicsi.nic.in${href}`;
  }
  return `https://nicsi.nic.in/${href}`;
}

function parseGemBidsFromHtml(html: string, mode: "current" | "archive"): GemBid[] {
  const rows = html.match(/<tr[\s\S]*?<\/tr>/gi) ?? [];
  const parsed: GemBid[] = [];
  const seen = new Set<string>();

  for (const rowHtml of rows) {
    const cellsHtml = extractCellHtml(rowHtml);
    if (!cellsHtml.length) continue;
    const cells = cellsHtml.map((cell) => stripTags(cell));

    const rowText = stripTags(rowHtml);
    const bidNoMatch = rowText.match(/GEM\/\d{4}\/B\/\d+/i);
    if (!bidNoMatch) continue;
    const bidNo = bidNoMatch[0].toUpperCase();
    const uniqueKey = mode === "archive" ? `${bidNo}|${cells[cells.length - 1] ?? ""}` : bidNo;
    if (seen.has(uniqueKey)) continue;

    let startDate = "-";
    let endDate = "-";
    let brief = "";
    let documentUrl: string | undefined;

    if (mode === "current" && cells.length >= 6) {
      startDate = normalizeDate(cells[1]) || "-";
      endDate = normalizeDate(cells[2]) || "-";
      brief = cells[4] ?? "";
      documentUrl = getDocumentLink(rowHtml, cellsHtml[5]);
    } else if (mode === "archive" && cells.length >= 5) {
      startDate = "-";
      endDate = normalizeDate(cells[4]) || "-";
      brief = cells[2] ?? "";
      documentUrl = getDocumentLink(rowHtml, cellsHtml[3]);
    } else {
      const cellDateMatches = cells.flatMap((cell) => extractDateValues(cell));
      const rowDateMatches = extractDateValues(rowText);
      const mergedDates = [...cellDateMatches, ...rowDateMatches].filter(
        (value, index, list) => list.indexOf(value) === index,
      );
      startDate = mergedDates[0] ?? "-";
      endDate = mergedDates[1] ?? (mode === "archive" ? mergedDates[0] ?? "-" : "-");
      brief = cells[cells.length - 2] ?? rowText;
      documentUrl = getDocumentLink(rowHtml);
    }

    if (!brief || brief.length < 3) {
      brief = rowText;
    }

    seen.add(uniqueKey);
    parsed.push({ bidNo, startDate, endDate, brief, documentUrl });
  }

  return parsed;
}

async function fetchGemBids(url: string): Promise<GemBid[]> {
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 * 60 * 6 },
      headers: { "User-Agent": "NICSI-Portal/1.0 (+https://nicsi.nic.in)" },
    });
    if (!response.ok) return [];
    const html = await response.text();
    return parseGemBidsFromHtml(html, url.includes("archive-gem-bids") ? "archive" : "current");
  } catch {
    return [];
  }
}

export async function getGemBidsContent(): Promise<GemBidsContent> {
  const [current, archive] = await Promise.all([
    fetchGemBids(CURRENT_URL),
    fetchGemBids(ARCHIVE_URL),
  ]);

  const currentBids = current.length ? current : FALLBACK_CURRENT;
  const archiveBids = archive.length ? archive : FALLBACK_ARCHIVE;

  return {
    currentBids,
    archiveBids,
    sourceDate: new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date()),
    fallbackUsed: current.length === 0 || archive.length === 0,
  };
}
