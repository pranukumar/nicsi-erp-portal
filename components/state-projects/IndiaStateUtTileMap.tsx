"use client";

import { useMemo, useState } from "react";

export type Region = "North" | "South" | "East" | "West" | "Central" | "North-East" | "UT";
export type AdminType = "State" | "UT";

export type StateCount = {
  name: string;
  code: string;
  type: AdminType;
  region: Region;
  projectCount: number;
};

type IndiaStateUtTileMapProps = {
  items: StateCount[];
};
type RegionFilter = Region | "All";

const indiaMapRows: string[][] = [
  ["__", "__", "__", "LA", "JK", "__", "__", "__", "__", "__", "__", "__"],
  ["__", "__", "__", "__", "HP", "PB", "CH", "UK", "__", "AR", "__", "__"],
  ["__", "__", "__", "RJ", "HR", "DL", "UP", "BR", "SK", "AS", "NL", "__"],
  ["__", "__", "GJ", "MP", "__", "__", "JH", "WB", "ML", "MN", "__", "__"],
  ["__", "__", "DN", "MH", "CG", "OD", "__", "__", "TR", "MZ", "__", "__"],
  ["__", "__", "GA", "KA", "TG", "AP", "__", "__", "__", "__", "__", "__"],
  ["__", "LD", "__", "KL", "TN", "PY", "__", "__", "__", "__", "__", "__"],
  ["__", "__", "__", "__", "__", "AN", "__", "__", "__", "__", "__", "__"],
];

function getTileClasses(count: number, selected: boolean) {
  const selectedClass = selected ? "ring-2 ring-[#0A4BD6] ring-offset-1" : "";
  if (count >= 10) return `border-[#1D4ED8] bg-[#DBEAFE] text-[#0B2E76] ${selectedClass}`;
  if (count >= 5) return `border-[#60A5FA] bg-[#EFF6FF] text-[#0F172A] ${selectedClass}`;
  if (count >= 1) return `border-[#BFDBFE] bg-[#F8FBFF] text-[#0F172A] ${selectedClass}`;
  return `border-gray-200 bg-white text-gray-700 ${selectedClass}`;
}

export default function IndiaStateUtTileMap({ items }: IndiaStateUtTileMapProps) {
  const filters: RegionFilter[] = ["All", "North", "South", "East", "West", "Central", "North-East", "UT"];
  const codeMap = useMemo(() => new Map(items.map((item) => [item.code, item] as const)), [items]);
  const defaultItem = items[0] ?? null;
  const [selectedCode, setSelectedCode] = useState(defaultItem?.code ?? "");
  const [activeRegion, setActiveRegion] = useState<RegionFilter>("All");
  const selectedItem = codeMap.get(selectedCode) ?? defaultItem;
  const visibleItems = items.filter((item) => activeRegion === "All" || item.region === activeRegion);
  const visibleProjects = visibleItems.reduce((sum, item) => sum + item.projectCount, 0);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveRegion(filter)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              activeRegion === filter
                ? "border-[#0052CC] bg-[#EAF2FF] text-[#003A8C]"
                : "border-blue-100 bg-white text-gray-700 hover:border-blue-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="overflow-x-auto rounded-lg border border-blue-100 bg-white p-3">
          <div className="mx-auto grid min-w-[700px] grid-cols-12 gap-2">
          {indiaMapRows.flatMap((row, rowIndex) =>
            row.map((code, colIndex) => {
              if (code === "__") {
                return <div key={`blank-${rowIndex}-${colIndex}`} className="h-12" />;
              }
              const item = codeMap.get(code);
              if (!item) {
                return <div key={`missing-${rowIndex}-${colIndex}`} className="h-12" />;
              }
              const isSelected = selectedCode === item.code;
              const isMuted = activeRegion !== "All" && item.region !== activeRegion;
              return (
                <button
                  key={`${item.code}-${rowIndex}-${colIndex}`}
                  type="button"
                  onClick={() => setSelectedCode(item.code)}
                  className={`h-12 rounded-md border px-2 py-1 text-left transition hover:-translate-y-0.5 hover:shadow-sm ${
                    isMuted ? "opacity-35" : ""
                  } ${getTileClasses(
                    item.projectCount,
                    isSelected,
                  )}`}
                  title={`${item.name}: ${item.projectCount} project(s)`}
                >
                  <p className="text-[11px] font-semibold leading-4">{item.code}</p>
                  <p className="text-[10px] leading-4">{item.projectCount}</p>
                </button>
              );
            }),
          )}
          </div>
        </div>

        <div className="rounded-lg border border-blue-100 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Selected Unit</p>
          {selectedItem ? (
            <>
              <p className="mt-1 text-lg font-bold text-[#0F172A]">{selectedItem.name}</p>
              <p className="mt-1 text-sm text-gray-700">
                Code: <span className="font-semibold">{selectedItem.code}</span> | Type:{" "}
                <span className="font-semibold">{selectedItem.type}</span>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Region: <span className="font-semibold">{selectedItem.region}</span>
              </p>
              <p className="mt-3 rounded-md border border-blue-100 bg-[#F7FAFF] px-3 py-2 text-sm text-[#0F172A]">
                Project Count: <span className="font-bold">{selectedItem.projectCount}</span>
              </p>
              <div className="mt-3 rounded-md border border-blue-100 bg-white px-3 py-2 text-xs text-gray-700">
                <p>
                  Region Filter: <span className="font-semibold">{activeRegion}</span>
                </p>
                <p>
                  Units in View: <span className="font-semibold">{visibleItems.length}</span>
                </p>
                <p>
                  Visible Projects: <span className="font-semibold">{visibleProjects}</span>
                </p>
              </div>
            </>
          ) : (
            <p className="mt-2 text-sm text-gray-600">No state/UT data available.</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
        <span className="font-semibold text-[#0F172A]">Legend:</span>
        <span className="rounded-md border border-gray-200 bg-white px-2 py-1">0</span>
        <span className="rounded-md border border-[#BFDBFE] bg-[#F8FBFF] px-2 py-1">1-4</span>
        <span className="rounded-md border border-[#60A5FA] bg-[#EFF6FF] px-2 py-1">5-9</span>
        <span className="rounded-md border border-[#1D4ED8] bg-[#DBEAFE] px-2 py-1">10+</span>
      </div>
    </div>
  );
}
