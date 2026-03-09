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

const CURRENT_BIDS: GemBid[] = [
  {
    bidNo: "GEM/2026/B/7086136",
    startDate: "08-01-2026",
    endDate: "25-02-2026",
    brief: "Network Load Balancer and Web Application Firewall",
    documentUrl: "/pdfs/gem-bids/GeM-Bidding-8811162.pdf",
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

const ARCHIVE_BIDS: GemBid[] = [
  {
    bidNo: "GEM/2025/B/6569628",
    startDate: "-",
    endDate: "18-09-2025",
    brief: "Customized AMC/CMC for Pre-owned products",
    documentUrl: "/pdfs/gem-bids/GeM-Bidding-8221341.pdf",
  },
  {
    bidNo: "GEM/2025/B/6882638",
    startDate: "-",
    endDate: "22-11-2025",
    brief: "Video Conferencing End Point",
    documentUrl: "/pdfs/gem-bids/GeM-Bidding-8578887.pdf",
  },
  {
    bidNo: "GEM/2025/B/6140386",
    startDate: "-",
    endDate: "19-09-2025",
    brief: "Hiring of Agency for IT Projects",
  },
];

export async function getGemBidsContent(): Promise<GemBidsContent> {
  return {
    currentBids: CURRENT_BIDS,
    archiveBids: ARCHIVE_BIDS,
    sourceDate: "09 March 2026",
    fallbackUsed: false,
  };
}
