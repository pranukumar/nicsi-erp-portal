import Link from "next/link";
import { getFooterContent } from "@/services/siteContent";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default async function Footer() {
  const footerContent = await getFooterContent();
  const lastUpdated = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date());
  const socialLinks = [
    { label: "X", href: "https://x.com/GoI_MeitY", icon: Twitter },
    { label: "Facebook", href: "https://www.facebook.com/GoI.MeitY", icon: Facebook },
    { label: "Instagram", href: "https://www.instagram.com/goi_meity/", icon: Instagram },
    { label: "YouTube", href: "https://www.youtube.com/@GoI_MeitY", icon: Youtube },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/ministry-of-electronics-and-information-technology/", icon: Linkedin },
  ] as const;

  return (
    <footer className="mt-16 border-t border-blue-100 bg-[#0B1E43] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Government Platform</p>
          <p className="mt-4 text-sm text-blue-200">
            National Informatics Centre Services Inc. | Government of India
          </p>
          <p className="mt-2 text-sm text-blue-100">Developed by NICSI and Hosted by NIC</p>
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
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-blue-50 transition hover:border-white hover:text-white"
                >
                  <Icon size={15} />
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200">Useful Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {footerContent.quickLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-blue-50 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {footerContent.resourceLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-blue-50 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border border-white/20 bg-white/5 p-3 text-xs text-blue-100">
            Support: info-nicsi@nic.in
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-blue-200">
          <p className="text-center">
            Content owned and maintained by National Informatics Centre Services Inc. (NICSI), Ministry of Electronics & IT (MeitY), Government of India.
          </p>
          <p className="mt-1 text-center">
            Website designed, developed and hosted by NICSI in collaboration with National Informatics Centre (NIC), Ministry of Electronics & IT (MeitY), Government of India.
          </p>
          <p className="mt-1 text-center">Last Updated: {lastUpdated}</p>
        </div>
      </div>
    </footer>
  );
}
