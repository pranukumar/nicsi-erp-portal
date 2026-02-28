 "use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { CloudCog, Database, Network, ShieldCheck, Sparkles } from "lucide-react";

const motifItems = [
  { label: "Cloud Services", icon: CloudCog, className: "nicsi-motif-1", depth: 0.7 },
  { label: "Cyber Security", icon: ShieldCheck, className: "nicsi-motif-2", depth: 0.95 },
  { label: "Data Analytics", icon: Database, className: "nicsi-motif-3", depth: 0.8 },
  { label: "Digital Network", icon: Network, className: "nicsi-motif-4", depth: 1.05 },
  { label: "Innovation", icon: Sparkles, className: "nicsi-motif-5", depth: 0.65 },
] as const;

export default function NicsiMotionBackdrop() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    const update = (mx: number, my: number) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(() => {
        root.style.setProperty("--mx", mx.toFixed(4));
        root.style.setProperty("--my", my.toFixed(4));
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const mx = (event.clientX / window.innerWidth - 0.5) * 2;
      const my = (event.clientY / window.innerHeight - 0.5) * 2;
      update(mx, my);
    };

    const reset = () => update(0, 0);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", reset, { passive: true });
    window.addEventListener("blur", reset);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
    };
  }, []);

  return (
    <div ref={rootRef} className="nicsi-motion-backdrop pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
      <div className="nicsi-wave-layer nicsi-wave-layer-1" />
      <div className="nicsi-wave-layer nicsi-wave-layer-2" />
      {motifItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className={`nicsi-motif-wrap ${item.className}`}
            style={{ "--pf": item.depth } as CSSProperties}
          >
            <div className="nicsi-motif">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/70 text-[#0A3B8A]">
                <Icon size={14} />
              </span>
              <span className="nicsi-motif-label">{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
