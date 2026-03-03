export type AwardEvidence = {
  label: string;
  href: string;
  type: "document";
};

export type AwardRecognitionItem = {
  id: number;
  title: string;
  year: string;
  description: string;
  source: string;
  imageUrl?: string;
  evidence?: AwardEvidence;
};

export type AwardsRecognitionContent = {
  lastUpdated: string;
  items: AwardRecognitionItem[];
};

const awardsRecognitionContent: AwardsRecognitionContent = {
  lastUpdated: "February 27, 2026",
  items: [
    {
      id: 1,
      title: "Digital Governance Excellence Recognition",
      year: "2025",
      description: "Recognized for impactful ICT enablement and service delivery support for government programs.",
      source: "NICSI Annual Report references",
      imageUrl: "https://nicsi.nic.in/assets/images/gallery/nicsi_day_1.jpeg",
      evidence: {
        label: "Annual Report 2023-24",
        href: "/pdfs/reports/Annual_Report_2023-24.pdf",
        type: "document",
      },
    },
    {
      id: 2,
      title: "Public Sector ICT Implementation Appreciation",
      year: "2024",
      description: "Appreciation for efficient project execution and technology advisory support across departments.",
      source: "NICSI Annual Report references",
      imageUrl: "https://nicsi.nic.in/assets/images/gallery/annualday_img1.jpeg",
      evidence: {
        label: "Annual Report 2022-23",
        href: "/pdfs/reports/Annual_Report_2022-23.pdf",
        type: "document",
      },
    },
    {
      id: 3,
      title: "e-Governance Program Contribution Acknowledgement",
      year: "2023",
      description: "Acknowledged for contribution to digital transformation initiatives in the public sector.",
      source: "NICSI Annual Report references",
    },
  ],
};

export async function getAwardsRecognitionContent(): Promise<AwardsRecognitionContent> {
  return awardsRecognitionContent;
}
