"use client";

import { useState } from "react";
import HeadquarterPersonnelTable from "@/components/headquarters/HeadquarterPersonnelTable";
import StatePersonnelTable from "@/components/state/StatePersonnelTable";
import WorkAllocationTable from "@/components/work-allocation/WorkAllocationTable";
import type { HeadquarterPersonnel } from "@/services/headquarterPersonnel";
import type { StatePersonnel } from "@/services/statePersonnel";

type TabKey = "headquarters" | "state" | "work";

type Props = {
  headquarterRows: HeadquarterPersonnel[];
  headquarterTotal: number;
  managingDirector?: HeadquarterPersonnel;
  stateRows: StatePersonnel[];
  stateTotal: number;
};

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "headquarters", label: "Headquarters Personnel" },
  { key: "state", label: "State Personnel" },
  { key: "work", label: "Work Allocation" },
];

export default function PersonnelWorkAllocationTabs({
  headquarterRows,
  headquarterTotal,
  managingDirector,
  stateRows,
  stateTotal,
}: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("headquarters");

  return (
    <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm md:p-6">
      <div className="inline-flex flex-wrap gap-2 rounded-lg border border-blue-200 bg-[#F8FAFF] p-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
              activeTab === tab.key
                ? "bg-[#003A8C] text-white"
                : "text-[#0F172A] hover:bg-blue-100"
            }`}
            aria-pressed={activeTab === tab.key}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-5">
        {activeTab === "headquarters" ? (
          <HeadquarterPersonnelTable
            initialRows={headquarterRows}
            initialTotal={headquarterTotal}
            initialManagingDirector={managingDirector}
            showManagingDirector={false}
          />
        ) : null}

        {activeTab === "state" ? (
          <StatePersonnelTable
            initialRows={stateRows}
            initialTotal={stateTotal}
          />
        ) : null}

        {activeTab === "work" ? (
          <WorkAllocationTable />
        ) : null}
      </div>
    </div>
  );
}
