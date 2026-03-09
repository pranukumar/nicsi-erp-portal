"use client";

import { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { withSiteBasePath } from "@/lib/staticAudit";
import DocumentGuidance from "@/components/common/DocumentGuidance";

type CareerOpening = {
  particulars: string;
  positions: string[];
  publishedOn: string;
  lastDateToApply: string;
  fileName: string;
  sizeLabel?: string;
};

const SOURCE_BLOCKED_FILES = new Set([
  "Advertisement_for_hiring_of_consultant(Retd. Govt. Officer)_for_NICSI.pdf",
  "AdvertismentForHiringOfConsultant(Retd.Govt.OfficerForFECAndDRC.pdf",
]);

const CURRENT_OPENINGS: CareerOpening[] = [
  {
    particulars: "Advertisement for the position of Chief Human Resource Officer (CHRO) on contract basis in NICSI",
    positions: ["Chief Human Resource Officer (CHRO) on contract basis"],
    publishedOn: "02-02-2026",
    lastDateToApply: "28-02-2026 18:00 Hrs.",
    fileName: "Advertisement_CHRO.pdf",
    sizeLabel: "248.06 KB",
  },
];

const ARCHIVE_OPENINGS: CareerOpening[] = [
  {
    particulars: "Inviting applications for the post of Consultant for Accounts Division",
    positions: ["Consultant (Rtd. Government Official)"],
    publishedOn: "08-10-2025",
    lastDateToApply: "14-10-2025 18:00 Hrs.",
    fileName: "AdvertisementForPostOfConsultantInNICSIAccountsDivision.pdf",
    sizeLabel: "116.29 KB",
  },
  {
    particulars: "Inviting applications for the post of Procurement/Contract Specialist Consultant",
    positions: ["Procurement/Contract Specialist Consultant"],
    publishedOn: "29-05-2025",
    lastDateToApply: "03-06-2025 18:00 Hrs.",
    fileName: "AdvertisementForInvitingApplicationForExpertsconsultantTENDER.pdf",
    sizeLabel: "624.49 KB",
  },
  {
    particulars: "Inviting applications for the post of Civil Consultant",
    positions: ["Civil Consultant"],
    publishedOn: "26-05-2025",
    lastDateToApply: "31-05-2025 18:00 Hrs.",
    fileName: "AdvertisementForInvitingApplicationForExpertsConsultant.pdf",
    sizeLabel: "623.04 KB",
  },
  {
    particulars: "Inviting applications for post of Consultant (Retd. Government Officer)",
    positions: ["Consultant (Rtd. Government Official from pay matrix level of 14 or above)"],
    publishedOn: "28-01-2025",
    lastDateToApply: "31-01-2025 18:00 Hrs.",
    fileName: "Advertisement_for_hiring_of_consultant(Retd. Govt. Officer)_for_NICSI.pdf",
  },
  {
    particulars: "Inviting applications for post of Sr. Lead Specialist Consultant (Daily Basis)",
    positions: ["Sr. Lead Specialist Consultant (Daily Basis)"],
    publishedOn: "02-08-2024",
    lastDateToApply: "07-08-2024 18:00 Hrs.",
    fileName: "AdvertisementForConsultantForDataCenterFV.pdf",
    sizeLabel: "521.71 KB",
  },
  {
    particulars: "Inviting applications for engagement of Retired Government Officer as Consultant on Monthly Basis",
    positions: ["Consultant (Rtd. Government Official from pay matrix level of 13/14)"],
    publishedOn: "26-07-2024",
    lastDateToApply: "30-07-2024 18:00 Hrs.",
    fileName: "AdvertismentForHiringOfConsultant(Retd.Govt.OfficerForFECAndDRC.pdf",
  },
  {
    particulars: "Inviting applications for engagement of Retired Government Officer as Consultant on Monthly Basis",
    positions: ["Consultant (Rtd. Government Official from level of Scientist G/F)"],
    publishedOn: "19-06-2024",
    lastDateToApply: "24-06-2024 18:00 Hrs.",
    fileName: "AdvertisementForPostOfConsultantInNICSI.pdf",
    sizeLabel: "137.63 KB",
  },
  {
    particulars: "NICSI is currently inviting applications for the External Experts purely on Contract/Consolidated basis",
    positions: [
      "Sr. Lead Specialist Consultant",
      "Lead Specialist Consultant",
      "Sr. Specialist Consultant",
      "Specialist Consultant",
      "Associate Specialist Consultant",
      "Associate Consultant",
    ],
    publishedOn: "13-03-2024",
    lastDateToApply: "20-03-2024 18:00 Hrs.",
    fileName: "AdvertisementForInvitingApplicationForEngagementOfExperts.pdf",
    sizeLabel: "101.62 KB",
  },
  {
    particulars: "Calling of applications on a contractual basis in NICSI",
    positions: ["Cyber Security Expert"],
    publishedOn: "29-02-2024",
    lastDateToApply: "20-03-2024 18:00 Hrs.",
    fileName: "DetailedAdvertisement_29.2.2024.pdf",
    sizeLabel: "387.8 KB",
  },
  {
    particulars: "Calling of applications on a contractual basis in NICSI",
    positions: ["Networking Specialist", "Cloud Expert"],
    publishedOn: "27-02-2024",
    lastDateToApply: "20-03-2024 18:00 Hrs.",
    fileName: "NicsiAdvertisementFeb_24.pdf",
    sizeLabel: "1.38 MB",
  },
  {
    particulars: "Calling of applications on a contractual basis in NICSI",
    positions: ["Business Analyst", "System Administrator", "Solution Architect"],
    publishedOn: "23-02-2024",
    lastDateToApply: "20-03-2024 18:00 Hrs.",
    fileName: "NicsiAdvertisement.pdf",
    sizeLabel: "489.62 KB",
  },
];

function fileLink(fileName: string): string {
  return withSiteBasePath(`/pdfs/career/${fileName}`);
}

function OpeningTable({
  rows,
}: {
  rows: CareerOpening[];
}) {
  return (
      <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm md:p-6">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="nic-table min-w-full text-left text-sm">
            <caption className="sr-only">NICSI vacancy notices with publication dates, last dates, and downloadable document access.</caption>
            <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3">Sr. No.</th>
              <th className="px-4 py-3">Particulars</th>
              <th className="px-4 py-3">Position</th>
              <th className="px-4 py-3">Published On</th>
              <th className="px-4 py-3">Last Date To Apply</th>
              <th className="px-4 py-3">Download</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={`${row.fileName}-${index}`} className="border-t align-top">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{row.particulars}</td>
                <td className="px-4 py-3">
                  <ul className="list-disc space-y-1 pl-5">
                    {row.positions.map((position) => (
                      <li key={position}>{position}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-3">{row.publishedOn}</td>
                <td className="px-4 py-3">{row.lastDateToApply}</td>
                <td className="px-4 py-3">
                  {SOURCE_BLOCKED_FILES.has(row.fileName) ? (
                    <span className="inline-flex rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                      Source File Unavailable
                    </span>
                  ) : (
                    <a
                      href={fileLink(row.fileName)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                    >
                      View/Download {row.sizeLabel ? `(PDF, ${row.sizeLabel})` : "(PDF)"}
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState<"current" | "archive">("current");

  return (
    <main className="pb-12">
      <PageTitle title="Vacancies" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="mb-4 rounded-xl border border-blue-100 bg-[#F8FBFF] px-4 py-3 text-sm text-gray-600">
          Vacancy notices are archived locally for static access. Source-blocked files are shown as unavailable.
        </div>
        <div className="mb-4">
          <DocumentGuidance reviewLabel="Vacancy records include publication dates and application deadlines; unavailable source files are explicitly flagged instead of silently broken." />
        </div>
        <div className="mb-4">
          <div className="inline-flex overflow-hidden rounded-lg border border-blue-200 bg-white">
            <button
              type="button"
              onClick={() => setActiveTab("current")}
              className={`px-4 py-2 text-sm font-semibold transition ${
                activeTab === "current"
                  ? "bg-[#003A8C] text-white"
                  : "bg-white text-[#0F172A] hover:bg-blue-50"
              }`}
            >
              Current Vacancies ({CURRENT_OPENINGS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("archive")}
              className={`border-l border-blue-200 px-4 py-2 text-sm font-semibold transition ${
                activeTab === "archive"
                  ? "bg-[#003A8C] text-white"
                  : "bg-white text-[#0F172A] hover:bg-blue-50"
              }`}
            >
              Archive ({ARCHIVE_OPENINGS.length})
            </button>
          </div>
        </div>

        {activeTab === "current" ? (
          <OpeningTable rows={CURRENT_OPENINGS} />
        ) : (
          <OpeningTable rows={ARCHIVE_OPENINGS} />
        )}
      </section>
    </main>
  );
}
