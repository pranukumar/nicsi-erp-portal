"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    title: "Secure Digital Governance Infrastructure",
    description: "Empowering transparent, scalable, and secure public service delivery.",
    image: "/images/banner1.jpg",
    primaryCta: { label: "Explore Services", href: "/services" },
    secondaryCta: { label: "View Tenders", href: "/tenders" },
  },
  {
    title: "Unified Tender and Vendor Workflows",
    description: "Streamline procurement with trusted, auditable, and efficient digital processes.",
    image: "/images/banner2.jpg",
    primaryCta: { label: "Empanelled Vendors", href: "/empanelled-vendors" },
    secondaryCta: { label: "Login", href: "/login" },
  },
  {
    title: "Data-Driven Project Monitoring",
    description: "Track delivery outcomes with real-time visibility across departments.",
    image: "/images/digtal.png",
    primaryCta: { label: "About Portal", href: "/about" },
    secondaryCta: { label: "Contact", href: "/contact" },
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const autoDurationMs = 5000;

  const activeSlide = slides[activeIndex];

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

  return (
    <section
      className="relative isolate h-[68vh] min-h-[420px] w-full overflow-hidden text-white"
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
      <div className="absolute left-0 top-0 z-30 h-1 w-full bg-white/20">
        <div className="h-full bg-[var(--dsci-accent)] transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>

      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={slide.image} alt={slide.title} fill priority={index === 0} className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/30" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-3xl">
          <div
            className={`transition-all duration-700 ${
              progress < 20 ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Digital Governance Platform</p>
            <p className="mt-1 text-sm font-bold tracking-[0.08em] text-white">NICSI ERP PORTAL</p>
            <p className="mt-1 text-xs text-blue-100">National Informatics Centre Services Inc.</p>
          </div>
          <h1
            className={`mt-4 text-4xl font-bold leading-tight transition-all duration-700 md:text-5xl ${
              progress < 28 ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            {activeSlide.title}
          </h1>
          <p
            className={`mt-5 text-base text-blue-100 transition-all duration-700 md:text-lg ${
              progress < 36 ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            {activeSlide.description}
          </p>

          <div
            className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 ${
              progress < 45 ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <Link
              href={activeSlide.primaryCta.href}
              className="rounded-md bg-white px-6 py-3 font-semibold text-[var(--dsci-primary)] transition hover:bg-gray-200"
            >
              {activeSlide.primaryCta.label}
            </Link>
            <Link
              href={activeSlide.secondaryCta.href}
              className="rounded-md border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[var(--dsci-primary)]"
            >
              {activeSlide.secondaryCta.label}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className={`mt-5 rounded-md border border-white/60 bg-black/30 px-4 py-2 text-sm font-medium text-white transition-all duration-700 hover:bg-black/50 ${
              progress < 52 ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            {isPaused ? "Resume Auto Slide" : "Pause Auto Slide"}
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => {
              setActiveIndex(index);
              setProgress(0);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-y-0 left-3 z-20 flex items-center md:left-6">
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous slide"
          className="rounded-full border border-white/50 bg-black/30 px-3 py-2 text-xl transition hover:bg-black/50"
        >
          &#8249;
        </button>
      </div>

      <div className="absolute inset-y-0 right-3 z-20 flex items-center md:right-6">
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next slide"
          className="rounded-full border border-white/50 bg-black/30 px-3 py-2 text-xl transition hover:bg-black/50"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
