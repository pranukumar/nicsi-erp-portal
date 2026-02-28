"use client";

import { useMemo, useState } from "react";
import type { GemBid } from "@/services/gemBids";
import Link from "next/link";

function getGemBidPlusUrl(bidNo: string): string {
  const encodedBid = encodeURIComponent(bidNo);
  return `https://bidplus.gem.gov.in/advance-search?searchType=bid-search&text=${encodedBid}#tab1`;
}

function BidsTable({ rows, serialOffset = 0 }: { rows: GemBid[]; serialOffset?: number }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="nic-table min-w-full text-left text-sm">
        <thead className="bg-gray-50 text-gray-700">
          <tr>
            <th className="px-4 py-3">S. No.</th>
            <th className="px-4 py-3">Bid Number</th>
            <th className="px-4 py-3">Start Date</th>
            <th className="px-4 py-3">End Date</th>
            <th className="px-4 py-3">Brief Description</th>
            <th className="px-4 py-3">Document</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row.bidNo}-${serialOffset + index}`} className="border-t align-top">
              <td className="px-4 py-3">{serialOffset + index + 1}</td>
              <td className="px-4 py-3">
                <p className="font-semibold text-[#0F172A]">{row.bidNo}</p>
                <Link
                  href={getGemBidPlusUrl(row.bidNo)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-[#003A8C] hover:bg-blue-100"
                >
                  Open on GeM BidPlus
                </Link>
              </td>
              <td className="px-4 py-3">{row.startDate}</td>
              <td className="px-4 py-3">{row.endDate}</td>
              <td className="px-4 py-3">{row.brief}</td>
              <td className="px-4 py-3">
                {row.documentUrl ? (
                  <Link
                    href={row.documentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                  >
                    View PDF
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

export default function GemBidsTabs({
  currentBids,
  archiveBids,
}: {
  currentBids: GemBid[];
  archiveBids: GemBid[];
}) {
  const [tab, setTab] = useState<"current" | "archive">("current");
  const [archiveSearch, setArchiveSearch] = useState("");
  const [archivePage, setArchivePage] = useState(1);
  const PAGE_SIZE = 10;

  const filteredArchive = useMemo(() => {
    const query = archiveSearch.trim().toLowerCase();
    if (!query) return archiveBids;
    return archiveBids.filter((item) => {
      const haystack = `${item.bidNo} ${item.startDate} ${item.endDate} ${item.brief}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [archiveBids, archiveSearch]);

  const totalArchivePages = Math.max(1, Math.ceil(filteredArchive.length / PAGE_SIZE));
  const safeArchivePage = Math.min(archivePage, totalArchivePages);
  const archiveStart = (safeArchivePage - 1) * PAGE_SIZE;
  const pagedArchive = filteredArchive.slice(archiveStart, archiveStart + PAGE_SIZE);

  const switchToTab = (nextTab: "current" | "archive") => {
    setTab(nextTab);
    if (nextTab === "archive") {
      setArchivePage(1);
    }
  };

  return (
    <>
      <div className="mt-5 inline-flex overflow-hidden rounded-lg border border-blue-200 bg-white">
        <button
          type="button"
          onClick={() => switchToTab("current")}
          className={`px-4 py-2 text-sm font-semibold transition ${
            tab === "current" ? "bg-[#003A8C] text-white" : "bg-white text-[#0F172A] hover:bg-blue-50"
          }`}
        >
          Current GeM Bids ({currentBids.length})
        </button>
        <button
          type="button"
          onClick={() => switchToTab("archive")}
          className={`border-l border-blue-200 px-4 py-2 text-sm font-semibold transition ${
            tab === "archive" ? "bg-[#003A8C] text-white" : "bg-white text-[#0F172A] hover:bg-blue-50"
          }`}
        >
          Archive GeM Bids ({archiveBids.length})
        </button>
      </div>

      {tab === "archive" ? (
        <div className="mt-4 rounded-lg border border-blue-100 bg-[#F8FAFF] p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <input
              type="search"
              value={archiveSearch}
              onChange={(event) => {
                setArchiveSearch(event.target.value);
                setArchivePage(1);
              }}
              placeholder="Search archive bids by bid no, date, or keyword..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm md:w-[380px]"
            />
            <p className="text-xs text-gray-600">
              Showing {filteredArchive.length === 0 ? 0 : archiveStart + 1}-
              {Math.min(archiveStart + PAGE_SIZE, filteredArchive.length)} of {filteredArchive.length}
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-4">
        {tab === "current" ? (
          <BidsTable rows={currentBids} />
        ) : (
          <BidsTable rows={pagedArchive} serialOffset={archiveStart} />
        )}
      </div>

      {tab === "archive" && filteredArchive.length > 0 ? (
        <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            disabled={safeArchivePage <= 1}
            onClick={() => setArchivePage((prev) => Math.max(1, prev - 1))}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm font-medium text-[#0F172A]">
            Page {safeArchivePage} of {totalArchivePages}
          </span>
          <button
            type="button"
            disabled={safeArchivePage >= totalArchivePages}
            onClick={() => setArchivePage((prev) => Math.min(totalArchivePages, prev + 1))}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      ) : null}
    </>
  );
}
