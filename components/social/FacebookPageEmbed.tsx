"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    FB?: {
      XFBML?: { parse: (dom?: HTMLElement) => void };
      init?: (opts: unknown) => void;
    };
  }
}

function loadFacebookSDK(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();
    if (window.FB?.XFBML?.parse) return resolve();

    const existing = document.getElementById("facebook-jssdk");
    if (existing) {
      let attempts = 0;
      const maxAttempts = 30;
      const waitUntilReady = () => {
        if (window.FB?.XFBML?.parse) return resolve();
        attempts += 1;
        if (attempts < maxAttempts) {
          window.setTimeout(waitUntilReady, 200);
        } else {
          resolve();
        }
      };
      waitUntilReady();
      return;
    }

    if (!document.getElementById("fb-root")) {
      const root = document.createElement("div");
      root.id = "fb-root";
      document.body.prepend(root);
    }

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0";
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

export default function FacebookPageEmbed({
  pageUrl = "https://www.facebook.com/MeitY.NICSI",
  height = 520,
}: {
  pageUrl?: string;
  height?: number;
}) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [embedState, setEmbedState] = useState<"loading" | "ready" | "failed">("loading");

  useEffect(() => {
    (async () => {
      await loadFacebookSDK();
      if (containerRef.current) {
        window.FB?.XFBML?.parse(containerRef.current);
      }
      window.setTimeout(() => {
        const hasIframe = Boolean(containerRef.current?.querySelector("iframe"));
        setEmbedState(hasIframe ? "ready" : "failed");
      }, 1500);
    })();
  }, [pathname]);

  return (
    <div ref={containerRef} className="w-full">
      {embedState !== "failed" ? (
        <div
          className="fb-page"
          data-href={pageUrl}
          data-tabs="timeline"
          data-width="500"
          data-height={String(height)}
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        />
      ) : (
        <div className="flex h-[220px] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-gray-300 text-center text-sm text-gray-600">
          <p>Facebook embed blocked or unavailable.</p>
          <a href={pageUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#0052CC]">
            Open Facebook page
          </a>
        </div>
      )}
    </div>
  );
}
