"use client";

import { useEffect, useState } from "react";

import type { StatePersonnel } from "@/services/statePersonnel";

type Props = {
  initialRows: StatePersonnel[];
  initialTotal: number;
  initialQuery: string;
};

export default function StatePersonnelTable({
  initialRows,
  initialTotal,
  initialQuery,
}: Props) {
  const [rows, setRows] = useState(initialRows);
  const [total, setTotal] = useState(initialTotal);
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
    const controller = new AbortController();

    const fetchRows = async () => {
      setLoading(true);
      try {
        const search = new URLSearchParams();
        search.set("page", "1");
        search.set("limit", "500");
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
  }, [debouncedQuery]);

  return (
    <>
      <div className="flex justify-end">
        <div className="w-full rounded-lg border border-gray-200 bg-white p-3 md:w-[30rem]">
          <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-center">
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
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="nic-table min-w-full text-left text-sm">
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
                  <td className="px-4 py-3">{index + 1}</td>
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

      <div className="mt-4">
        <p className="text-sm text-gray-600">Total records: {total}</p>
      </div>
    </>
  );
}
