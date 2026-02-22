import Link from "next/link";
import { getFooterContent } from "@/services/siteContent";

export default async function Footer() {
  const footerContent = await getFooterContent();

  return (
    <footer className="mt-16 border-t border-blue-100 bg-[#0B1E43] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Government Platform</p>
          <h3 className="mt-3 text-2xl font-bold">NICSI ERP Portal</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
            A unified platform for secure digital workflows, procurement lifecycle visibility, and
            institutional service delivery support.
          </p>
          <p className="mt-5 text-sm text-blue-200">
            National Informatics Centre Services Inc. | Government of India
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-200">Quick Links</h4>
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
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-blue-200 md:flex-row">
          <p>(c) 2026 NICSI ERP Portal. All rights reserved.</p>
          <p>Last Updated: February 21, 2026</p>
        </div>
      </div>
    </footer>
  );
}
