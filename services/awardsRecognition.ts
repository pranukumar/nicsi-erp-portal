export type AwardEvidence = {
  label: string;
  href: string;
  type: "document";
};

export type AwardRecognitionItem = {
  id: number;
  title: string;
  year?: string;
  description: string;
  source: string;
  imageRef?: string;
  imageUrl?: string;
  evidence?: AwardEvidence;
};

export type AwardsRecognitionContent = {
  lastUpdated: string;
  items: AwardRecognitionItem[];
};

const LAST_UPDATED = "March 3, 2026";

const DOCX_AWARDS: AwardRecognitionItem[] = [
  {
    id: 1,
    title: "1st Prize - Driving Innovative IT Solutions & e-Governance Services",
    year: "2025",
    description:
      "National Informatics Centre Services Inc. (NICSI) was awarded 1st Prize at the Rising PSEs - Indian Dairy, Food & Agriculture Expo (21-23 June 2025, Bharat Mandapam, New Delhi).",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-01.jpeg",
    imageUrl: "/logos/award/award-docx-01.jpeg",
  },
  {
    id: 2,
    title: "Gems of Digital India Award 2024 (Jury's Choice)",
    year: "2024",
    description:
      "The iRAD/eDAR initiative of the Ministry of Road Transport and Highways, Government of India, received this award for excellence in e-Governance.",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-02.jpeg",
    imageUrl: "/logos/award/award-docx-02.jpeg",
  },
  {
    id: 3,
    title: "1st Prize - Excellence in Innovative IT Solutions & E-Governance Services (Vibrant India 2025)",
    year: "2025",
    description:
      "NICSI was conferred 1st Prize at Vibrant India 2025 Expo held at Dilli Haat, Pitampura, New Delhi.",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-03.jpeg",
    imageUrl: "/logos/award/award-docx-03.jpeg",
  },
  {
    id: 4,
    title: "Information Security Dialogue 2022 - Token of Gratitude (Speaker Recognition)",
    year: "2022",
    description:
      "Token of gratitude presented on 11 March 2022 for speaker contribution on securing India's digital transformation and strengthening cybersecurity resilience.",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-04.jpeg",
    imageUrl: "/logos/award/award-docx-04.jpeg",
  },
  {
    id: 5,
    title: "Recognition from Defence Accounts Department",
    description:
      "Commemorative plaque presented by the Defence Accounts Department, Controller General of Defence Accounts, New Delhi, acknowledging collaboration for digital governance and financial management systems.",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-05.jpeg",
    imageUrl: "/logos/award/award-docx-05.jpeg",
  },
  {
    id: 6,
    title: "Dun & Bradstreet Public Sector Excellence Award 2024",
    year: "2024",
    description:
      "Presented by Dun & Bradstreet in association with Iron Mountain, recognizing excellence in the Telecommunication & Information Technology category (Central PSU).",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-06.jpeg",
    imageUrl: "/logos/award/award-docx-06.jpeg",
  },
  {
    id: 7,
    title: "Recognition as Guest Speaker - eGov Conference 2021",
    year: "2021",
    description:
      "Token of appreciation from eGov Magazine for participation as a guest speaker at a national-level e-Governance forum.",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-07.jpeg",
    imageUrl: "/logos/award/award-docx-07.jpeg",
  },
  {
    id: 8,
    title: "Digital Champions Award - Technology Sabha",
    description:
      "Recognition conferred at Technology Sabha for NICSI's role as a digital champion.",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-08.jpeg",
    imageUrl: "/logos/award/award-docx-08.jpeg",
  },
  {
    id: 9,
    title: "Token of Appreciation - Jan Parichay (Seamless & Secure Single Sign-On)",
    description:
      "Token of appreciation for contribution to Jan Parichay, a seamless and secure Single Sign-On (SSO) platform for government applications.",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-09.jpeg",
    imageUrl: "/logos/award/award-docx-09.jpeg",
  },
  {
    id: 10,
    title: "Token of Appreciation - Directorate of Transport, Government of Goa (e-DAR Orientation Program)",
    description:
      "Token of appreciation for contribution to the e-DAR Orientation Program.",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-10.jpeg",
    imageUrl: "/logos/award/award-docx-10.jpeg",
  },
  {
    id: 11,
    title: "DigiTech Conclave and Awards 2025",
    year: "2025",
    description:
      "NICSI was honored as Digital Transformation Leader in Public Sector, highlighting leadership in large-scale digital initiatives including the e-DAR platform.",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-11.jpeg",
    imageUrl: "/logos/award/award-docx-11.jpeg",
  },
  {
    id: 12,
    title: "UT-Level e-DAR Workshop & Launch of Cashless Treatment Scheme",
    description:
      "UT-level workshop focused on implementation readiness of e-DAR across Union Territories, including coordination, data standardization, and streamlined reporting.",
    source: "NICSI Awards and Recognition (DOCX Archive)",
    imageRef: "award-docx-12.jpeg",
    imageUrl: "/logos/award/award-docx-12.jpeg",
  },
];

export async function getAwardsRecognitionContent(): Promise<AwardsRecognitionContent> {
  return {
    lastUpdated: LAST_UPDATED,
    items: DOCX_AWARDS,
  };
}
