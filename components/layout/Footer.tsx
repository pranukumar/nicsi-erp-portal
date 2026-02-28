import Link from "next/link";
import { getFooterContent } from "@/services/siteContent";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default async function Footer() {
  const footerContent = await getFooterContent();
  const lastUpdated = process.env.NEXT_PUBLIC_SITE_LAST_UPDATED ?? "February 28, 2026";
  const socialLinks = [
    { label: "X", href: "https://x.com/MeitY_NICSI", icon: Twitter },
    { label: "Facebook", href: "https://www.facebook.com/MeitY.NICSI", icon: Facebook },
    { label: "Instagram", href: "https://www.instagram.com/meity_nicsi/", icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/nicsi/", icon: Linkedin },
  ] as const;
  const policyLinks = [
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Copyright Policy", href: "/copyright-policy" },
    { label: "Help", href: "/help" },
    { label: "Website Policy", href: "/website-policy" },
    { label: "Hyperlinking Policy", href: "/hyperlinking-policy" },
    { label: "Accessibility Statement", href: "/accessibility-statement" },
  ] as const;
  const textLinkClass =
    "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-blue-50 transition-all duration-200 hover:translate-x-1 hover:bg-white/12 hover:text-white focus-visible:bg-white/12";

  return (
    <footer className="border-t border-blue-200 bg-gradient-to-r from-[#081A3D] via-[#0A2E73] to-[#081A3D] text-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-12 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-cyan-200/25 bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">About NICSI</p>
          <p className="mt-3 text-left text-sm leading-6 text-blue-100">
            National Informatics Centre Services Inc. (NICSI) is a Government enterprise working with ministries and departments for ICT procurement and project implementation support.
          </p>
          <p className="mt-3 text-left text-xs text-blue-200">Website and service information is published for public reference and official communication.</p>
          <Link
            href="/about"
            className="mt-4 inline-flex rounded-md border border-cyan-200/40 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:bg-white/10 hover:text-white"
          >
            Know More
          </Link>
        </div>

        <div className="rounded-xl border border-cyan-200/25 bg-white/10 p-5 backdrop-blur-sm">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Useful Links</h4>
          <p className="mt-3 text-left text-xs text-blue-200">Frequently accessed public pages.</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerContent.quickLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={textLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-cyan-200/25 bg-white/10 p-5 backdrop-blur-sm">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Resources</h4>
          <p className="mt-3 text-left text-xs text-blue-200">Official documents and reference materials.</p>
          <ul className="mt-3 space-y-2 text-sm">
            {footerContent.resourceLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={textLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-cyan-200/25 bg-white/10 p-5 backdrop-blur-sm">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Contact & Connect</h4>
          <p className="mt-3 text-left text-sm text-blue-100">Support Email: info-nicsi@nic.in</p>
          <p className="mt-1 text-left text-xs text-blue-200">For official updates, use verified social channels listed below.</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/40 text-blue-50 transition hover:border-cyan-200 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={15} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-2 px-6 py-4 text-xs text-cyan-100">
          {policyLinks.map((item) => (
            <Link key={item.label} href={item.href} className={textLinkClass}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-6 py-5 text-blue-200">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-cyan-200/25 bg-white/5 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200">Ownership</p>
              <p className="mt-1 text-xs leading-5">
                Content owned and maintained by NICSI, Ministry of Electronics &amp; IT (MeitY), Government of India.
              </p>
            </div>
            <div className="rounded-lg border border-cyan-200/25 bg-white/5 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200">Development & Hosting</p>
              <p className="mt-1 text-xs leading-5">
                Website designed, developed and hosted by NICSI in collaboration with National Informatics Centre (NIC).
              </p>
            </div>
            <div className="rounded-lg border border-cyan-200/25 bg-white/5 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200">Last Updated</p>
              <p className="mt-1 text-xs leading-5">{lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
