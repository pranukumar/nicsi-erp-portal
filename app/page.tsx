import AccessibilityToolbar from "@/components/layout/AccessibilityToolbar";
import Hero from "@/components/layout/Hero";
import { getHomeTracks } from "@/services/homeContent";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CalendarDays,
  Cloud,
  Facebook,
  FileText,
  Globe2,
  Instagram,
  Linkedin,
  Megaphone,
  Server,
  Twitter,
  Youtube,
} from "lucide-react";

const iconMap = {
  building: Building2,
  globe: Globe2,
  cloud: Cloud,
  file: FileText,
} as const;

const latestTenders = [
  { title: "RFP for Managed Cloud Infrastructure Services", deadline: "March 18, 2026", status: "Open", href: "/tenders" },
  { title: "Security Operations Center Enhancement Bid", deadline: "March 25, 2026", status: "Open", href: "/tenders" },
  { title: "Data Centre Network Modernization", deadline: "April 2, 2026", status: "Pre-bid", href: "/tenders" },
  { title: "ERP Application Support Services", deadline: "April 8, 2026", status: "Open", href: "/tenders" },
  { title: "Document Digitization and Workflow Automation", deadline: "April 12, 2026", status: "Open", href: "/tenders" },
];

const quickServices = [
  { label: "RTI", href: "/rti" },
  { label: "Forms", href: "/forms" },
  { label: "Resources", href: "/tenders" },
  { label: "Contact Office", href: "/contact" },
  { label: "Vendor Login", href: "/login" },
  { label: "Empanelment", href: "/empanelled-vendors" },
];

type Minister = {
  name: string;
  role: string;
  image: string;
  imageSize?: "small" | "default";
  phone: string[];
  email: string;
};

const ministers: Minister[] = [
  {
    name: "Shri Ashwini Vaishnaw",
    role: "Hon'ble Minister of Railways, Information and Broadcasting, and Electronics and Information Technology",
    image: "/images/ministry/ashwini-vaishnaw.jpg",
    phone: ["+91-11-24369191 (Office)", "+91-11-24362626 (Office)", "+91-11-24366070 (Fax)"],
    email: "moeit[at]gov[dot]in",
  },
  {
    name: "Shri Jitin Prasada",
    role: "Hon'ble Minister of State in the Ministry of Commerce and Industry, and Electronics and Information Technology",
    image: "/images/ministry/jitin-prasada.png",
    imageSize: "small",
    phone: ["+91-11-24368757 (Office)", "+91-11-24368758 (Office)", "+91-11-24360958 (Fax)"],
    email: "mos-eit[at]gov[dot]in",
  },
];

const trustIndicators = [
  { title: "ISO-aligned Processes", subtitle: "Service governance and operational controls" },
  { title: "99.9% Platform Uptime", subtitle: "Business continuity focused delivery" },
  { title: "30+ Departments", subtitle: "Cross-organization service integration" },
  { title: "SLA-driven Operations", subtitle: "Measured response and resolution timelines" },
];

const mediaCards = [
  {
    title: "Press Update: Digital Procurement Modernization",
    description: "Program updates on process transparency, monitoring, and stakeholder participation.",
    href: "/press-releases",
  },
  {
    title: "Media Note: Expanded Service Delivery Capacity",
    description: "Highlights of infrastructure readiness and partner ecosystem strengthening.",
    href: "/services",
  },
  {
    title: "Event Brief: Department Enablement Workshop Series",
    description: "Capacity-building sessions for teams adopting workflow-led digital governance.",
    href: "/career",
  },
];

const whatsNew = [
  { month: "Jan 2026", text: "Updated participation guidelines published for selected procurement tracks." },
  { month: "Dec 2025", text: "New dashboard modules introduced for project monitoring visibility." },
  { month: "Nov 2025", text: "Empanelled vendor resource pack revised with compliance checklist." },
  { month: "Oct 2025", text: "Data centre operational enhancements announced for service continuity." },
];

