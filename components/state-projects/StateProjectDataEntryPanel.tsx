"use client";

import { useMemo, useState } from "react";

type StateOption = {
  code: string;
  name: string;
  type: "State" | "UT";
};

type Entry = {
  stateCode: string;
  projectTitle: string;
  department: string;
  category: string;
  status: string;
  startDate: string;
  endDate: string;
  projectCostCr: string;
};

type Props = {
  states: StateOption[];
};

const initialEntry: Entry = {
  stateCode: "",
  projectTitle: "",
  department: "",
  category: "e-Governance",
  status: "Planned",
  startDate: "",
  endDate: "",
  projectCostCr: "",
};

export default function StateProjectDataEntryPanel({ states }: Props) {
  const [entry, setEntry] = useState<Entry>(initialEntry);

  const sortedStates = useMemo(
    () => [...states].sort((a, b) => a.name.localeCompare(b.name)),
    [states],
  );

  return (
    <section className="mt-6 rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
      <div className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
        Live state project submission is disabled in the static portal. This panel is retained as a reference layout only.
      </div>
      <div className="grid items-start gap-3 md:grid-cols-2 lg:grid-cols-4">
        <label className="grid min-w-0 gap-1 text-sm">
          <span className="font-semibold">State / UT</span>
          <select
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={entry.stateCode}
            onChange={(e) => setEntry((p) => ({ ...p, stateCode: e.target.value }))}
          >
            <option value="">Select</option>
            {sortedStates.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name} ({item.code}) - {item.type}
              </option>
            ))}
          </select>
        </label>

        <label className="grid min-w-0 gap-1 text-sm">
          <span className="font-semibold">Project Title</span>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={entry.projectTitle}
            onChange={(e) => setEntry((p) => ({ ...p, projectTitle: e.target.value }))}
          />
        </label>

        <label className="grid min-w-0 gap-1 text-sm">
          <span className="font-semibold">Department</span>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={entry.department}
            onChange={(e) => setEntry((p) => ({ ...p, department: e.target.value }))}
          />
        </label>

        <label className="grid min-w-0 gap-1 text-sm">
          <span className="font-semibold">Category</span>
          <select
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={entry.category}
            onChange={(e) => setEntry((p) => ({ ...p, category: e.target.value }))}
          >
            <option>e-Governance</option>
            <option>Infrastructure</option>
            <option>Cloud</option>
            <option>Cyber Security</option>
            <option>Capacity Building</option>
          </select>
        </label>

        <label className="grid min-w-0 gap-1 text-sm">
          <span className="font-semibold">Status</span>
          <select
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={entry.status}
            onChange={(e) => setEntry((p) => ({ ...p, status: e.target.value }))}
          >
            <option>Planned</option>
            <option>Active</option>
            <option>Completed</option>
            <option>On Hold</option>
          </select>
        </label>

        <label className="grid min-w-0 gap-1 text-sm">
          <span className="font-semibold">Start Date</span>
          <input
            type="date"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={entry.startDate}
            onChange={(e) => setEntry((p) => ({ ...p, startDate: e.target.value }))}
          />
        </label>

        <label className="grid min-w-0 gap-1 text-sm">
          <span className="font-semibold">End Date (optional)</span>
          <input
            type="date"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={entry.endDate}
            onChange={(e) => setEntry((p) => ({ ...p, endDate: e.target.value }))}
          />
        </label>

        <label className="grid min-w-0 gap-1 text-sm">
          <span className="font-semibold">Project Cost (Cr)</span>
          <input
            inputMode="decimal"
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
            value={entry.projectCostCr}
            onChange={(e) => setEntry((p) => ({ ...p, projectCostCr: e.target.value }))}
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled
          className="rounded-md bg-[#003A8C] px-4 py-2 text-sm font-semibold text-white opacity-60"
        >
          Submit Disabled
        </button>
      </div>

    </section>
  );
}
