"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: () => void;
      };
    };
  }
}

export default function XTimelineEmbed({
  profileUrl = "https://x.com/MeitY_NICSI",
  label = "Posts by @MeitY_NICSI",
  height = 650,
}: {
  profileUrl?: string;
  label?: string;
  height?: number;
}) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [embedState, setEmbedState] = useState<"loading" | "ready" | "failed">("loading");

  useEffect(() => {
    setEmbedState("loading");
    let attempts = 0;
    const maxAttempts = 30;

    const tryLoad = () => {
      if (window.twttr?.widgets?.load) {
        window.twttr.widgets.load();
        window.setTimeout(() => {
          const hasIframe = Boolean(containerRef.current?.querySelector("iframe"));
          setEmbedState(hasIframe ? "ready" : "failed");
        }, 1500);
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryLoad, 200);
      } else {
        setEmbedState("failed");
      }
    };

    tryLoad();
  }, [pathname]);

  return (
    <div ref={containerRef}>
      {embedState !== "failed" ? (
        <>
          <a className="twitter-timeline" data-height={String(height)} href={profileUrl.replace("https://x.com/", "https://twitter.com/")}>
            {label}
          </a>
          <Script id="twitter-wjs" async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
        </>
      ) : (
        <div className="flex h-[220px] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-gray-300 text-center text-sm text-gray-600">
          <p>X embed blocked or unavailable.</p>
          <a href={profileUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#0052CC]">
            Open @MeitY_NICSI
          </a>
        </div>
      )}
    </div>
  );
}
