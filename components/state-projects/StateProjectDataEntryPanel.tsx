"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [entry, setEntry] = useState<Entry>(initialEntry);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const sortedStates = useMemo(
    () => [...states].sort((a, b) => a.name.localeCompare(b.name)),
    [states],
  );

  const onAdd = async () => {
    if (submitting) return;
    setSuccess("");
    if (!entry.stateCode) {
      setError("State/UT select karein.");
      return;
    }
    if (entry.projectTitle.trim().length < 3) {
      setError("Project title minimum 3 characters hona chahiye.");
      return;
    }
    if (entry.department.trim().length < 2) {
      setError("Department required hai.");
      return;
    }
    if (!entry.startDate) {
      setError("Start date required hai.");
      return;
    }
    if (entry.endDate && entry.endDate < entry.startDate) {
      setError("End date, start date se pehle nahi ho sakti.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/state-projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      const data = (await response.json()) as { error?: string; message?: string; id?: number };
      if (!response.ok) {
        setError(data.error ?? "Entry submit failed.");
        return;
      }
      setEntry(initialEntry);
      setSuccess(`${data.message ?? "Entry submitted."} ID: ${data.id ?? "-"}`);
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unexpected submit error.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-6 rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
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
          onClick={onAdd}
          disabled={submitting}
          className="rounded-md bg-[#003A8C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0052CC]"
        >
          {submitting ? "Submitting..." : "Submit Entry"}
        </button>
        {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
        {success ? <p className="text-sm font-semibold text-green-700">{success}</p> : null}
      </div>

    </section>
  );
}
