export type EventCatalogItem = {
  id: number;
  title: string;
  source: string;
  category: string;
  imageUrl: string;
};

export type GalleryCatalogItem = {
  id: number;
  title: string;
  imageUrl: string;
};

export type VideoCatalogItem = {
  id: number;
  title: string;
  thumbnailUrl: string;
  note: string;
};

export const eventsCatalog: EventCatalogItem[] = [
  {
    id: 1,
    title: "Slogan making activities on Swachhata Pakhwada",
    source: "NICSI Official Media Gallery",
    category: "Swachhata Pakhwada",
    imageUrl: "/media-gallery/photos/official/swachhata-pakhwada-slogan-making.jpg",
  },
  {
    id: 2,
    title: "Poster making activities on Swachhata Pakhwada",
    source: "NICSI Official Media Gallery",
    category: "Swachhata Pakhwada",
    imageUrl: "/media-gallery/photos/official/swachhata-pakhwada-poster-making.jpg",
  },
  {
    id: 3,
    title: "Swachhata Pakhwada Pledge Ceremony",
    source: "NICSI Official Media Gallery",
    category: "Swachhata Pakhwada",
    imageUrl: "/media-gallery/photos/official/swachhata-pakhwada-pledge-ceremony.jpg",
  },
  {
    id: 4,
    title: "Rajbhasha Workshop/Meeting",
    source: "NICSI Official Media Gallery",
    category: "Workshop",
    imageUrl: "/media-gallery/photos/official/rajbhasha-workshop-meeting.jpg",
  },
  {
    id: 5,
    title: "Let Us Learn (NICSI Training Programme )",
    source: "NICSI Official Media Gallery",
    category: "Training",
    imageUrl: "/media-gallery/photos/official/let-us-learn-training-programme.jpg",
  },
  {
    id: 6,
    title: "New Year address by MD NICSI",
    source: "NICSI Official Media Gallery",
    category: "Address",
    imageUrl: "/media-gallery/photos/official/new-year-address-md-nicsi.jpg",
  },
  {
    id: 7,
    title: "Shri Alok Tiwari, Deputy Director General, NIC, assumed charge as the new Managing Director of NICSI",
    source: "NICSI Official Media Gallery",
    category: "Leadership",
    imageUrl: "/media-gallery/photos/official/alok-tiwari-managing-director-nicsi.jpg",
  },
  {
    id: 8,
    title: "Hindi Pakhwada 2025",
    source: "NICSI Official Media Gallery",
    category: "Hindi Pakhwada",
    imageUrl: "/media-gallery/photos/official/hindi-pakhwada-2025.jpeg",
  },
  {
    id: 9,
    title: "30th Annual Day of NICSI",
    source: "NICSI Official Media Gallery",
    category: "Annual Day",
    imageUrl: "/media-gallery/photos/official/30th-annual-day-nicsi.jpeg",
  },
  {
    id: 10,
    title: "MoU signing NIC AND NICSI",
    source: "NICSI Official Media Gallery",
    category: "MoU",
    imageUrl: "/media-gallery/photos/official/mou-signing-nic-and-nicsi.jpeg",
  },
  {
    id: 11,
    title: "Swachhata Pledge 2024",
    source: "NICSI Official Media Gallery",
    category: "Swachhata",
    imageUrl: "/media-gallery/photos/official/swachhata-pledge-2024.jpeg",
  },
  {
    id: 12,
    title: "29th Annual Day of NICSI",
    source: "NICSI Official Media Gallery",
    category: "Annual Day",
    imageUrl: "/media-gallery/photos/official/29th-annual-day-nicsi.jpeg",
  },
  {
    id: 13,
    title: "Yoga Day 2024",
    source: "NICSI Official Media Gallery",
    category: "Yoga Day",
    imageUrl: "/media-gallery/photos/official/yoga-day-2024.jpeg",
  },
  {
    id: 14,
    title: "MD, NICSI welcomed Shri Bhuvnesh Kumar, AS, MeitY as new Chairperson, NICSI",
    source: "NICSI Official Media Gallery",
    category: "Leadership",
    imageUrl: "/media-gallery/photos/official/bhuvnesh-kumar-chairperson-nicsi.jpg",
  },
  {
    id: 15,
    title: "MD NICSI in AI Tech Session, June 2023",
    source: "NICSI Official Media Gallery",
    category: "AI Session",
    imageUrl: "/media-gallery/photos/official/md-nicsi-ai-tech-session-june-2023.jpg",
  },
  {
    id: 16,
    title: "International Yoga Day 2023 in NICSI",
    source: "NICSI Official Media Gallery",
    category: "Yoga Day",
    imageUrl: "/media-gallery/photos/official/international-yoga-day-2023-nicsi.jpg",
  },
  {
    id: 17,
    title: "NICSI",
    source: "NICSI Official Media Gallery",
    category: "NICSI",
    imageUrl: "/media-gallery/photos/official/nicsi-gallery-image-1.jpg",
  },
  {
    id: 18,
    title: "Training Sessions on Qlik+Talend, Apache Superset and Tableau",
    source: "NICSI Official Media Gallery",
    category: "Training",
    imageUrl: "/media-gallery/photos/official/training-sessions-qlik-talend-superset-tableau.jpeg",
  },
  {
    id: 19,
    title: "Bihar Tech Sammelan, July 2023",
    source: "NICSI Official Media Gallery",
    category: "Event",
    imageUrl: "/media-gallery/photos/official/bihar-tech-sammelan-july-2023.jpg",
  },
  {
    id: 20,
    title: "NICSI",
    source: "NICSI Official Media Gallery",
    category: "NICSI",
    imageUrl: "/media-gallery/photos/official/nicsi-gallery-image-2.jpeg",
  },
];

export const galleryCatalog: GalleryCatalogItem[] = eventsCatalog.map((item) => ({
  id: item.id,
  title: item.title,
  imageUrl: item.imageUrl,
}));

export const videosCatalog: VideoCatalogItem[] = [
  {
    id: 1,
    title: "Video Message of ECI for Voter Awareness Election Commission",
    thumbnailUrl: "/media-gallery/videos/eci-voter-awareness.jpg",
    note: "Static archived video reference from the NICSI media record.",
  },
  {
    id: 2,
    title: "Voter Helpline 1950 for Election Related Queries",
    thumbnailUrl: "/media-gallery/videos/voter-helpline-1950.jpg",
    note: "Static archived video reference from the NICSI media record.",
  },
  {
    id: 3,
    title: "Service Voter ETPBS Music Video 60s Hindi",
    thumbnailUrl: "/media-gallery/videos/service-voter-etpbs.jpg",
    note: "Static archived video reference from the NICSI media record.",
  },
  {
    id: 4,
    title: "Video Message on Voter Awareness",
    thumbnailUrl: "/media-gallery/videos/video-message-voter-awareness.jpg",
    note: "Static archived video reference from the NICSI media record.",
  },
];
