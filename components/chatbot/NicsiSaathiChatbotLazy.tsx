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
    const w = globalThis as typeof globalThis & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof w.requestIdleCallback === "function") {
      const idleId = w.requestIdleCallback(start, { timeout: 2200 });
      return () => {
        if (typeof w.cancelIdleCallback === "function") {
          w.cancelIdleCallback(idleId);
        }
      };
    }

    const timer = setTimeout(start, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return null;
  return <NicsiSaathiChatbot faqs={faqs} />;
}
