"use client";

import { useEffect, useMemo, useState } from "react";

import type { StatePersonnel } from "@/services/statePersonnel";

type Props = {
  initialRows: StatePersonnel[];
  initialTotal: number;
  initialPage: number;
  limit: number;
  initialQuery: string;
};

export default function StatePersonnelTable({
  initialRows,
  initialTotal,
  initialPage,
  limit,
  initialQuery,
}: Props) {
  const [rows, setRows] = useState(initialRows);
  const [total, setTotal] = useState(initialTotal);
  const [page, setPage] = useState(initialPage);
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 350);
    return () => window.clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchRows = async () => {
      setLoading(true);
      try {
        const search = new URLSearchParams();
        search.set("page", String(page));
        search.set("limit", String(limit));
        if (debouncedQuery) {
          search.set("q", debouncedQuery);
        }

        const response = await fetch(`/api/state-personnel?${search.toString()}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as {
          rows: StatePersonnel[];
          total: number;
        };
        setRows(data.rows);
        setTotal(data.total);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Failed to fetch state personnel rows:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRows();
    return () => controller.abort();
  }, [debouncedQuery, page, limit]);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(total / limit)), [total, limit]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-5">
        <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by state, name, designation, phone, email"
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={() => setDebouncedQuery(query.trim())}
            className="justify-self-end rounded-md bg-[#003A8C] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#0052CC]"
          >
            Search
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3">S.No.</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Designation</th>
              <th className="px-4 py-3">Phone Number</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">State Name</th>
              <th className="px-4 py-3">Additional Assigned State/UT</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-center text-gray-500" colSpan={7}>
                  {loading ? "Loading..." : "No records found."}
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr key={row.id} className="border-t">
                  <td className="px-4 py-3">{(page - 1) * limit + index + 1}</td>
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3">{row.designation}</td>
                  <td className="px-4 py-3">{row.phoneNumber}</td>
                  <td className="px-4 py-3">{row.email}</td>
                  <td className="px-4 py-3">{row.stateName}</td>
                  <td className="px-4 py-3">{row.additionalAssignedStateUt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing page {page} of {totalPages} ({total} total records)
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page <= 1}
            className={`rounded-md border px-3 py-1.5 text-sm ${
              page <= 1 ? "cursor-not-allowed text-gray-400" : "text-[#003A8C] hover:bg-blue-50"
            }`}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={page >= totalPages}
            className={`rounded-md border px-3 py-1.5 text-sm ${
              page >= totalPages ? "cursor-not-allowed text-gray-400" : "text-[#003A8C] hover:bg-blue-50"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

