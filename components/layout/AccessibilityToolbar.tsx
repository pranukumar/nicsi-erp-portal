"use client";

import { Accessibility, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

export default function AccessibilityToolbar() {
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
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.innerWidth < 768;
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

  const toggleSetting = (setter: Dispatch<SetStateAction<boolean>>) => {
    setter((prev) => !prev);
  };

  const increaseFont = () => {
    const next = Math.min(115, fontScale + 5);
    setFontScale(next);
  };

  const decreaseFont = () => {
    const next = Math.max(90, fontScale - 5);
    setFontScale(next);
  };

  const toggleContrast = () => {
    toggleSetting(setHighContrast);
  };

  const toggleGrayscale = () => {
    toggleSetting(setGrayscale);
  };

  const resetAll = () => {
    setFontScale(100);
    setHighContrast(false);
    setGrayscale(false);
    setReadableFont(false);
    setLinkHighlight(false);
    setTextSpacing(false);
    setReduceMotion(false);
    document.documentElement.style.fontSize = "100%";
    document.documentElement.style.filter = "none";
    document.documentElement.classList.remove(
      "a11y-readable-font",
      "a11y-link-highlight",
      "a11y-text-spacing",
      "a11y-reduce-motion",
    );
  };

  return (
    <div className="z-40 mt-2 w-full border-y border-blue-200 bg-white px-4 py-2 text-sm shadow-sm md:fixed md:right-4 md:top-28 md:mt-0 md:w-auto md:max-w-[460px] md:rounded-xl md:border md:px-3 md:py-2">
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="accessibility-controls"
          className="inline-flex items-center gap-1 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 font-semibold text-[#003A8C] hover:bg-blue-100"
        >
          <Accessibility size={14} />
          <span>Accessibility</span>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      <div id="accessibility-controls" className={`${isOpen ? "mt-2 flex" : "hidden"} flex-wrap items-center gap-2`}>
        <button type="button" onClick={decreaseFont} className="rounded border px-2 py-1 hover:bg-gray-50">A-</button>
        <button type="button" onClick={increaseFont} className="rounded border px-2 py-1 hover:bg-gray-50">A+</button>
        <button type="button" aria-pressed={highContrast} onClick={toggleContrast} className="rounded border px-2 py-1 hover:bg-gray-50">
          {highContrast ? "Normal Contrast" : "High Contrast"}
        </button>
        <button type="button" aria-pressed={grayscale} onClick={toggleGrayscale} className="rounded border px-2 py-1 hover:bg-gray-50">
          {grayscale ? "Color Mode" : "Grayscale"}
        </button>
        <button type="button" aria-pressed={readableFont} onClick={() => toggleSetting(setReadableFont)} className="rounded border px-2 py-1 hover:bg-gray-50">
          {readableFont ? "Default Font" : "Readable Font"}
        </button>
        <button type="button" aria-pressed={linkHighlight} onClick={() => toggleSetting(setLinkHighlight)} className="rounded border px-2 py-1 hover:bg-gray-50">
          {linkHighlight ? "Normal Links" : "Highlight Links"}
        </button>
        <button type="button" aria-pressed={textSpacing} onClick={() => toggleSetting(setTextSpacing)} className="rounded border px-2 py-1 hover:bg-gray-50">
          {textSpacing ? "Normal Spacing" : "Text Spacing"}
        </button>
        <button type="button" aria-pressed={reduceMotion} onClick={() => toggleSetting(setReduceMotion)} className="rounded border px-2 py-1 hover:bg-gray-50">
          {reduceMotion ? "Motion On" : "Reduce Motion"}
        </button>
        <button type="button" onClick={resetAll} className="rounded bg-[#003A8C] px-3 py-1 text-white hover:bg-[#0052CC]">
          Reset
        </button>
      </div>
    </div>
  );
}
