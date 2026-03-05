"use client";

import { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import {
  RTI_APPEAL_RECORDS,
  RTI_ARCHIVE_RECORDS,
  RTI_DETAILS_RECORDS,
} from "./rti-data";

type MainTab = "act" | "manual" | "pio" | "details" | "appeals";
type RecordView = "current" | "archive";

const PAGE_SIZE = 25;
const RTI_ACT_FILE = "/pdfs/rti/rti-act-2005.pdf";
const RTI_MANUAL_FILE = "/pdfs/rti/rti-manual-2025-26-feb-2026.pdf";

const mainTabs: { key: MainTab; label: string }[] = [
  { key: "act", label: "RTI Act 2005" },
  { key: "manual", label: "RTI Manual" },
  { key: "pio", label: "Details of PIO/Appellate Authority" },
  { key: "details", label: "RTI Details" },
  { key: "appeals", label: "RTI Appeals" },
];

function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (next: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
      <p className="text-gray-600">
        Page {page} of {totalPages}
      </p>
      <div className="inline-flex overflow-hidden rounded-md border border-blue-200">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="px-3 py-1.5 font-semibold text-[#003A8C] transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="border-l border-blue-200 px-3 py-1.5 font-semibold text-[#003A8C] transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function RtiPage() {
  const [activeTab, setActiveTab] = useState<MainTab>("act");
  const [recordView, setRecordView] = useState<RecordView>("current");

  const [detailsQuery, setDetailsQuery] = useState("");
  const [detailsPage, setDetailsPage] = useState(1);

  const [appealsQuery, setAppealsQuery] = useState("");
  const [appealsPage, setAppealsPage] = useState(1);

  const detailsSource = recordView === "current" ? RTI_DETAILS_RECORDS : RTI_ARCHIVE_RECORDS;

  const filteredDetails = useMemo(() => {
    const q = detailsQuery.trim().toLowerCase();
    if (!q) return detailsSource;
    return detailsSource.filter((row) =>
      [
        row.srNo,
        row.rtiNo,
        row.applicantName,
        row.receivedSource,
        row.dateOfReceipt,
        row.currentStatus,
        row.closingDate,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [detailsSource, detailsQuery]);

  const detailsTotalPages = Math.max(1, Math.ceil(filteredDetails.length / PAGE_SIZE));
  const normalizedDetailsPage = Math.min(detailsPage, detailsTotalPages);
  const paginatedDetails = useMemo(() => {
    const start = (normalizedDetailsPage - 1) * PAGE_SIZE;
    return filteredDetails.slice(start, start + PAGE_SIZE);
  }, [filteredDetails, normalizedDetailsPage]);

  const filteredAppeals = useMemo(() => {
    const q = appealsQuery.trim().toLowerCase();
    if (!q) return RTI_APPEAL_RECORDS;
    return RTI_APPEAL_RECORDS.filter((row) =>
      [
        row.srNo,
        row.appealNo,
        row.applicantName,
        row.receivedSource,
        row.dateOfReceipt,
        row.actionToBeTaken,
        row.orderPassedDate,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [appealsQuery]);

  const appealsTotalPages = Math.max(1, Math.ceil(filteredAppeals.length / PAGE_SIZE));
  const normalizedAppealsPage = Math.min(appealsPage, appealsTotalPages);
  const paginatedAppeals = useMemo(() => {
    const start = (normalizedAppealsPage - 1) * PAGE_SIZE;
    return filteredAppeals.slice(start, start + PAGE_SIZE);
  }, [filteredAppeals, normalizedAppealsPage]);

  return (
    <main className="pb-12">
      <PageTitle title="RTI" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap gap-2 rounded-lg border border-blue-200 bg-[#F8FAFF] p-2">
            {mainTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  activeTab === tab.key
                    ? "bg-[#003A8C] text-white"
                    : "text-[#0F172A] hover:bg-blue-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-blue-100 bg-white p-4 md:p-5">
            {activeTab === "act" ? (
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="nic-table min-w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-4 py-3">Sr. No.</th>
                      <th className="px-4 py-3">Document Name</th>
                      <th className="px-4 py-3">File Size</th>
                      <th className="px-4 py-3">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t align-top">
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3 font-medium text-[#0F172A]">RTI Act 2005</td>
                      <td className="px-4 py-3">389.16 KB</td>
                      <td className="px-4 py-3">
                        <a
                          href={RTI_ACT_FILE}
                          download
                          className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                        >
                          Download PDF
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}

            {activeTab === "manual" ? (
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="nic-table min-w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-4 py-3">Sr. No.</th>
                      <th className="px-4 py-3">Document Name</th>
                      <th className="px-4 py-3">File Size</th>
                      <th className="px-4 py-3">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t align-top">
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3 font-medium text-[#0F172A]">RTI Manual 2025-26</td>
                      <td className="px-4 py-3">491 KB</td>
                      <td className="px-4 py-3">
                        <a
                          href={RTI_MANUAL_FILE}
                          download
                          className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                        >
                          Download PDF
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}

            {activeTab === "pio" ? (
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="nic-table min-w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      <th className="px-4 py-3">Sr. No.</th>
                      <th className="px-4 py-3">Role</th>
                      <th className="px-4 py-3">Name & Designation</th>
                      <th className="px-4 py-3">Address</th>
                      <th className="px-4 py-3">Phone</th>
                      <th className="px-4 py-3">E-mail ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t align-top">
                      <td className="px-4 py-3">1</td>
                      <td className="px-4 py-3 font-medium text-[#0F172A]">Central Public Information Officer (CPIO)</td>
                      <td className="px-4 py-3">Shri Ajay Kumar Gupta | General Manager | CPIO</td>
                      <td className="px-4 py-3">NICSI, Hall No.2 & 3, 6th Floor, NBCC Tower, Bhikaji Cama Place, New Delhi, 110066</td>
                      <td className="px-4 py-3">01122900547</td>
                      <td className="px-4 py-3">rti-nicsi[AT]nic[DOT]in</td>
                    </tr>
                    <tr className="border-t align-top">
                      <td className="px-4 py-3">2</td>
                      <td className="px-4 py-3 font-medium text-[#0F172A]">Appellate Authority</td>
                      <td className="px-4 py-3">Shri Naveen Agarwal | Chief General Manager | Appellate Authority</td>
                      <td className="px-4 py-3">NICSI, Hall No.2 & 3, 6th Floor, NBCC Tower, Bhikaji Cama Place, New Delhi, 110066</td>
                      <td className="px-4 py-3">01122900547</td>
                      <td className="px-4 py-3">rti-nicsi[AT]nic[DOT]in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}

            {activeTab === "details" ? (
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex overflow-hidden rounded-lg border border-blue-200 bg-white">
                    <button
                      type="button"
                      onClick={() => {
                        setRecordView("current");
                        setDetailsPage(1);
                      }}
                      className={`px-4 py-2 text-sm font-semibold transition ${
                        recordView === "current"
                          ? "bg-[#003A8C] text-white"
                          : "bg-white text-[#0F172A] hover:bg-blue-50"
                      }`}
                    >
                      RTI Details ({RTI_DETAILS_RECORDS.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setRecordView("archive");
                        setDetailsPage(1);
                      }}
                      className={`border-l border-blue-200 px-4 py-2 text-sm font-semibold transition ${
                        recordView === "archive"
                          ? "bg-[#003A8C] text-white"
                          : "bg-white text-[#0F172A] hover:bg-blue-50"
                      }`}
                    >
                      RTI Archive ({RTI_ARCHIVE_RECORDS.length})
                    </button>
                  </div>

                  <div className="w-full max-w-sm">
                    <input
                      type="text"
                      value={detailsQuery}
                      onChange={(e) => {
                        setDetailsQuery(e.target.value);
                        setDetailsPage(1);
                      }}
                      placeholder="Search RTI number, applicant, status..."
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#003A8C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mb-2 text-sm text-gray-600">
                  Showing {paginatedDetails.length} of {filteredDetails.length} records
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="nic-table min-w-[760px] text-left text-sm md:min-w-[980px]">
                    <thead className="bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-4 py-3">Sr. No.</th>
                        <th className="px-4 py-3">RTI No.</th>
                        <th className="px-4 py-3">Applicant&apos;s Name</th>
                        <th className="px-4 py-3">Received Source</th>
                        <th className="px-4 py-3">Date of Receipt</th>
                        <th className="px-4 py-3">Current Status</th>
                        <th className="px-4 py-3">Closing Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedDetails.length > 0 ? (
                        paginatedDetails.map((row) => (
                          <tr key={`${recordView}-${row.srNo}-${row.rtiNo}-${row.applicantName}`} className="border-t align-top">
                            <td className="px-4 py-3">{row.srNo}</td>
                            <td className="px-4 py-3 font-medium text-[#0F172A]">{row.rtiNo}</td>
                            <td className="px-4 py-3">{row.applicantName}</td>
                            <td className="px-4 py-3">{row.receivedSource}</td>
                            <td className="px-4 py-3">{row.dateOfReceipt}</td>
                            <td className="px-4 py-3">{row.currentStatus}</td>
                            <td className="px-4 py-3">{row.closingDate}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                            No records found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <Pagination
                  page={normalizedDetailsPage}
                  totalPages={detailsTotalPages}
                  onPageChange={(next) => setDetailsPage(Math.max(1, Math.min(detailsTotalPages, next)))}
                />
              </div>
            ) : null}

            {activeTab === "appeals" ? (
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-gray-600">Total Appeals: {RTI_APPEAL_RECORDS.length}</p>
                  <div className="w-full max-w-sm">
                    <input
                      type="text"
                      value={appealsQuery}
                      onChange={(e) => {
                        setAppealsQuery(e.target.value);
                        setAppealsPage(1);
                      }}
                      placeholder="Search appeal no, applicant, action..."
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[#003A8C] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mb-2 text-sm text-gray-600">
                  Showing {paginatedAppeals.length} of {filteredAppeals.length} records
                </div>

                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="nic-table min-w-[760px] text-left text-sm md:min-w-[980px]">
                    <thead className="bg-gray-50 text-gray-700">
                      <tr>
                        <th className="px-4 py-3">Sr. No.</th>
                        <th className="px-4 py-3">Appeal No.</th>
                        <th className="px-4 py-3">Applicant&apos;s Name</th>
                        <th className="px-4 py-3">Received Source</th>
                        <th className="px-4 py-3">Date of Receipt</th>
                        <th className="px-4 py-3">Action to be taken</th>
                        <th className="px-4 py-3">Order Passed Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedAppeals.length > 0 ? (
                        paginatedAppeals.map((row) => (
                          <tr key={`${row.srNo}-${row.appealNo}-${row.applicantName}`} className="border-t align-top">
                            <td className="px-4 py-3">{row.srNo}</td>
                            <td className="px-4 py-3 font-medium text-[#0F172A]">{row.appealNo}</td>
                            <td className="px-4 py-3">{row.applicantName}</td>
                            <td className="px-4 py-3">{row.receivedSource}</td>
                            <td className="px-4 py-3">{row.dateOfReceipt}</td>
                            <td className="px-4 py-3">{row.actionToBeTaken}</td>
                            <td className="px-4 py-3">{row.orderPassedDate}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                            No records found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <Pagination
                  page={normalizedAppealsPage}
                  totalPages={appealsTotalPages}
                  onPageChange={(next) => setAppealsPage(Math.max(1, Math.min(appealsTotalPages, next)))}
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
