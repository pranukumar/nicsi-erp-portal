"use client";
import { useState } from "react";

export default function MegaMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="group relative text-gray-700 hover:text-[#0A2E73]">
        Solutions
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#12B8FF] transition-all group-hover:w-full"></span>
      </button>

      {open && (
        <div className="absolute left-0 top-8 w-[600px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6">
          <div>
            <h4 className="mb-3 font-semibold text-[#0A2E73]">
              ERP Modules
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Vendor Management</li>
              <li>Tender Workflow</li>
              <li>Project Monitoring</li>
              <li>Reports & Analytics</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-[#0A2E73]">
              Governance Tools
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Audit Compliance</li>
              <li>Security Controls</li>
              <li>API Integrations</li>
              <li>Data Analytics</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
