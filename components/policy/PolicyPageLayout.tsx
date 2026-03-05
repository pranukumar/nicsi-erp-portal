import type { ReactNode } from "react";
import Link from "next/link";
import PageTitle from "@/components/layout/PageTitle";

const policyNavLinks = [
  { label: "Sitemap", href: "/sitemap" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Copyright Policy", href: "/copyright-policy" },
  { label: "Help", href: "/help" },
  { label: "Website Policy", href: "/website-policy" },
  { label: "Hyperlinking Policy", href: "/hyperlinking-policy" },
  { label: "Accessibility Statement", href: "/accessibility-statement" },
] as const;

export default function PolicyPageLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="pb-12">
      <PageTitle title={title} />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF4FF] p-6 shadow-[0_14px_30px_rgba(15,75,184,0.08)] md:p-8">
          <div className="pointer-events-none absolute -left-14 top-16 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-cyan-100/50 blur-3xl" />

          <div className="relative">
            <div className="rounded-2xl border border-[#D7E5FA] bg-white/90 p-4 shadow-sm backdrop-blur-sm md:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0F4BB8]">Policy Navigation</p>
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {policyNavLinks.map((item) => {
                  const isActive = item.label === title;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                        isActive
                          ? "border-[#0F4BB8] bg-[#0F4BB8] text-white"
                          : "border-blue-200 bg-white text-[#0F4BB8] hover:bg-blue-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
              <div className="[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#0F172A] [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#0F172A] [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-[#334155] [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:text-sm [&_ul]:leading-7 [&_ul]:text-[#334155] [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-3 [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-[#0F4BB8]">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
