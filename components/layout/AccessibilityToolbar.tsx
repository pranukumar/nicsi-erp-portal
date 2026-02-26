"use client";

import { useState } from "react";

export default function AccessibilityToolbar() {
  const [fontScale, setFontScale] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  const applyStyles = (scale: number, contrast: boolean, gray: boolean) => {
    document.documentElement.style.fontSize = `${scale}%`;
    document.documentElement.style.filter = `${contrast ? "contrast(1.15)" : "none"} ${gray ? "grayscale(1)" : ""}`.trim();
  };

  const increaseFont = () => {
    const next = Math.min(115, fontScale + 5);
    setFontScale(next);
    applyStyles(next, highContrast, grayscale);
  };

  const decreaseFont = () => {
    const next = Math.max(90, fontScale - 5);
    setFontScale(next);
    applyStyles(next, highContrast, grayscale);
  };

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    applyStyles(fontScale, next, grayscale);
  };

  const toggleGrayscale = () => {
    const next = !grayscale;
    setGrayscale(next);
    applyStyles(fontScale, highContrast, next);
  };

  const resetAll = () => {
    setFontScale(100);
    setHighContrast(false);
    setGrayscale(false);
    document.documentElement.style.fontSize = "100%";
    document.documentElement.style.filter = "none";
  };

  return (
    <div className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm">
      <span className="mr-2 font-semibold text-[#003A8C]">Accessibility</span>
      <button type="button" onClick={decreaseFont} className="rounded border px-2 py-1 hover:bg-gray-50">A-</button>
      <button type="button" onClick={increaseFont} className="rounded border px-2 py-1 hover:bg-gray-50">A+</button>
      <button type="button" onClick={toggleContrast} className="rounded border px-2 py-1 hover:bg-gray-50">
        {highContrast ? "Normal Contrast" : "High Contrast"}
      </button>
      <button type="button" onClick={toggleGrayscale} className="rounded border px-2 py-1 hover:bg-gray-50">
        {grayscale ? "Color Mode" : "Grayscale"}
      </button>
      <button type="button" onClick={resetAll} className="rounded bg-[#003A8C] px-3 py-1 text-white hover:bg-[#0052CC]">
        Reset
      </button>
      <span className="ml-auto rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-[#003A8C]">
        Language: EN (HI Coming Soon)
      </span>
    </div>
  );
}
