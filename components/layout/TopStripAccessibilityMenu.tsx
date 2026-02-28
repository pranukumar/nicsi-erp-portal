"use client";

import { Accessibility, ChevronDown } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export default function TopStripAccessibilityMenu({ mode = "dropdown" }: { mode?: "dropdown" | "panel" }) {
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState(() => {
    if (typeof window === "undefined") return 100;
    const saved = Number(window.localStorage.getItem("a11y_font_scale") ?? "100");
    return Number.isFinite(saved) ? Math.min(115, Math.max(90, saved)) : 100;
  });
  const [highContrast, setHighContrast] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("a11y_high_contrast") === "1";
  });
  const [grayscale, setGrayscale] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("a11y_grayscale") === "1";
  });
  const [readableFont, setReadableFont] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("a11y_readable_font") === "1";
  });
  const [linkHighlight, setLinkHighlight] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("a11y_link_highlight") === "1";
  });
  const [textSpacing, setTextSpacing] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("a11y_text_spacing") === "1";
  });
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("a11y_reduce_motion") === "1";
  });

  const applyStyles = (
    scale: number,
    contrast: boolean,
    gray: boolean,
    readable: boolean,
    highlight: boolean,
    spacing: boolean,
    motionReduce: boolean,
  ) => {
    const root = document.documentElement;
    root.style.fontSize = `${scale}%`;
    root.style.filter = `${contrast ? "contrast(1.15)" : "none"} ${gray ? "grayscale(1)" : ""}`.trim();
    root.classList.toggle("a11y-readable-font", readable);
    root.classList.toggle("a11y-link-highlight", highlight);
    root.classList.toggle("a11y-text-spacing", spacing);
    root.classList.toggle("a11y-reduce-motion", motionReduce);
  };

  useEffect(() => {
    applyStyles(fontScale, highContrast, grayscale, readableFont, linkHighlight, textSpacing, reduceMotion);
    window.localStorage.setItem("a11y_font_scale", String(fontScale));
    window.localStorage.setItem("a11y_high_contrast", highContrast ? "1" : "0");
    window.localStorage.setItem("a11y_grayscale", grayscale ? "1" : "0");
    window.localStorage.setItem("a11y_readable_font", readableFont ? "1" : "0");
    window.localStorage.setItem("a11y_link_highlight", linkHighlight ? "1" : "0");
    window.localStorage.setItem("a11y_text_spacing", textSpacing ? "1" : "0");
    window.localStorage.setItem("a11y_reduce_motion", reduceMotion ? "1" : "0");
  }, [fontScale, highContrast, grayscale, readableFont, linkHighlight, textSpacing, reduceMotion]);

  const toggleSetting = (setter: Dispatch<SetStateAction<boolean>>) => setter((prev) => !prev);

  const resetAll = () => {
    setFontScale(100);
    setHighContrast(false);
    setGrayscale(false);
    setReadableFont(false);
    setLinkHighlight(false);
    setTextSpacing(false);
    setReduceMotion(false);
  };

  const panelClass =
    mode === "panel"
      ? "mt-2 rounded-lg border border-cyan-100 bg-white p-3 text-[#1C2F57] shadow-[0_18px_35px_rgba(10,46,115,0.22)]"
      : `${open ? "visible opacity-100" : "invisible opacity-0"} absolute right-0 z-50 mt-2 w-[340px] rounded-xl border border-cyan-100 bg-gradient-to-br from-white via-[#f6fbff] to-[#eef6ff] p-3 text-[#1C2F57] shadow-[0_18px_35px_rgba(10,46,115,0.22)] transition`;

  if (mode === "panel") {
    return (
      <div className={panelClass}>
        <p className="text-[11px] font-semibold text-[#0F4BB8]">Language Support: English | Hindi</p>
        <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
          <button type="button" onClick={() => setFontScale((prev) => Math.max(90, prev - 5))} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">A-</button>
          <button type="button" onClick={() => setFontScale((prev) => Math.min(115, prev + 5))} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">A+</button>
          <button type="button" aria-pressed={highContrast} onClick={() => toggleSetting(setHighContrast)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {highContrast ? "Normal Contrast" : "High Contrast"}
          </button>
          <button type="button" aria-pressed={grayscale} onClick={() => toggleSetting(setGrayscale)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {grayscale ? "Color Mode" : "Grayscale"}
          </button>
          <button type="button" aria-pressed={readableFont} onClick={() => toggleSetting(setReadableFont)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {readableFont ? "Default Font" : "Readable Font"}
          </button>
          <button type="button" aria-pressed={linkHighlight} onClick={() => toggleSetting(setLinkHighlight)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {linkHighlight ? "Normal Links" : "Highlight Links"}
          </button>
          <button type="button" aria-pressed={textSpacing} onClick={() => toggleSetting(setTextSpacing)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {textSpacing ? "Normal Spacing" : "Text Spacing"}
          </button>
          <button type="button" aria-pressed={reduceMotion} onClick={() => toggleSetting(setReduceMotion)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {reduceMotion ? "Motion On" : "Reduce Motion"}
          </button>
          <button type="button" onClick={resetAll} className="rounded bg-[#003A8C] px-3 py-1 text-white hover:bg-[#0052CC]">
            Reset
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="top-strip-a11y-menu"
        className="inline-flex items-center gap-1 rounded border border-white/35 bg-white/10 px-2 py-0.5 text-[11px] text-white/95"
      >
        <Accessibility size={12} />
        <span>Accessibility</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <div id="top-strip-a11y-menu" className={panelClass}>
        <p className="text-[11px] font-semibold text-[#0F4BB8]">Language Support: English | Hindi</p>
        <div className="mt-2 flex flex-wrap gap-2 text-[12px]">
          <button type="button" onClick={() => setFontScale((prev) => Math.max(90, prev - 5))} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">A-</button>
          <button type="button" onClick={() => setFontScale((prev) => Math.min(115, prev + 5))} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">A+</button>
          <button type="button" aria-pressed={highContrast} onClick={() => toggleSetting(setHighContrast)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {highContrast ? "Normal Contrast" : "High Contrast"}
          </button>
          <button type="button" aria-pressed={grayscale} onClick={() => toggleSetting(setGrayscale)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {grayscale ? "Color Mode" : "Grayscale"}
          </button>
          <button type="button" aria-pressed={readableFont} onClick={() => toggleSetting(setReadableFont)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {readableFont ? "Default Font" : "Readable Font"}
          </button>
          <button type="button" aria-pressed={linkHighlight} onClick={() => toggleSetting(setLinkHighlight)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {linkHighlight ? "Normal Links" : "Highlight Links"}
          </button>
          <button type="button" aria-pressed={textSpacing} onClick={() => toggleSetting(setTextSpacing)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {textSpacing ? "Normal Spacing" : "Text Spacing"}
          </button>
          <button type="button" aria-pressed={reduceMotion} onClick={() => toggleSetting(setReduceMotion)} className="rounded border border-blue-200 bg-white px-2 py-1 hover:bg-blue-50">
            {reduceMotion ? "Motion On" : "Reduce Motion"}
          </button>
          <button type="button" onClick={resetAll} className="rounded bg-[#003A8C] px-3 py-1 text-white hover:bg-[#0052CC]">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