const dataCentres = [
  {
    name: "NDC Bhubaneswar",
    description:
      "Established in 2018, the National Data Centre at Bhubaneswar has a built-up area of 40,000 sq. ft. and houses 271 racks. Designed and implemented in accordance with Tier-III standards for high availability and reliability.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Hyderabad",
    description:
      "Established in 2018, the National Data Centre at Hyderabad has a built-up area of 14,000 sq. ft. and accommodates 221 racks. The facility complies with Tier-III standards for high availability and operational reliability.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Delhi",
    description:
      "Established in 2011, the National Data Centre at Delhi has a built-up area of 30,000 sq. ft. and houses 475 racks. The facility is designed in compliance with Tier-III standards, ensuring high availability and operational resilience.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Pune",
    description:
      "Established in 2010, the National Data Centre at Pune has a built-up area of 10,000 sq. ft. and accommodates 175 racks. The facility adheres to Tier-III standards, ensuring reliable and continuous operations.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Guwahati",
    description:
      "Established in 2026, the National Data Centre at Guwahati has a built-up area of 43,000 sq. ft. and currently accommodates 200 racks. The facility is designed in accordance with Tier-III standards, ensuring high availability, redundancy and operational reliability.",
    services: [],
  },
];

const socialMedia = [
  { platform: "X", handle: "@GoI_MeitY", href: "https://x.com/GoI_MeitY", icon: Twitter },
  { platform: "Facebook", handle: "GoI.MeitY", href: "https://www.facebook.com/GoI.MeitY", icon: Facebook },
  { platform: "Instagram", handle: "@goi_meity", href: "https://www.instagram.com/goi_meity/", icon: Instagram },
  { platform: "YouTube", handle: "GoI MeitY", href: "https://www.youtube.com/@GoI_MeitY", icon: Youtube },
  { platform: "LinkedIn", handle: "Ministry of Electronics and IT", href: "https://www.linkedin.com/company/ministry-of-electronics-and-information-technology/", icon: Linkedin },
] as const;

const importantLinks = [
  { title: "Gov.in", href: "https://www.india.gov.in/", logo: "/logos/india_gov.in_logo.png" },
  { title: "MeitY", href: "https://www.meity.gov.in/", logo: "/logos/meity_logo.png" },
  { title: "Digital India", href: "https://www.digitalindia.gov.in/", logo: "/logos/digital-india.png" },
  { title: "NKN", href: "https://nkn.gov.in/", logo: "/logos/nkn_logo.png" },
  { title: "NIC", href: "https://www.nic.in/", logo: "/logos/NIC_Logo.png" },
  { title: "MyGov", href: "https://www.mygov.in/", logo: "/logos/mygov-logo.jpg" },
  { title: "Swachh Bharat", href: "https://swachhbharatmission.gov.in/", logo: "/logos/swachh-bharat.png" },
];

const scrollingImportantLinks = [...importantLinks, ...importantLinks];

