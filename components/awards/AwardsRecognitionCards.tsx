"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import type { AwardRecognitionItem } from "@/services/awardsRecognition";
import { withSiteBasePath } from "@/lib/staticAudit";

type AwardsRecognitionCardsProps = {
  items: AwardRecognitionItem[];
};

export default function AwardsRecognitionCards({ items }: AwardsRecognitionCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const normalizedItems = items.map((item) => ({
    ...item,
    imageUrl: item.imageUrl ? withSiteBasePath(item.imageUrl) : undefined,
  }));

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % normalizedItems.length));
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + normalizedItems.length) % normalizedItems.length));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, normalizedItems.length]);

  const activeItem = activeIndex !== null ? normalizedItems[activeIndex] : null;

  return (
    <>
      <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-3">
        {normalizedItems.map((item, index) => (
          <article
            key={item.id}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-[#FCFDFF] to-white shadow-sm transition hover:shadow-md"
          >
            {item.imageUrl ? (
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative block aspect-[16/10] w-full bg-[#F3F7FF] text-left outline-none"
                aria-label={`Open image for ${item.title}`}
              >
                <img
                  src={item.imageUrl}
                  alt={`${item.title} - ${item.imageRef ?? `Image ${item.id}`}`}
                  className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-200/70 bg-white/85 text-[#0F4BB8] shadow-sm">
                  <Eye size={14} />
                </span>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A2E73]/85 via-[#0A2E73]/25 to-transparent p-3 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    <Eye size={12} />
                    Click to view
                  </span>
                </div>
              </button>
            ) : null}

            <div className="flex h-full flex-col p-5">
              <div className="mb-3 flex items-center gap-2">
                {item.year ? (
                  <span className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#003A8C]">
                    {item.year}
                  </span>
                ) : null}
              </div>
              <h3 className="text-base font-semibold leading-7 text-[#0F172A]">{item.title}</h3>
              <p className="mt-2 text-justify text-sm leading-6 text-gray-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {activeItem?.imageUrl ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020817]/85 p-4 md:p-8">
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25"
          >
            <X size={18} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + normalizedItems.length) % normalizedItems.length))}
            className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 md:left-6"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={() => setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % normalizedItems.length))}
            className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 md:right-6"
          >
            <ChevronRight size={18} />
          </button>

          <div className="w-full max-w-5xl">
            <div className="relative h-[60vh] overflow-hidden rounded-2xl border border-white/20 bg-[#0B1D48] shadow-2xl md:h-[72vh]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="h-full w-full object-contain p-3"
                loading="eager"
              />
            </div>
            <div className="mt-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm">
              <p className="text-sm font-semibold md:text-base">{activeItem.title}</p>
              <p className="mt-1 text-xs text-blue-100">
                {activeIndex !== null ? activeIndex + 1 : 1} / {normalizedItems.length}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
