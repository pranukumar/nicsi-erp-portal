"use client";

import { useState } from "react";

type ProcessStep = {
  step: string;
  detail: string;
};

export default function OnlineApplicationProcess({ steps }: { steps: ProcessStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  return (
    <article className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-bold text-[#0F172A]">Application Process (Online)</h3>
        <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#003A8C]">
          Step {activeIndex + 1} of {steps.length}
        </span>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((item, index) => (
          <button
            key={item.step}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-md border px-3 py-2 text-left text-sm transition ${
              index === activeIndex
                ? "border-[#003A8C] bg-[#003A8C] text-white"
                : "border-gray-200 bg-white text-[#0F172A] hover:border-blue-200 hover:bg-blue-50"
            }`}
          >
            <span className="line-clamp-2 font-semibold">{item.step}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-blue-100 bg-[#F8FAFF] p-4">
        <p className="text-sm font-semibold text-[#0F172A]">{activeStep.step}</p>
        <p className="mt-2 text-sm leading-6 text-gray-700">{activeStep.detail}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
          disabled={activeIndex === 0}
          className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setActiveIndex((prev) => Math.min(steps.length - 1, prev + 1))}
          disabled={activeIndex === steps.length - 1}
          className="rounded-md bg-[#003A8C] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#0052CC] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </article>
  );
}

