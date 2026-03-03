"use client";

import PageTitle from "../../components/layout/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type GalleryItem = {
  id: number;
  title: string;
  imageUrl: string;
};

type VideoItem = {
  id: number;
  title: string;
  embedUrl: string;
};

type MediaTab = "photos" | "videos";

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Slogan making activities on Swachhata Pakhwada", imageUrl: "https://nicsi.nic.in/assets/images/gallery/swachtapakhwada-1.jpg" },
  { id: 2, title: "Poster making activities on Swachhata Pakhwada", imageUrl: "https://nicsi.nic.in/assets/images/gallery/painting2026-1.jpg" },
  { id: 3, title: "Swachhata Pakhwada Pledge Ceremony", imageUrl: "https://nicsi.nic.in/assets/images/gallery/pledge2026-1.jpg" },
  { id: 4, title: "Rajbhasha Workshop/Meeting", imageUrl: "https://nicsi.nic.in/assets/images/gallery/rajbhasha-workshop2026-1.jpg" },
  { id: 5, title: "Let Us Learn (NICSI Training Programme )", imageUrl: "https://nicsi.nic.in/assets/images/gallery/letuslearn-1.jpg" },
  { id: 6, title: "New Year address by MD NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/new-year-1.jpg" },
  { id: 7, title: "Shri Alok Tiwari, Deputy Director General, NIC, assumed charge as the new Managing Director of NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/MD03122025.jpg" },
  { id: 8, title: "Hindi Pakhwada 2025", imageUrl: "https://nicsi.nic.in/assets/images/gallery/hindi-pakhwadha%281%29.jpeg" },
  { id: 9, title: "30th Annual Day of NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/nicsi_day_1.jpeg" },
  { id: 10, title: "MoU signing NIC AND NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/mou_sign_img2.jpeg" },
  { id: 11, title: "Swachhata Pledge 2024", imageUrl: "https://nicsi.nic.in/assets/images/gallery/swachhata_pledge_img1.jpeg" },
  { id: 12, title: "29th Annual Day of NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/annualday_img1.jpeg" },
  { id: 13, title: "Yoga Day 2024", imageUrl: "https://nicsi.nic.in/assets/images/gallery/yoga_day_img1.jpeg" },
  { id: 14, title: "MD, NICSI welcomed Shri Bhuvnesh Kumar, AS, MeitY as new Chairperson, NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Chairperson.jpg" },
  { id: 15, title: "MD NICSI in AI Tech Session, June 2023", imageUrl: "https://nicsi.nic.in/assets/images/gallery/AI.jpg" },
  { id: 16, title: "International Yoga Day 2023 in NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Yoga.jpg" },
  { id: 17, title: "NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/nicsiImage1.jpg" },
  { id: 18, title: "Training Sessions on Qlik+Talend, Apache Superset and Tableau", imageUrl: "https://nicsi.nic.in/assets/images/gallery/digitalIndia.jpeg" },
  { id: 19, title: "Bihar Tech Sammelan, July 2023", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Data_Analytics_Session.jpg" },
  { id: 20, title: "NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/nicsi_img1.jpeg" },
];

const videos: VideoItem[] = [
  {
    id: 1,
    title: "Video Message of ECI for Voter Awareness Election Commission",
    embedUrl: "https://www.youtube.com/embed/pk-vImvmF2A",
  },
  {
    id: 2,
    title: "Voter Helpline 1950 for Election Related Queries",
    embedUrl: "https://www.youtube.com/embed/Zqqwdg6jUek",
  },
  {
    id: 3,
    title: "Service Voter ETPBS Music Video 60s Hindi",
    embedUrl: "https://www.youtube.com/embed/FJVxXC8l9j4",
  },
  {
    id: 4,
    title: "Video Message on Voter Awareness",
    embedUrl: "https://www.youtube.com/embed/XQGpdOcYu14",
  },
];

function normalizeTab(value: string | null): MediaTab {
  return value === "videos" ? "videos" : "photos";
}

