"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { NicsiChatbotFaq } from "@/services/nicsiChatbot";

const NicsiSaathiChatbot = dynamic(() => import("./NicsiSaathiChatbot"), {
  ssr: false,
});

export default function NicsiSaathiChatbotLazy({ faqs }: { faqs: NicsiChatbotFaq[] }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);

    if ("requestIdleCallback" in window) {
      const idleId = (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        start,
        { timeout: 2200 },
      );
      return () => {
        if ("cancelIdleCallback" in window) {
          (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
        }
      };
    }

    const timer = window.setTimeout(start, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) return null;
  return <NicsiSaathiChatbot faqs={faqs} />;
}
