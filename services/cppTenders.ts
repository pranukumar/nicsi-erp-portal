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

const ACTIVE_TENDERS: CppActiveTender[] = [];

const ARCHIVE_TENDERS: CppArchiveTender[] = [
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

export async function getCppTendersContent(): Promise<CppTendersContent> {
  return {
    active: ACTIVE_TENDERS,
    archive: ARCHIVE_TENDERS,
    fallbackUsed: false,
  };
}
