import Link from "next/link";
import { getFooterContent } from "@/services/siteContent";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Twitter } from "lucide-react";
import { filterLinksForStaticAudit } from "@/lib/staticAudit";

export default async function Footer() {
  const footerContent = await getFooterContent();
  const lastUpdated = process.env.NEXT_PUBLIC_SITE_LAST_UPDATED ?? "March 5, 2026";
  const socialLinks = [
    { label: "X", href: "https://x.com/MeitY_NICSI", icon: Twitter },
    { label: "Facebook", href: "https://www.facebook.com/MeitY.NICSI", icon: Facebook },
    { label: "Instagram", href: "https://www.instagram.com/meity_nicsi/", icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/nicsi/", icon: Linkedin },
  ] as const;
  const policyLinks = [
    { label: "Sitemap", href: "/sitemap" },
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
  const quickLinksBase = filterLinksForStaticAudit(
    footerContent.quickLinks.filter((item) => item.href !== "/services"),
  );
  const quickLinksWithVendors = quickLinksBase.some((item) => item.href === "/empanelled-vendors")
    ? quickLinksBase
    : [...quickLinksBase, { label: "Empanelled Vendors", href: "/empanelled-vendors" }];
  const quickLinksWithFaq = quickLinksWithVendors.some((item) => item.href === "/faq")
    ? quickLinksWithVendors
    : [...quickLinksWithVendors, { label: "FAQ", href: "/faq" }];
  const usefulLinksOrdered = (() => {
    const list = [...quickLinksWithFaq];
    const vendorIndex = list.findIndex((item) => item.href === "/empanelled-vendors");
    const aboutIndex = list.findIndex((item) => item.href === "/about");

    if (vendorIndex === -1 || aboutIndex === -1) {
      return list;
    }

    const [vendorItem] = list.splice(vendorIndex, 1);
    const targetIndex = aboutIndex < list.length ? aboutIndex + 1 : list.length;
    list.splice(targetIndex, 0, vendorItem);
    return list;
  })();
  const resourcesAndMediaLinks = filterLinksForStaticAudit([
    { label: "NICSI SOP", href: "/nicsi-sop" },
    { label: "Download Form", href: "/forms" },
    { label: "Download Annual Report", href: "/reports" },
    { label: "Media Gallery", href: "/media-gallery" },
    { label: "Awards & Recognition", href: "/awards-recognition" },
    { label: "NICSI Events", href: "/events" },
    { label: "Press Releases", href: "/press-releases" },
    { label: "News & Updates", href: "/news-updates" },
  ] as const);

  return (
    <footer className="border-t border-blue-200 bg-gradient-to-r from-[#081A3D] via-[#0A2E73] to-[#081A3D] text-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-12 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-cyan-200/25 bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">About NICSI</p>
          <p className="mt-3 text-justify text-sm leading-6 text-blue-100">
            National Informatics Centre Services Inc. (NICSI), established in 1995, is a Section 8 company under the Companies Act, 2013 under National Informatics Centre (NIC), Ministry of Electronics and Information Technology (MeitY), Government of India.
          </p>
          
          <Link
            href="/about"
            className="mt-4 inline-flex rounded-md border border-cyan-200/40 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:bg-white/10 hover:text-white"
          >
            Know More
          </Link>
        </div>

        <div className="rounded-xl border border-cyan-200/25 bg-white/10 p-5 backdrop-blur-sm">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Useful Links</h4>
          {/* <p className="mt-3 text-left text-xs text-blue-200">Frequently accessed public pages.</p> */}
          <ul className="mt-3 space-y-2 text-sm">
            {usefulLinksOrdered.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <Link href={item.href} className={textLinkClass}>
                  {item.href === "/contact"
                    ? "Contact Us"
                    : item.href === "/career" || item.href === "/vacancy" || item.href === "/vacancies"
                      ? "Vacancies"
                      : item.href === "/forms"
                        ? "Download Form"
                        : item.href === "/reports"
                          ? "Download Annual Report"
                          : item.href === "/faq"
                            ? "FAQ"
                      : item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-cyan-200/25 bg-white/10 p-5 backdrop-blur-sm">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Resources &amp; Media</h4>
          {/* <p className="mt-3 text-left text-xs text-blue-200">Official resources and media pages. (Archive excluded)</p> */}
          <ul className="mt-3 space-y-2 text-sm">
            {resourcesAndMediaLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={textLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-cyan-200/25 bg-white/10 p-5 backdrop-blur-sm">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Contact Us</h4>
          <p className="mt-3 text-left text-sm text-blue-100">Contact: +91-11-22900525, +91-11-22900523</p>
          <p className="mt-1 text-left text-sm text-blue-100">
            <span className="inline-flex items-center gap-2">
              <MessageCircle size={14} className="text-green-300" />
              <span>WhatsApp:</span>
            </span>{" "}
            <Link href="https://wa.me/918527625551" target="_blank" rel="noreferrer" className="underline decoration-cyan-200/60 underline-offset-2">
              8527625551
            </Link>
          </p>
          <p className="mt-1 text-left text-sm text-blue-100">
            <span className="inline-flex items-center gap-2">
              <Mail size={14} className="text-cyan-200" />
              <span>Email:</span>
            </span>{" "}
            <Link href="mailto:info-nicsi@nic.in" className="underline decoration-cyan-200/60 underline-offset-2">
              info-nicsi@nic.in
            </Link>
            {", "}
            <Link href="mailto:mdnicsi@nic.in" className="underline decoration-cyan-200/60 underline-offset-2">
              mdnicsi@nic.in
            </Link>
          </p>
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
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200">Governance Baseline</p>
              <p className="mt-1 text-xs leading-5">
                Public pages are maintained with accessibility, security, policy, and document-governance controls aligned to government website quality expectations.
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
