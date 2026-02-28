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

const demoEntries: Entry[] = [
  { stateCode: "UP", projectTitle: "Digital Service Delivery Platform", department: "Department of IT", category: "e-Governance", status: "Active", startDate: "2026-04-01", endDate: "", projectCostCr: "25" },
  { stateCode: "DL", projectTitle: "Smart Grievance Redressal Portal", department: "Administrative Reforms", category: "e-Governance", status: "Active", startDate: "2026-03-10", endDate: "", projectCostCr: "12" },
  { stateCode: "MH", projectTitle: "State Data Exchange Hub", department: "Planning Department", category: "Infrastructure", status: "Planned", startDate: "2026-05-15", endDate: "", projectCostCr: "40" },
  { stateCode: "KA", projectTitle: "District Cloud Migration Program", department: "e-Governance Cell", category: "Cloud", status: "Active", startDate: "2026-02-20", endDate: "", projectCostCr: "31.5" },
  { stateCode: "RJ", projectTitle: "Citizen Certificate Automation", department: "Revenue Department", category: "e-Governance", status: "Completed", startDate: "2025-08-01", endDate: "2026-01-31", projectCostCr: "9.8" },
  { stateCode: "AS", projectTitle: "Cyber Security Monitoring Node", department: "Home Department", category: "Cyber Security", status: "Active", startDate: "2026-01-05", endDate: "", projectCostCr: "18" },
  { stateCode: "TN", projectTitle: "Online Welfare Delivery System", department: "Social Welfare", category: "e-Governance", status: "On Hold", startDate: "2025-12-12", endDate: "", projectCostCr: "14" },
  { stateCode: "WB", projectTitle: "Unified Education Services Portal", department: "School Education", category: "Capacity Building", status: "Planned", startDate: "2026-06-01", endDate: "", projectCostCr: "22" },
  { stateCode: "JK", projectTitle: "Secure Secretariat Workflow", department: "General Administration", category: "Cyber Security", status: "Active", startDate: "2026-02-01", endDate: "", projectCostCr: "11.2" },
  { stateCode: "PY", projectTitle: "Municipal e-Office Rollout", department: "Local Administration", category: "e-Governance", status: "Completed", startDate: "2025-09-15", endDate: "2026-02-15", projectCostCr: "6.4" },
];

export default function StateProjectDataEntryPanel({ states }: Props) {
  const router = useRouter();
  const [entry, setEntry] = useState<Entry>(initialEntry);
  const [entries, setEntries] = useState<Entry[]>(demoEntries);
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
      setEntries((prev) => [entry, ...prev]);
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
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-[#0F172A]">Working View</p>
        <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
          Live Demo
        </span>
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
          onClick={onAdd}
          disabled={submitting}
          className="rounded-md bg-[#003A8C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0052CC]"
        >
          {submitting ? "Submitting..." : "Submit Entry"}
        </button>
        {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
        {success ? <p className="text-sm font-semibold text-green-700">{success}</p> : null}
      </div>

      <div className="mt-5 rounded-lg border border-blue-100 bg-[#F7FAFF] p-3">
        <p className="text-sm font-semibold text-[#0F172A]">Draft Preview ({entries.length})</p>
        {entries.length === 0 ? (
          <p className="mt-1 text-sm text-gray-600">No draft entries yet.</p>
        ) : (
          <div className="mt-2 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-blue-100 text-left text-xs uppercase tracking-wide text-[#0052CC]">
                  <th className="px-2 py-2">State/UT</th>
                  <th className="px-2 py-2">Project</th>
                  <th className="px-2 py-2">Dept.</th>
                  <th className="px-2 py-2">Status</th>
                  <th className="px-2 py-2">Start</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((item, index) => (
                  <tr key={`${item.stateCode}-${item.projectTitle}-${index}`} className="border-b border-gray-100">
                    <td className="px-2 py-2">{item.stateCode}</td>
                    <td className="px-2 py-2">{item.projectTitle}</td>
                    <td className="px-2 py-2">{item.department}</td>
                    <td className="px-2 py-2">{item.status}</td>
                    <td className="px-2 py-2">{item.startDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