export default async function Home() {
  const keyTracks = await getHomeTracks();

  return (
    <div className="bg-[var(--dsci-bg)] pb-8">
      <Hero />
      <AccessibilityToolbar />

      <section id="ministry" className="bg-white px-6 pb-14 pt-12 scroll-mt-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Ministry</p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">Ministry Leadership</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {ministers.map((minister) => (
              <article key={minister.name} className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm">
                <div className="flex gap-4">
                  <div
                    className={`shrink-0 overflow-hidden rounded-lg border border-blue-100 bg-white ${
                      minister.imageSize === "small" ? "h-32 w-24" : "h-36 w-28"
                    }`}
                  >
                    <Image src={minister.image} alt={minister.name} width={240} height={320} className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-[#0A2A72]">{minister.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-700">{minister.role}</p>
                    <div className="mt-3 text-sm">
                      <p className="font-semibold text-[#0F172A]">Telephone</p>
                      <ul className="mt-1 space-y-1">
                        {minister.phone.map((number) => (
                          <li key={number}>{number}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-3 text-sm">
                      <p className="font-semibold text-[#0F172A]">Email</p>
                      <p>{minister.email}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Citizen Quick Services</p>
              <h2 className="mt-1 text-xl font-bold text-[#0F172A] md:text-2xl">Access frequently used government service links</h2>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickServices.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-lg border border-gray-200 px-4 py-3 font-semibold text-[#003A8C] transition hover:bg-blue-50">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr]">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Latest Tenders</p>
            <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">Current procurement opportunities</h2>
            <div className="mt-6 space-y-3">
              {latestTenders.map((tender) => (
                <Link key={tender.title} href={tender.href} className="block rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40">
                  <p className="font-semibold text-[#0F172A]">{tender.title}</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Deadline: {tender.deadline}
                    <span className="ml-3 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">{tender.status}</span>
                  </p>
                </Link>
              ))}
            </div>
            <Link href="/tenders" className="mt-5 inline-block text-sm font-semibold text-[#003A8C]">View all tenders</Link>
          </article>

          <article className="rounded-2xl bg-[#0B1E43] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">Message</p>
            <h3 className="mt-2 text-2xl font-bold">Chairman / MD Desk</h3>
            <p className="mt-4 text-sm leading-7 text-blue-100">
              NICSI remains committed to transparent digital enablement for public institutions, supported by secure infrastructure and accountable execution.
            </p>
            <p className="mt-4 text-sm font-semibold">Official Message Section (Can be updated from CMS/DB)</p>
            <Link href="/about" className="mt-5 inline-block rounded-md border border-white/40 px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#0B1E43]">
              Read full message
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Core Sections</p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">Homepage service architecture</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {keyTracks.map((track) => {
              const Icon = iconMap[track.iconKey as keyof typeof iconMap] ?? Building2;
              return (
                <article key={track.title} className="rounded-xl border border-blue-100 p-6">
                  <span className="inline-flex rounded-lg bg-blue-50 p-2 text-[#003A8C]"><Icon size={20} /></span>
                  <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">{track.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{track.text}</p>
                  <Link href={track.href} className="mt-3 inline-block text-sm font-semibold text-[#003A8C]">View details</Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl bg-gradient-to-r from-[#003A8C] to-[#0052CC] p-6 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">Trust Indicators</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustIndicators.map((item) => (
                <div key={item.title} className="rounded-lg border border-white/20 bg-white/10 p-4">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs text-blue-100">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Document Centre</p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">Filter-ready documents section</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Tender", "Circular", "Notice", "Press Release", "Vendor Forms"].map((chip) => (
              <button key={chip} type="button" className="rounded-full border border-blue-200 px-4 py-1.5 text-sm font-medium text-[#003A8C] hover:bg-blue-50">
                {chip}
              </button>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-gray-200 p-5 text-sm text-gray-700">
            Select a filter to list relevant documents. This block can be connected to DB-backed document feeds.
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">
              <Megaphone size={15} className="mr-1 inline-block" />
              Media & Press
            </p>
            <div className="mt-5 space-y-4">
              {mediaCards.map((card) => (
                <div key={card.title} className="rounded-lg border border-gray-200 p-4">
                  <h3 className="font-semibold text-[#0F172A]">{card.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{card.description}</p>
                  <Link href={card.href} className="mt-2 inline-block text-sm font-semibold text-[#003A8C]">Read more</Link>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">
              <CalendarDays size={15} className="mr-1 inline-block" />
              What&apos;s New Timeline
            </p>
            <ol className="mt-5 space-y-4">
              {whatsNew.map((item) => (
                <li key={item.month + item.text} className="rounded-lg border border-gray-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">{item.month}</p>
                  <p className="mt-1 text-sm text-gray-700">{item.text}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Data Centre Services</p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">National Data Centres (NDCs) – NICSI</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            NICSI operates multiple National Data Centres (NDCs) across India to provide secure, scalable and highly available hosting,
            colocation and cloud services to Government and public sector organizations. All facilities are designed in compliance with
            Tier-III standards, ensuring redundancy, high uptime and operational resilience.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {dataCentres.map((dc) => (
              <article key={dc.name} className="rounded-xl border border-gray-200 p-6">
                <span className="inline-flex rounded-lg bg-blue-50 p-2 text-[#003A8C]"><Server size={18} /></span>
                <h3 className="mt-3 text-lg font-semibold text-[#0F172A]">{dc.name}</h3>
                <p className="mt-1 text-sm leading-6 text-gray-700">{dc.description}</p>
                {dc.services.length > 0 ? (
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Services</p>
                    <ul className="mt-1 space-y-1 text-sm text-gray-700">
                      {dc.services.map((service) => (
                        <li key={service} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0052CC]" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Social Media</p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">Connect with official channels</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {socialMedia.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.platform}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex rounded-lg bg-blue-50 p-2 text-[#003A8C]">
                    <Icon size={18} />
                  </span>
                  <p className="mt-3 font-semibold text-[#0F172A]">{item.platform}</p>
                  <p className="mt-1 text-sm text-gray-600">{item.handle}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Other Important Links</p>
          <div className="important-links-marquee mt-5 overflow-hidden rounded-2xl border border-gray-200 bg-[#EEF2F9] p-4">
            <div className="important-links-track flex w-max gap-4">
              {scrollingImportantLinks.map((item, index) => (
              <Link
                key={`${item.title}-${index}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-28 w-56 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Image src={item.logo} alt={item.title} width={180} height={72} className="h-16 w-auto object-contain" />
              </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


