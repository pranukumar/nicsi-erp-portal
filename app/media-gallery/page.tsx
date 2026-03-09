"use client";

import PageTitle from "../../components/layout/PageTitle";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight, Eye, Play, X } from "lucide-react";
import { galleryCatalog, videosCatalog } from "@/data/mediaCatalog";
import { withSiteBasePath } from "@/lib/staticAudit";

type MediaTab = "photos" | "videos";

function normalizeTab(value: string | null): MediaTab {
  return value === "videos" ? "videos" : "photos";
}

export default function MediaGalleryPage() {
  return (
    <Suspense
      fallback={
        <main className="pb-12">
          <PageTitle title="Media Gallery" />
          <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm text-gray-600">Loading media gallery...</p>
            </div>
          </section>
        </main>
      }
    >
      <MediaGalleryContent />
    </Suspense>
  );
}

function MediaGalleryContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<MediaTab>("photos");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

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
    const isViewerOpen = activePhotoIndex !== null || activeVideoIndex !== null;
    if (!isViewerOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePhotoIndex(null);
        setActiveVideoIndex(null);
        return;
      }

      if (activePhotoIndex !== null) {
        if (event.key === "ArrowRight") {
          setActivePhotoIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryCatalog.length));
        }
        if (event.key === "ArrowLeft") {
          setActivePhotoIndex((prev) =>
            prev === null ? 0 : (prev - 1 + galleryCatalog.length) % galleryCatalog.length,
          );
        }
      }

      if (activeVideoIndex !== null) {
        if (event.key === "ArrowRight") {
          setActiveVideoIndex((prev) => (prev === null ? 0 : (prev + 1) % videosCatalog.length));
        }
        if (event.key === "ArrowLeft") {
          setActiveVideoIndex((prev) =>
            prev === null ? 0 : (prev - 1 + videosCatalog.length) % videosCatalog.length,
          );
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePhotoIndex, activeVideoIndex]);

  const activePhoto = activePhotoIndex !== null ? galleryCatalog[activePhotoIndex] : null;
  const activeVideo = activeVideoIndex !== null ? videosCatalog[activeVideoIndex] : null;

  return (
    <main className="pb-12">
      <PageTitle title="Media Gallery" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A]">Media Gallery</h2>
              <p className="mt-2 text-sm text-gray-600">
                Browse NICSI official photos and videos from a single unified media page.
              </p>
            </div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#003A8C]">
              Official Archive
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="inline-flex overflow-hidden rounded-lg border border-blue-200 bg-[#F8FBFF]">
              <button
                type="button"
                onClick={() => onTabChange("photos")}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  tab === "photos" ? "bg-[#003A8C] text-white" : "bg-white text-[#0F172A] hover:bg-blue-50"
                }`}
              >
                Photo Gallery ({galleryCatalog.length})
              </button>
              <button
                type="button"
                onClick={() => onTabChange("videos")}
                className={`border-l border-blue-200 px-4 py-2 text-sm font-semibold transition ${
                  tab === "videos" ? "bg-[#003A8C] text-white" : "bg-white text-[#0F172A] hover:bg-blue-50"
                }`}
              >
                Video Gallery ({videosCatalog.length})
              </button>
            </div>
          </div>

          {tab === "photos" ? (
            <>
              <p className="mt-4 text-sm text-gray-600">
                Updated from official NICSI photo records and stored locally in the portal media archive.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {galleryCatalog.map((item, index) => (
                  <article
                    key={item.id}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-b from-[#FCFDFF] to-white shadow-sm transition hover:shadow-md"
                  >
                    <button
                      type="button"
                      onClick={() => setActivePhotoIndex(index)}
                      className="group block w-full text-left"
                      aria-label={`Open photo ${item.title}`}
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3F7FF]">
                        <Image
                          src={withSiteBasePath(item.imageUrl)}
                          alt={item.title}
                          fill
                          className="object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        />
                        <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-blue-200/70 bg-white/90 text-[#0F4BB8] shadow-sm">
                          <Eye size={15} />
                        </span>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A2E73]/85 via-[#0A2E73]/20 to-transparent p-3 opacity-0 transition duration-300 group-hover:opacity-100">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/60 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                            <Eye size={12} />
                            Click to view
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="line-clamp-3 text-sm font-semibold leading-6 text-[#0F172A]">{item.title}</p>
                        <p className="mt-2 text-xs text-gray-500">Official NICSI photo archive</p>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="mt-4 text-sm text-gray-600">
                Updated from official NICSI video records and stored locally as static archive cards.
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {videosCatalog.map((video, index) => (
                  <article key={video.id} className="overflow-hidden rounded-xl border border-blue-100 bg-[#FCFDFF] shadow-sm">
                    <button
                      type="button"
                      onClick={() => setActiveVideoIndex(index)}
                      className="group block w-full text-left"
                      aria-label={`Open video preview ${video.title}`}
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-[#F3F7FF]">
                        <Image
                          src={withSiteBasePath(video.thumbnailUrl)}
                          alt={video.title}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,24,0.08),rgba(5,11,24,0.72))]" />
                        <span className="absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-lg backdrop-blur-sm transition group-hover:bg-white/25">
                          <Play size={20} className="ml-1" />
                        </span>
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                            Video Archive
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-semibold leading-6 text-[#0F172A]">{video.title}</p>
                        <p className="mt-2 text-sm text-gray-600">{video.note}</p>
                      </div>
                    </button>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {activePhoto ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020817]/85 p-4 md:p-8">
          <button
            type="button"
            aria-label="Close photo preview"
            onClick={() => setActivePhotoIndex(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25"
          >
            <X size={18} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={() =>
              setActivePhotoIndex((prev) =>
                prev === null ? 0 : (prev - 1 + galleryCatalog.length) % galleryCatalog.length,
              )
            }
            className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 md:left-6"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={() =>
              setActivePhotoIndex((prev) => (prev === null ? 0 : (prev + 1) % galleryCatalog.length))
            }
            className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 md:right-6"
          >
            <ChevronRight size={18} />
          </button>

          <div className="w-full max-w-5xl">
            <div className="relative h-[60vh] overflow-hidden rounded-2xl border border-white/20 bg-[#0B1D48] shadow-2xl md:h-[72vh]">
              <Image
                src={withSiteBasePath(activePhoto.imageUrl)}
                alt={activePhoto.title}
                fill
                className="object-contain p-3"
                sizes="100vw"
                priority
              />
            </div>
            <div className="mt-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm">
              <p className="text-sm font-semibold md:text-base">{activePhoto.title}</p>
              <p className="mt-1 text-xs text-blue-100">
                {activePhotoIndex !== null ? activePhotoIndex + 1 : 1} / {galleryCatalog.length}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {activeVideo ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020817]/85 p-4 md:p-8">
          <button
            type="button"
            aria-label="Close video preview"
            onClick={() => setActiveVideoIndex(null)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25"
          >
            <X size={18} />
          </button>

          <button
            type="button"
            aria-label="Previous video"
            onClick={() =>
              setActiveVideoIndex((prev) =>
                prev === null ? 0 : (prev - 1 + videosCatalog.length) % videosCatalog.length,
              )
            }
            className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 md:left-6"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="Next video"
            onClick={() =>
              setActiveVideoIndex((prev) => (prev === null ? 0 : (prev + 1) % videosCatalog.length))
            }
            className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 md:right-6"
          >
            <ChevronRight size={18} />
          </button>

          <div className="w-full max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-[#0B1D48] shadow-2xl">
              <div className="relative aspect-video w-full">
                <Image
                  src={withSiteBasePath(activeVideo.thumbnailUrl)}
                  alt={activeVideo.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,24,0.08),rgba(5,11,24,0.72))]" />
                <span className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-lg backdrop-blur-sm">
                  <Play size={24} className="ml-1" />
                </span>
              </div>
              <div className="border-t border-white/15 bg-white/10 p-5 text-white backdrop-blur-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-base font-semibold">{activeVideo.title}</p>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                    Video Archive
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-blue-100">{activeVideo.note}</p>
                <p className="mt-3 text-xs text-blue-200">
                  {activeVideoIndex !== null ? activeVideoIndex + 1 : 1} / {videosCatalog.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
