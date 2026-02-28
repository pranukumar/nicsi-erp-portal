"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CppActiveTender, CppArchiveTender } from "@/services/cppTenders";

function ActiveTable({ rows }: { rows: CppActiveTender[] }) {
  if (!rows.length) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
        No active CPP tenders are available at this time.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="nic-table min-w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="px-4 py-3">S. No.</th>
            <th className="px-4 py-3">ePublished Date</th>
            <th className="px-4 py-3">Bid Opening Date</th>
            <th className="px-4 py-3">Bid Closing Date</th>
            <th className="px-4 py-3">Tender ID</th>
            <th className="px-4 py-3">Title / Ref. No.</th>
            <th className="px-4 py-3">Tender Description</th>
            <th className="px-4 py-3">Notice</th>
            <th className="px-4 py-3">Document</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.tenderId}-${index}`} className="border-t align-top">
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3">{row.ePublishedDate}</td>
              <td className="px-4 py-3">{row.openingDate}</td>
              <td className="px-4 py-3">{row.closingDate}</td>
              <td className="px-4 py-3 font-semibold text-[#0F172A]">{row.tenderId}</td>
              <td className="px-4 py-3">{row.titleRefNo}</td>
              <td className="px-4 py-3">{row.description}</td>
              <td className="px-4 py-3">
                {row.noticeUrl ? (
                  <Link href={row.noticeUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100">
                    View
                  </Link>
                ) : (
                  <span className="text-xs text-gray-500">-</span>
                )}
              </td>
              <td className="px-4 py-3">
                {row.documentUrl ? (
                  <Link href={row.documentUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100">
                    PDF
                  </Link>
                ) : (
                  <span className="text-xs text-gray-500">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArchiveTable({ rows, serialOffset = 0 }: { rows: CppArchiveTender[]; serialOffset?: number }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="nic-table min-w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="px-4 py-3">S. No.</th>
            <th className="px-4 py-3">Tender Description</th>
            <th className="px-4 py-3">Tender Reference Number</th>
            <th className="px-4 py-3">Tender ID</th>
            <th className="px-4 py-3">Notice</th>
            <th className="px-4 py-3">Document</th>
            <th className="px-4 py-3">End Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.tenderId}-${serialOffset + index}`} className="border-t align-top">
              <td className="px-4 py-3">{serialOffset + index + 1}</td>
              <td className="px-4 py-3">{row.description}</td>
              <td className="px-4 py-3">{row.tenderReferenceNumber}</td>
              <td className="px-4 py-3 font-semibold text-[#0F172A]">{row.tenderId}</td>
              <td className="px-4 py-3">
                {row.noticeUrl ? (
                  <Link href={row.noticeUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100">
                    View
                  </Link>
                ) : (
                  <span className="text-xs text-gray-500">-</span>
                )}
              </td>
              <td className="px-4 py-3">
                {row.documentUrl ? (
                  <Link href={row.documentUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100">
                    PDF
                  </Link>
                ) : (
                  <span className="text-xs text-gray-500">-</span>
                )}
              </td>
              <td className="px-4 py-3">{row.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CppTendersTabs({
  active,
  archive,
}: {
  active: CppActiveTender[];
  archive: CppArchiveTender[];
}) {
  const [tab, setTab] = useState<"active" | "archive">("active");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  const filteredArchive = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return archive;
    return archive.filter((item) => {
      const haystack = `${item.description} ${item.tenderReferenceNumber} ${item.tenderId} ${item.endDate}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [archive, search]);

  const totalPages = Math.max(1, Math.ceil(filteredArchive.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const pagedArchive = filteredArchive.slice(start, start + PAGE_SIZE);

  return (
    <>
      <div className="mt-5 inline-flex overflow-hidden rounded-lg border border-blue-200 bg-white">
        <button
          type="button"
          onClick={() => setTab("active")}
          className={`px-4 py-2 text-sm font-semibold transition ${
            tab === "active" ? "bg-[#003A8C] text-white" : "bg-white text-[#0F172A] hover:bg-blue-50"
          }`}
        >
          Current CPP Tenders ({active.length})
        </button>
        <button
          type="button"
          onClick={() => {
            setTab("archive");
            setPage(1);
          }}
          className={`border-l border-blue-200 px-4 py-2 text-sm font-semibold transition ${
            tab === "archive" ? "bg-[#003A8C] text-white" : "bg-white text-[#0F172A] hover:bg-blue-50"
          }`}
        >
          Archive CPP Tenders ({archive.length})
        </button>
      </div>

      {tab === "archive" ? (
        <div className="mt-4 rounded-lg border border-blue-100 bg-[#F8FAFF] p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              placeholder="Search archive tenders..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm md:w-[340px]"
            />
            <p className="text-xs text-gray-600">
              Showing {filteredArchive.length === 0 ? 0 : start + 1}-{Math.min(start + PAGE_SIZE, filteredArchive.length)} of{" "}
              {filteredArchive.length}
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-4">
        {tab === "active" ? <ActiveTable rows={active} /> : <ArchiveTable rows={pagedArchive} serialOffset={start} />}
      </div>

      {tab === "archive" && filteredArchive.length > 0 ? (
        <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            disabled={safePage <= 1}
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm font-medium text-[#0F172A]">
            Page {safePage} of {totalPages}
          </span>
          <button
            type="button"
            disabled={safePage >= totalPages}
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      ) : null}
    </>
  );
}
