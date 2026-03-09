"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Images } from "lucide-react";
import PageTitle from "../../components/layout/PageTitle";
import { eventsCatalog } from "@/data/mediaCatalog";
import { withSiteBasePath } from "@/lib/staticAudit";

const eventCategories = ["All", ...Array.from(new Set(eventsCatalog.map((item) => item.category)))];

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();
    return eventsCatalog.filter((item) => {
      if (category !== "All" && item.category !== category) {
        return false;
      }

      if (!query) {
        return true;
      }

      return `${item.title} ${item.source} ${item.category}`.toLowerCase().includes(query);
    });
  }, [category, search]);

  return (
    <main className="pb-12">
      <PageTitle title="Events" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A]">Events & Activities</h2>
              <p className="mt-2 text-sm text-gray-600">
                Official NICSI event archive with local search, category filtering, and fully local media records.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#003A8C]">
                Official Archive
              </span>
              <Link
                href="/media-gallery?tab=photos"
                className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
              >
                Open Media Gallery
              </Link>
            </div>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-[minmax(0,1fr)_220px]">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search event title or theme"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm"
            >
              {eventCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Showing {filteredEvents.length} of {eventsCatalog.length} locally archived event records.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filteredEvents.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-[#FCFDFF] to-white shadow-sm"
              >
                <div className="relative aspect-[16/10] w-full bg-[#F3F7FF]">
                  <Image
                    src={withSiteBasePath(event.imageUrl)}
                    alt={event.title}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-2.5 py-1 text-[11px] font-semibold text-[#003A8C]">
                      <CalendarDays size={12} />
                      {event.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-[#F8FBFF] px-2.5 py-1 text-[11px] font-semibold text-[#577096]">
                      <Images size={12} />
                      Photo Record
                    </span>
                  </div>
                  <h3 className="text-base font-semibold leading-7 text-[#0F172A]">{event.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {filteredEvents.length === 0 ? (
            <div className="mt-6 rounded-xl border border-dashed border-blue-200 bg-[#F8FBFF] px-4 py-6 text-center text-sm text-gray-500">
              No event records found for the selected search or category.
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
