"use client";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pause, Play, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { filterLinksForStaticAudit, isHiddenInStaticAudit, withSiteBasePath } from "@/lib/staticAudit";

type SlideLink = {
  label: string;
  href: string;
  external?: boolean;
};

type SlideHighlight = {
  label: string;
  value: string;
};

type SlideTheme = {
  shell: string;
  glow: string;
  panel: string;
  accent: string;
  border: string;
  text: string;
  button: string;
  buttonSecondary: string;
  chip: string;
  chipActive: string;
};

type Slide = {
  eyebrow: string;
  sectionLabel?: string;
  audience: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
  primaryCta: SlideLink;
  secondaryCta: SlideLink;
  quickLinks: SlideLink[];
  highlights: SlideHighlight[];
  panelTitle: string;
  panelNote: string;
  panelStyle?: "standard" | "portrait" | "pm";
  theme: SlideTheme;
};

const slides: Slide[] = [
  {
    eyebrow: "Prime Minister Of India",
    sectionLabel: "National Vision",
    audience: "Citizen Empowerment and Good Governance",
    title: "Prime Minister's Vision for Digital India",
    description:
      "Fast, secure public platforms for citizen empowerment and transparent governance.",
    image: "/images/pm-narendra-modi-official.jpg",
    imageAlt: "Hon'ble Prime Minister of India, Shri Narendra Modi",
    imageClassName: "object-contain bg-[#0A1833] p-3",
    primaryCta: { label: "Connect With Us", href: "/contact" },
    secondaryCta: { label: "Explore NICSI", href: "/about" },
    quickLinks: [
      { label: "PM India", href: "https://www.pmindia.gov.in/", external: true },
      { label: "MeitY Official", href: "https://www.meity.gov.in/", external: true },
    ],
    highlights: [
      { label: "National Mission", value: "Digital India" },
      { label: "Public Impact", value: "Ease of Living" },
      { label: "Long-Term Goal", value: "Viksit Bharat 2047" },
    ],
    panelTitle: "Prime Minister's Vision for Digital India",
    panelNote: "\"A Digital India is an empowered India.\"",
    panelStyle: "pm",
    theme: {
      shell: "from-[#04142E] via-[#0A2E73] to-[#123E94]",
      glow: "from-[#FF9933]/20 via-[#FFFFFF]/5 to-[#138808]/18",
      panel: "from-white/18 via-white/10 to-white/5",
      accent: "bg-[#FF9933]",
      border: "border-cyan-200/35",
      text: "text-[#DCEBFF]",
      button: "bg-white text-[#0A2E73] hover:bg-[#EAF3FF]",
      buttonSecondary: "border-white/40 text-white hover:bg-white hover:text-[#0A2E73]",
      chip: "border-cyan-200/30 bg-white/10 text-cyan-50 hover:bg-white/18",
      chipActive: "border-cyan-200/60 bg-white text-[#0A2E73]",
    },
  },
  {
    eyebrow: "Procurement & Access",
    audience: "For Procurement Teams and Industry Partners",
    title: "Vendor discovery and tender workflows",
    description:
      "Fast, secure access to empanelment, bids, and procurement references.",
    image: "/images/nicsi-operating-model.png",
    imageAlt: "NICSI operating model showing delivery and procurement flow",
    imageClassName: "object-contain bg-[#07142D] p-3",
    primaryCta: { label: "Empanelled Vendors", href: "/empanelled-vendors" },
    secondaryCta: { label: "CPP Tenders", href: "/active-tenders" },
    quickLinks: [
      { label: "GeM Bids", href: "/nicsi-gem-bids" },
      { label: "Vendor Search", href: "/vendor-search" },
      { label: "Download Forms", href: "/forms" },
    ],
    highlights: [
      { label: "Discovery", value: "Smart vendor search" },
      { label: "Tender Access", value: "CPP and GeM" },
      { label: "Support", value: "Forms and search tools" },
    ],
    panelTitle: "Procurement Workflow Track",
    panelNote: "Bring requirement, empanelment, bid access, and execution routes into one visible starting point.",
    theme: {
      shell: "from-[#311708] via-[#7A360A] to-[#B85B0B]",
      glow: "from-[#FFB54A]/35 via-[#FF8A00]/20 to-transparent",
      panel: "from-white/18 via-white/10 to-white/5",
      accent: "bg-[#FFB54A]",
      border: "border-amber-200/35",
      text: "text-amber-100",
      button: "bg-white text-[#672F09] hover:bg-[#FFF4E2]",
      buttonSecondary: "border-white/40 text-white hover:bg-white hover:text-[#672F09]",
      chip: "border-amber-200/30 bg-white/10 text-amber-50 hover:bg-white/18",
      chipActive: "border-amber-200/60 bg-white text-[#672F09]",
    },
  },
  {
    eyebrow: "Cloud & Innovation",
    audience: "For Infrastructure and Innovation Programmes",
    title: "Cloud, Cyber Security, and AI-Enabled Analytics",
    description:
      "Fast, secure access to cloud infrastructure, cyber resilience, and AI-enabled analytics capabilities.",
    image: "/images/map_nicsi_datacenter.jpg",
    imageAlt: "India map showing NICSI data centre footprint",
    imageClassName: "object-contain bg-[#0A1833] p-2",
    primaryCta: { label: "NICSI Cloud", href: "/nicsi-cloud" },
    secondaryCta: { label: "Centres of Excellence", href: "/centre-of-excellence" },
    quickLinks: [
      { label: "NGC Cloud", href: "/ngc-cloud" },
      { label: "PBD Projects", href: "/pbd-projects" },
      { label: "Media Gallery", href: "/media-gallery" },
    ],
    highlights: [
      { label: "Cloud", value: "Secure hosting tracks" },
      { label: "Security", value: "Audit and resilience" },
      { label: "Innovation", value: "AI-enabled analytics and blockchain" },
    ],
    panelTitle: "Capability Track",
    panelNote: "Expose infrastructure and innovation strength early instead of hiding it below the fold.",
    theme: {
      shell: "from-[#062139] via-[#0A456D] to-[#0990B8]",
      glow: "from-[#6AE4FF]/35 via-[#12B8FF]/20 to-transparent",
      panel: "from-white/18 via-white/10 to-white/5",
      accent: "bg-[#6AE4FF]",
      border: "border-sky-200/35",
      text: "text-sky-100",
      button: "bg-white text-[#063556] hover:bg-[#E7FAFF]",
      buttonSecondary: "border-white/40 text-white hover:bg-white hover:text-[#063556]",
      chip: "border-sky-200/30 bg-white/10 text-sky-50 hover:bg-white/18",
      chipActive: "border-sky-200/60 bg-white text-[#063556]",
    },
  },
  {
    eyebrow: "Digital Public Infrastructure",
    sectionLabel: "Public Service Delivery",
    audience: "For Citizens, Departments, and Partners",
    title: "National platforms enabling citizen service delivery",
    description:
      "Trusted digital platforms, official resources, and mission-mode communication built for public impact.",
    image: "/images/banner1.jpg",
    imageAlt: "National digital public infrastructure and citizen service delivery banner",
    primaryCta: { label: "National Projects", href: "/national-projects" },
    secondaryCta: { label: "Reports", href: "/reports" },
    quickLinks: [
      { label: "Press Releases", href: "/press-releases" },
      { label: "Forms", href: "/forms" },
      { label: "Media Gallery", href: "/media-gallery" },
    ],
    highlights: [
      { label: "Platforms", value: "Citizen-facing digital services" },
      { label: "Resources", value: "Reports, forms, and references" },
      { label: "Reach", value: "Updates, media, and public visibility" },
    ],
    panelTitle: "Digital Public Infrastructure Track",
    panelNote: "Bring citizen service platforms, official resources, and national communication into one strong public-facing view.",
    theme: {
      shell: "from-[#150A3C] via-[#2B1C73] to-[#4254B8]",
      glow: "from-[#9FB2FF]/35 via-[#728DFF]/20 to-transparent",
      panel: "from-white/18 via-white/10 to-white/5",
      accent: "bg-[#9FB2FF]",
      border: "border-indigo-200/35",
      text: "text-indigo-100",
      button: "bg-white text-[#241563] hover:bg-[#EEF1FF]",
      buttonSecondary: "border-white/40 text-white hover:bg-white hover:text-[#241563]",
      chip: "border-indigo-200/30 bg-white/10 text-indigo-50 hover:bg-white/18",
      chipActive: "border-indigo-200/60 bg-white text-[#241563]",
    },
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const autoDurationMs = 6500;
  const visibleSlides = slides.map((slide) => ({
    ...slide,
    image: withSiteBasePath(slide.image),
    quickLinks: filterLinksForStaticAudit(slide.quickLinks),
  }));
  const activeSlide = visibleSlides[activeIndex];
  const panelStyle = activeSlide.panelStyle ?? "standard";
  const isPmSlide = panelStyle === "pm";
  const primaryCta = isHiddenInStaticAudit(activeSlide.primaryCta.href) ? null : activeSlide.primaryCta;
  const secondaryCta = isHiddenInStaticAudit(activeSlide.secondaryCta.href) ? null : activeSlide.secondaryCta;

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const tickMs = 100;
    const step = (tickMs / autoDurationMs) * 100;
    const intervalId = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          setActiveIndex((current) => (current + 1) % slides.length);
          return 0;
        }
        return next;
      });
    }, tickMs);

    return () => window.clearInterval(intervalId);
  }, [autoDurationMs, isPaused]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight") {
      goToNext();
    }
    if (event.key === "ArrowLeft") {
      goToPrev();
    }
    if (event.key === " ") {
      event.preventDefault();
      setIsPaused((prev) => !prev);
    }
  };

  const onTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const startX = touchStartX.current;
    const endX = event.changedTouches[0]?.clientX ?? null;
    if (startX === null || endX === null) {
      return;
    }

    const delta = endX - startX;
    if (Math.abs(delta) < 50) {
      return;
    }

    if (delta < 0) {
      goToNext();
      return;
    }
    goToPrev();
  };

  const renderSlideLink = (link: SlideLink, className: string, children?: ReactNode) => {
    if (link.external) {
      return (
        <a href={link.href} target="_blank" rel="noreferrer" className={className}>
          {children ?? link.label}
        </a>
      );
    }

    return (
      <Link href={link.href} className={className}>
        {children ?? link.label}
      </Link>
    );
  };

  return (
    <section
      className="relative isolate overflow-hidden px-4 pb-4 pt-3 text-white sm:px-6 sm:pb-5 sm:pt-4"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Featured highlights slider"
    >
      <div className="mx-auto max-w-6xl">
        <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${activeSlide.theme.shell} shadow-[0_24px_60px_rgba(10,46,115,0.28)]`}>
          <div className={`absolute inset-x-0 top-0 h-1 ${activeSlide.theme.accent}/30`}>
            <div className={`h-full ${activeSlide.theme.accent} transition-[width] duration-100`} style={{ width: `${progress}%` }} />
          </div>
          <div className={`absolute -left-24 top-12 h-56 w-56 rounded-full bg-gradient-to-br ${activeSlide.theme.glow} blur-3xl`} />
          <div className={`absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-gradient-to-br ${activeSlide.theme.glow} blur-3xl`} />
          <div className="absolute inset-0 opacity-[0.16]">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div
            className={`relative z-10 grid gap-6 px-4 ${isPmSlide ? "pb-3 pt-4 sm:pb-4 sm:pt-5 lg:pb-4 lg:pt-5" : "pb-4 pt-6 sm:pb-5 sm:pt-7 lg:pb-6 lg:pt-8"} sm:px-6 lg:px-8 ${
              isPmSlide ? "lg:grid-cols-[0.84fr_1.16fr] lg:gap-6" : "lg:grid-cols-[1.15fr_0.85fr]"
            }`}
          >
            <div key={`${activeSlide.title}-content`} className="flex min-w-0 flex-col animate-[nicsi-fade-up_0.55s_cubic-bezier(0.2,0.7,0.2,1)_both]">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                <ShieldCheck size={14} className="text-white/85" />
                {activeSlide.eyebrow}
              </div>
              <p className={`mt-3 text-[12px] font-semibold tracking-[0.08em] ${activeSlide.theme.text}`}>
                {activeSlide.sectionLabel ?? "NICSI Mission Tracks"}
              </p>
              <h1
                className={`mt-3 max-w-3xl font-extrabold leading-tight tracking-tight text-white ${
                  isPmSlide ? "text-2xl sm:text-3xl lg:text-[2.8rem]" : "text-2xl sm:text-3xl lg:text-[2.65rem]"
                }`}
              >
                {activeSlide.title}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/82 sm:text-[15px] sm:leading-7">
                {activeSlide.description}
              </p>

              {isPmSlide ? (
                <div className="mt-4 grid gap-2">
                  {activeSlide.highlights.map((highlight) => (
                    <div key={highlight.label} className="rounded-[1rem] border border-white/12 bg-white/8 px-3 py-2.5">
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${activeSlide.theme.text}`}>{highlight.label}</p>
                      <p className="mt-1 text-sm font-semibold leading-5 text-white">{highlight.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {primaryCta || secondaryCta ? (
                <div className={`${isPmSlide ? "mt-4" : "mt-5"} flex flex-wrap gap-2.5`}>
                  {primaryCta
                    ? renderSlideLink(
                        primaryCta,
                        `inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition ${activeSlide.theme.button}`,
                        <>
                          {primaryCta.label}
                          <ArrowRight size={16} />
                        </>,
                      )
                    : null}
                  {secondaryCta
                    ? renderSlideLink(
                        secondaryCta,
                        `inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${activeSlide.theme.buttonSecondary}`,
                      )
                    : null}
                </div>
              ) : null}

              {activeSlide.quickLinks.length > 0 ? (
                <div className={`${isPmSlide ? "mt-3" : "mt-4"}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/72">
                    {isPmSlide ? "Official References" : "Quick Paths"}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {activeSlide.quickLinks.map((link) => (
                      <span
                        key={link.label}
                      >
                        {renderSlideLink(
                          link,
                          `rounded-full border px-3 py-1.5 text-xs font-semibold transition ${activeSlide.theme.chip}`,
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div key={`${activeSlide.title}-panel`} className="min-w-0 animate-[nicsi-fade-up_0.6s_cubic-bezier(0.2,0.7,0.2,1)_both]">
              <article className={`relative overflow-hidden rounded-[1.75rem] border bg-gradient-to-br ${isPmSlide ? "p-3 sm:p-3.5" : "p-3.5 sm:p-4"} backdrop-blur-sm ${activeSlide.theme.border} ${activeSlide.theme.panel}`}>
                <div className="grid gap-4">
                  {panelStyle === "pm" ? (
                    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/18 bg-[#071A3B]/88 shadow-[0_22px_54px_rgba(0,0,0,0.24)]">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,153,51,0.16),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_82%_76%,rgba(19,136,8,0.16),transparent_28%)]" />
                      <div className="grid h-1 grid-cols-3">
                        <div className="bg-[#FF9933]" />
                        <div className="bg-white" />
                        <div className="bg-[#138808]" />
                      </div>
                      <div className="relative p-3 sm:p-3.5">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-2">
                          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/18">
                            <Image
                              src={withSiteBasePath("/logos/ashoka.png")}
                              alt="Government of India emblem"
                              fill
                              sizes="40px"
                              className="object-contain p-1.5"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/72">Government of India</p>
                            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/58">Digital India Leadership</p>
                          </div>
                        </div>

                        <div className="mt-2.5 min-w-0">
                          <div className="relative mx-auto max-w-[410px] rounded-[1.7rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-1.5 shadow-[0_24px_48px_rgba(0,0,0,0.22)]">
                              <div className="pointer-events-none absolute inset-6 rounded-[1.7rem] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.55),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(19,136,8,0.10),transparent_38%)]" />
                              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/16 bg-[linear-gradient(180deg,#ffffff_0%,#eef4ff_100%)]">
                                <div className="absolute right-3 top-3 z-10 inline-flex items-center rounded-full bg-[#0A2E73] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_20px_rgba(10,46,115,0.28)]">
                                  Prime Minister
                                </div>
                                <div className="relative aspect-[4/2.7] sm:aspect-[4/2.9] lg:aspect-[4/2.8]">
                                  <img
                                    src={activeSlide.image}
                                    alt={activeSlide.imageAlt}
                                    className="h-full w-full object-contain p-4 sm:p-5 lg:p-6"
                                    loading={activeIndex === 0 ? "eager" : "lazy"}
                                  />
                                </div>
                              </div>
                              <div className="relative mt-1.5 overflow-hidden rounded-[1.1rem] border border-white/14 bg-white px-3 py-2 text-center sm:px-4">
                                <div className="absolute inset-x-0 top-0 grid h-1 grid-cols-3">
                                  <div className="bg-[#FF9933]" />
                                  <div className="bg-white" />
                                  <div className="bg-[#138808]" />
                                </div>
                                <p className="pt-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-[#51627F]">Hon&apos;ble Prime Minister of India</p>
                                <p className="mt-1 text-[0.95rem] font-extrabold text-[#0A2E73] sm:text-[1.22rem]">Shri Narendra Modi</p>
                                <p className="mt-0.5 text-[11px] font-medium text-[#4B5F83] sm:text-[12px]">Leadership for Digital India and Viksit Bharat</p>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : panelStyle === "portrait" ? (
                    <div className="overflow-hidden rounded-2xl border border-white/18 bg-[#08152E]/75 p-4">
                      <div className="grid gap-4 sm:grid-cols-[200px_1fr] sm:items-center">
                        <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/14 bg-white">
                          <div className="relative aspect-[4/5]">
                            <img
                              src={activeSlide.image}
                              alt={activeSlide.imageAlt}
                              className={`h-full w-full ${activeSlide.imageClassName ?? "object-cover"}`}
                              loading={activeIndex === 0 ? "eager" : "lazy"}
                            />
                          </div>
                        </div>
                        <div className="min-w-0 text-center sm:text-left">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/72">{activeSlide.panelTitle}</p>
                          <p className="mt-2 text-lg font-semibold leading-8 text-white sm:text-xl">
                            {activeSlide.panelNote}
                          </p>
                          <p className={`mt-3 text-xs font-medium uppercase tracking-[0.16em] ${activeSlide.theme.text}`}>
                            Official digital governance vision reflected through NIC, MeitY and NICSI
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-2xl border border-white/18 bg-black/15">
                      <div className="relative h-44 sm:h-52">
                        <img
                          src={activeSlide.image}
                          alt={activeSlide.imageAlt}
                          className={`h-full w-full ${activeSlide.imageClassName ?? "object-cover opacity-90"}`}
                          loading={activeIndex === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#08152E]/75 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/72">{activeSlide.panelTitle}</p>
                          <p className="mt-1 text-sm font-semibold leading-6 text-white">{activeSlide.panelNote}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {!isPmSlide ? (
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      {activeSlide.highlights.map((highlight) => (
                        <div key={highlight.label} className="rounded-2xl border border-white/14 bg-white/10 p-3.5">
                          <p className={`text-[12px] font-semibold uppercase tracking-[0.13em] ${activeSlide.theme.text}`}>{highlight.label}</p>
                          <p className="mt-2 text-sm font-semibold leading-6 text-white">{highlight.value}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>

              <div className={`${isPmSlide ? "mt-2" : "mt-3"} flex items-center justify-between gap-3`}>
                <button
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 transition hover:bg-white/16"
                >
                  {isPaused ? <Play size={14} /> : <Pause size={14} />}
                  {isPaused ? "Resume Auto Slide" : "Pause Auto Slide"}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goToPrev}
                    aria-label="Previous slide"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-lg text-white transition hover:bg-white/18"
                  >
                    &#8249;
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Next slide"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-lg text-white transition hover:bg-white/18"
                  >
                    &#8250;
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 border-t border-white/12 bg-black/10 px-4 py-3 sm:px-6">
            <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`rounded-2xl border px-4 py-2.5 text-left transition ${
                      isActive
                        ? `${slide.theme.chipActive} shadow-[0_10px_20px_rgba(0,0,0,0.12)]`
                        : "border-white/12 bg-white/6 text-white/88 hover:bg-white/12"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${isActive ? "text-current/70" : "text-white/58"}`}>
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1 line-clamp-1 text-xs font-semibold leading-4 sm:text-sm">{slide.eyebrow}</p>
                      </div>
                      <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${slide.theme.accent}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
