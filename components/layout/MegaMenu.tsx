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
      <button className="relative group text-gray-700 hover:text-[var(--dsci-primary)]">
        Solutions
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--dsci-accent)] transition-all group-hover:w-full"></span>
      </button>

      {open && (
        <div className="absolute left-0 top-8 w-[600px] bg-white shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-[var(--dsci-primary)] mb-3">
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
            <h4 className="font-semibold text-[var(--dsci-primary)] mb-3">
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