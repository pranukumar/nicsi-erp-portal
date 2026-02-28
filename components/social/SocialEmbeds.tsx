"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import XTimelineEmbed from "@/components/social/XTimelineEmbed";
import FacebookPageEmbed from "@/components/social/FacebookPageEmbed";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

function loadInstagramScript(): Promise<void> {
  return new Promise((resolve) => {
    const existing = document.getElementById("instagram-embed-js");
    if (existing) return resolve();

    const script = document.createElement("script");
    script.id = "instagram-embed-js";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

export default function SocialEmbeds() {
  const instagramPostUrl = "";
  const linkedinEmbedUrl = "";
  const embedHeight = 520;
  const previewLogo = "/logos/NICSI-logo.png";

  useEffect(() => {
    if (!instagramPostUrl) return;
    (async () => {
      await loadInstagramScript();
      window.instgrm?.Embeds?.process();
    })();
  }, [instagramPostUrl]);

  return (
    <>
      <div className="mt-6 hidden gap-4 lg:grid lg:grid-cols-4">
        <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="mb-3 text-sm font-semibold text-[#0F172A]">X</p>
          <XTimelineEmbed profileUrl="https://x.com/MeitY_NICSI" label="Posts by @MeitY_NICSI" height={embedHeight} />
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="mb-3 text-sm font-semibold text-[#0F172A]">Facebook</p>
          <FacebookPageEmbed pageUrl="https://www.facebook.com/MeitY.NICSI" height={embedHeight} />
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="mb-3 text-sm font-semibold text-[#0F172A]">LinkedIn</p>
          {linkedinEmbedUrl ? (
            <iframe title="LinkedIn Embed" src={linkedinEmbedUrl} width="100%" height={embedHeight} style={{ border: "none" }} />
          ) : (
            <div className="flex h-[220px] flex-col items-center justify-center gap-3 text-center text-sm text-gray-600">
              <Image src={previewLogo} alt="LinkedIn preview" width={90} height={36} className="h-9 w-auto opacity-80" />
              <p>LinkedIn post image dikhane ke liye `linkedinEmbedUrl` set karein.</p>
              <Link
                href="https://www.linkedin.com/company/nicsi/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#0052CC]"
              >
                Open page
              </Link>
            </div>
          )}
        </article>

        <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="mb-3 text-sm font-semibold text-[#0F172A]">Instagram</p>
          {instagramPostUrl ? (
            <blockquote className="instagram-media" data-instgrm-permalink={instagramPostUrl} data-instgrm-version="14" />
          ) : (
            <div className="flex h-[220px] flex-col items-center justify-center gap-3 text-center text-sm text-gray-600">
              <Image src={previewLogo} alt="Instagram preview" width={90} height={36} className="h-9 w-auto opacity-80" />
              <p>Instagram post image dikhane ke liye `instagramPostUrl` set karein.</p>
              <Link href="https://www.instagram.com/meity_nicsi/" target="_blank" rel="noreferrer" className="font-semibold text-[#0052CC]">
                Open profile
              </Link>
            </div>
          )}
        </article>
      </div>

      <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:hidden">
        <article className="min-w-[85%] snap-start rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:min-w-[70%]">
          <p className="mb-3 text-sm font-semibold text-[#0F172A]">X</p>
          <XTimelineEmbed profileUrl="https://x.com/MeitY_NICSI" label="Posts by @MeitY_NICSI" height={embedHeight} />
        </article>

        <article className="min-w-[85%] snap-start rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:min-w-[70%]">
          <p className="mb-3 text-sm font-semibold text-[#0F172A]">Facebook</p>
          <FacebookPageEmbed pageUrl="https://www.facebook.com/MeitY.NICSI" height={embedHeight} />
        </article>

        <article className="min-w-[85%] snap-start rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:min-w-[70%]">
          <p className="mb-3 text-sm font-semibold text-[#0F172A]">LinkedIn</p>
          {linkedinEmbedUrl ? (
            <iframe title="LinkedIn Embed Mobile" src={linkedinEmbedUrl} width="100%" height={embedHeight} style={{ border: "none" }} />
          ) : (
            <div className="flex h-[220px] flex-col items-center justify-center gap-3 text-center text-sm text-gray-600">
              <Image src={previewLogo} alt="LinkedIn preview" width={90} height={36} className="h-9 w-auto opacity-80" />
              <p>LinkedIn post image dikhane ke liye `linkedinEmbedUrl` set karein.</p>
              <Link
                href="https://www.linkedin.com/company/nicsi/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#0052CC]"
              >
                Open page
              </Link>
            </div>
          )}
        </article>

        <article className="min-w-[85%] snap-start rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:min-w-[70%]">
          <p className="mb-3 text-sm font-semibold text-[#0F172A]">Instagram</p>
          {instagramPostUrl ? (
            <blockquote className="instagram-media" data-instgrm-permalink={instagramPostUrl} data-instgrm-version="14" />
          ) : (
            <div className="flex h-[220px] flex-col items-center justify-center gap-3 text-center text-sm text-gray-600">
              <Image src={previewLogo} alt="Instagram preview" width={90} height={36} className="h-9 w-auto opacity-80" />
              <p>Instagram post image dikhane ke liye `instagramPostUrl` set karein.</p>
              <Link href="https://www.instagram.com/meity_nicsi/" target="_blank" rel="noreferrer" className="font-semibold text-[#0052CC]">
                Open profile
              </Link>
            </div>
          )}
        </article>
      </div>
    </>
  );
}
