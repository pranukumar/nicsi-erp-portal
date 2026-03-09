"use client";

import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";

type HQOfficer = {
  id: string;
  name: string;
  designation: string;
  reportingOfficer: string;
  managerId: string | null;
};

const hqOfficers: HQOfficer[] = [
  {
    id: "jitender-kumar",
    name: "Shri Jitender Kumar",
    designation: "Chief General Manager / Scientist-F",
    reportingOfficer: "MD, NICSI",
    managerId: null,
  },
  {
    id: "naveen-agrawal",
    name: "Shri Naveen Agrawal",
    designation: "Chief General Manager / Scientist-F",
    reportingOfficer: "MD, NICSI",
    managerId: null,
  },
  {
    id: "ziya-ur-rehman-badar",
    name: "Md. Ziya Ur Rehman Badar",
    designation: "Senior General Manager / Scientist-F",
    reportingOfficer: "MD, NICSI",
    managerId: null,
  },
  {
    id: "rahul-sharma",
    name: "Shri Rahul Sharma",
    designation: "General Manager / Scientist-F",
    reportingOfficer: "MD, NICSI",
    managerId: null,
  },
  {
    id: "bhupendra-kumar-sharma",
    name: "Shri Bhupendra Kumar Sharma",
    designation: "General Manager / Scientist-F",
    reportingOfficer: "MD, NICSI",
    managerId: null,
  },
  {
    id: "gyan-prakash-singh",
    name: "Shri Gyan Prakash Singh",
    designation: "General Manager / Scientist-F",
    reportingOfficer: "MD, NICSI",
    managerId: null,
  },
  {
    id: "prasanna-pandey",
    name: "Shri Prasanna Pandey",
    designation: "General Manager / Scientist-F",
    reportingOfficer: "MD, NICSI",
    managerId: null,
  },
  {
    id: "ramdatt-upadhyay",
    name: "Shri Ramdatt Upadhyay",
    designation: "General Manager, Scientist-F",
    reportingOfficer: "MD, NICSI",
    managerId: null,
  },
  {
    id: "sanjib-kumar-mishra",
    name: "Shri Sanjib Kumar Mishra",
    designation: "General Manager, Scientist-F",
    reportingOfficer: "MD, NICSI",
    managerId: null,
  },
  {
    id: "atul-rastogi",
    name: "Shri Atul Rastogi",
    designation: "General Manager / Scientist-E",
    reportingOfficer: "Shri Jitender Kumar (Emp. Code: 3641)",
    managerId: "jitender-kumar",
  },
  {
    id: "lalit-kumar-bhatia",
    name: "Shri Lalit Kumar Bhatia",
    designation: "General Manager / Scientist-E",
    reportingOfficer: "Shri Jitender Kumar (Emp. Code: 3641)",
    managerId: "jitender-kumar",
  },
  {
    id: "ajay-kumar-gupta",
    name: "Shri Ajay Kumar Gupta",
    designation: "General Manager / Scientist-E",
    reportingOfficer: "Shri Jitender Kumar (Emp. Code: 3641)",
    managerId: "jitender-kumar",
  },
  {
    id: "shailendra-saxena",
    name: "Shri Shailendra Saxena",
    designation: "Deputy General Manager / Scientist-E",
    reportingOfficer: "Sh. Jitender Kumar (3641), GM, NICSI",
    managerId: "jitender-kumar",
  },
  {
    id: "neeraj-chawla",
    name: "Shri Neeraj Chawla",
    designation: "Deputy General Manager / Scientist-E",
    reportingOfficer: "Md. Ziya Ur Rehman Badar (3447), GM, NICSI",
    managerId: "ziya-ur-rehman-badar",
  },
  {
    id: "yogendra-singh-parihar",
    name: "Shri Yogendra Singh Parihar",
    designation: "Deputy General Manager / Scientist-E",
    reportingOfficer: "Sh. Jitender Kumar (3641), GM, NICSI",
    managerId: "jitender-kumar",
  },
  {
    id: "kumar-jyoti",
    name: "Shri Kumar Jyoti",
    designation: "Senior Manager / Scientist-D",
    reportingOfficer: "Shri Prasanna Pandey (Emp. Code: 4633)",
    managerId: "prasanna-pandey",
  },
  {
    id: "vikas-dixit",
    name: "Shri Vikas Dixit",
    designation: "Manager / Scientist-C",
    reportingOfficer: "Md. Ziya Ur Rehman Badar (3447) GM, NICSI",
    managerId: "ziya-ur-rehman-badar",
  },
  {
    id: "mahesh-kumar",
    name: "Shri Mahesh Kumar",
    designation: "Deputy Manager / SO",
    reportingOfficer: "Sh. Naveen Agrawal (3852), GM, NICSI",
    managerId: "naveen-agrawal",
  },
  {
    id: "jeevan-nath",
    name: "Shri Jeevan Nath",
    designation: "Assistant Manager / SO",
    reportingOfficer: "Md. Ziya Ur Rehman Badar (3447) GM, NICSI",
    managerId: "ziya-ur-rehman-badar",
  },
];

function OfficerNode({
  officer,
  depth,
  childrenByManager,
  expandedIds,
  onToggle,
}: {
  officer: HQOfficer;
  depth: number;
  childrenByManager: Record<string, HQOfficer[]>;
  expandedIds: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const children = childrenByManager[officer.id] ?? [];
  const hasChildren = children.length > 0;
  const isExpanded = expandedIds[officer.id] ?? false;

  return (
    <div>
      <article className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-3">
        <div className="flex items-start gap-3">
          {hasChildren ? (
            <button
              type="button"
              onClick={() => onToggle(officer.id)}
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? "Collapse" : "Expand"} reporting officers under ${officer.name}`}
              className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-white text-[#003A8C] transition hover:border-blue-300 hover:bg-blue-50"
            >
              {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
            </button>
          ) : (
            <span className="mt-2 inline-flex h-3 w-3 shrink-0 rounded-full bg-[#0F4BB8]" />
          )}

          <div className="min-w-0 flex-1">
            <p className="text-base font-semibold text-[#0F172A]">{officer.name}</p>
            <p className="text-sm text-gray-700">{officer.designation}</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-[#003A8C]">Reporting Officer</p>
            <p className="text-sm text-gray-700">{officer.reportingOfficer}</p>
          </div>
        </div>
      </article>

      {hasChildren && isExpanded ? (
        <div className="ml-4 mt-2 border-l border-blue-200 pl-4" style={{ marginLeft: `${depth === 0 ? 0 : 16}px` }}>
          <div className="space-y-2">
            {children.map((child) => (
              <OfficerNode
                key={child.id}
                officer={child}
                depth={depth + 1}
                childrenByManager={childrenByManager}
                expandedIds={expandedIds}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function HQPersonnelTree() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const childrenByManager = useMemo(() => {
    return hqOfficers.reduce<Record<string, HQOfficer[]>>((acc, officer) => {
      if (!officer.managerId) {
        return acc;
      }

      if (!acc[officer.managerId]) {
        acc[officer.managerId] = [];
      }

      acc[officer.managerId].push(officer);
      return acc;
    }, {});
  }, []);

  const rootOfficers = useMemo(() => hqOfficers.filter((officer) => officer.managerId === null), []);

  return (
    <div className="mt-3 space-y-2">
      {rootOfficers.map((officer) => (
        <OfficerNode
          key={officer.id}
          officer={officer}
          depth={0}
          childrenByManager={childrenByManager}
          expandedIds={expandedIds}
          onToggle={(id) => setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }))}
        />
      ))}
    </div>
  );
}