export default function MediaGalleryPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<MediaTab>("photos");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = useMemo(() => (activeIndex === null ? null : galleryItems[activeIndex]), [activeIndex]);

  const goNext = () => setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryItems.length));
  const goPrev = () => setActiveIndex((prev) => (prev === null ? 0 : (prev - 1 + galleryItems.length) % galleryItems.length));

  const onTabChange = (nextTab: MediaTab) => {
    setTab(nextTab);
    const nextQuery = new URLSearchParams(searchParams.toString());
    nextQuery.set("tab", nextTab);
    router.replace(`${pathname}?${nextQuery.toString()}`, { scroll: false });
  };

  useEffect(() => {
    setTab(normalizeTab(searchParams.get("tab")));
  }, [searchParams]);

  useEffect(() => {
    if (tab !== "photos") {
      setActiveIndex(null);
    }
  }, [tab]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <main className="pb-12">
      <PageTitle title="Media Gallery" />
      <section className="mx-auto max-w-7xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Media Gallery</h2>
          <p className="mt-2 text-sm text-gray-600">Browse NICSI official photos and videos from a single unified media page.</p>

          <div className="mt-5 inline-flex overflow-hidden rounded-lg border border-blue-200 bg-white">
            <button
              type="button"
              onClick={() => onTabChange("photos")}
              className={`px-4 py-2 text-sm font-semibold transition ${
                tab === "photos" ? "bg-[#003A8C] text-white" : "bg-white text-[#0F172A] hover:bg-blue-50"
              }`}
            >
              Photo Gallery ({galleryItems.length})
            </button>
            <button
              type="button"
              onClick={() => onTabChange("videos")}
              className={`border-l border-blue-200 px-4 py-2 text-sm font-semibold transition ${
                tab === "videos" ? "bg-[#003A8C] text-white" : "bg-white text-[#0F172A] hover:bg-blue-50"
              }`}
            >
              Video Gallery ({videos.length})
            </button>
          </div>

          {tab === "photos" ? (
            <>
              <p className="mt-4 text-sm text-gray-600">
                Synced with currently available official listing from{" "}
                <Link href="https://nicsi.nic.in/photos" target="_blank" rel="noreferrer" className="font-semibold text-[#003A8C]">
                  nicsi.nic.in/photos
                </Link>
                .
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {galleryItems.map((item, index) => (
                  <article key={item.id} className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm transition hover:shadow-md">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="group block w-full text-left"
                      aria-label={`Open image slider for ${item.title}`}
                    >
                      <div className="relative h-52 w-full overflow-hidden bg-[#F3F7FF]">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="h-full w-full object-contain p-2"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        />
                      </div>
                      <div className="p-3">
                        <p className="line-clamp-3 text-sm font-semibold leading-6 text-[#0F172A]">{item.title}</p>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="mt-4 text-sm text-gray-600">Updated from currently available official NICSI videos records.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {videos.map((video) => (
                  <article key={video.id} className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
                    <div className="aspect-video w-full bg-black">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="h-full w-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold leading-6 text-[#0F172A]">{video.title}</p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {tab === "photos" && activeItem ? (
        <div className="fixed inset-0 z-[70] bg-[#050b18]/90 backdrop-blur-[2px]" role="dialog" aria-modal="true" aria-label="Photo slider">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close slider"
          >
            <X size={20} />
          </button>

          <div className="mx-auto flex h-full w-full max-w-7xl items-center gap-3 px-3 md:px-6">
            <button
              type="button"
              onClick={goPrev}
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-2xl text-white transition hover:bg-white/20 md:inline-flex"
              aria-label="Previous image"
            >
              &#8249;
            </button>

            <div className="min-w-0 flex-1">
              <div className="relative h-[60vh] overflow-hidden rounded-xl border border-white/20 bg-black/35 md:h-[70vh]">
                <Image src={activeItem.imageUrl} alt={activeItem.title} fill className="object-contain" sizes="100vw" priority />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 text-white">
                <p className="line-clamp-2 text-sm font-medium md:text-base">{activeItem.title}</p>
                <p className="shrink-0 text-xs text-blue-100 md:text-sm">
                  {activeIndex! + 1} / {galleryItems.length}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-2xl text-white transition hover:bg-white/20 md:inline-flex"
              aria-label="Next image"
            >
              &#8250;
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-xl text-white"
              aria-label="Previous image"
            >
              &#8249;
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-xl text-white"
              aria-label="Next image"
            >
              &#8250;
            </button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
