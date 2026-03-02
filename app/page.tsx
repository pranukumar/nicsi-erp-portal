import Hero from "@/components/layout/Hero";
import NicsiMotionBackdrop from "@/components/layout/NicsiMotionBackdrop";
import { getHomeTracks } from "@/services/homeContent";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CalendarDays,
  Cloud,
  FileText,
  Globe2,
  LayoutGrid,
  MapPin,
  Megaphone,
  Server,
  ShieldCheck,
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

const aboutNicsiMinistryBlock = {
  title: "About NICSI",
  description:
    "National Informatics Centre Services Inc. (NICSI), under the Ministry of Electronics and Information Technology (MeitY), supports ministries and departments in delivering secure, scalable, and accountable ICT programs.",
  points: [
    "Technology and implementation support partner for government institutions.",
    "ICT procurement, project execution, and managed service enablement.",
    "Secure cloud, data centre, and digital infrastructure support.",
    "Advisory and operational support for emerging technology adoption.",
  ],
};

const trustIndicators = [
  { title: "ISO-aligned Processes", subtitle: "Service governance and operational controls" },
  { title: "99.9% Platform Uptime", subtitle: "Business continuity focused delivery" },
  { title: "Multiple Ministries & Departments", subtitle: "Cross-organization service integration" },
  { title: "SLA-driven Operations", subtitle: "Measured response and resolution timelines" },
];

const nicsiShowcase = [
  {
    value: "Pan-India Reach",
    title: "Government delivery backbone",
    detail: "Supporting ministries, departments, and public institutions with secure and scalable digital execution.",
    href: "/national-projects",
  },
  {
    value: "Cloud + Data Centre",
    title: "Mission-critical infrastructure",
    detail: "Reliable hosting, platform services, and operational resilience aligned for public-sector workloads.",
    href: "/nicsi-cloud",
  },
  {
    value: "Procurement + PMU",
    title: "Execution with accountability",
    detail: "Transparent procurement and lifecycle management from planning to implementation and support.",
    href: "/active-tenders",
  },
  {
    value: "Citizen-first Focus",
    title: "Outcome-driven digital programs",
    detail: "Technology interventions designed for service quality, compliance, and measurable governance outcomes.",
    href: "/about",
  },
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
    href: "/vacancies",
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
    location: "Bhubaneswar",
    establishedYear: 2018,
    areaSqFt: 40000,
    racks: 271,
    tier: "Tier-III",
    description: "Designed for high availability and reliable delivery of government digital workloads.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Hyderabad",
    location: "Hyderabad",
    establishedYear: 2018,
    areaSqFt: 14000,
    racks: 221,
    tier: "Tier-III",
    description: "Supports secure hosting with operational reliability aligned to national service delivery needs.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Delhi",
    location: "Delhi",
    establishedYear: 2011,
    areaSqFt: 30000,
    racks: 475,
    tier: "Tier-III",
    description: "Core hub for resilient infrastructure and mission-critical government application hosting.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Pune",
    location: "Pune",
    establishedYear: 2010,
    areaSqFt: 10000,
    racks: 175,
    tier: "Tier-III",
    description: "Built for continuous operations with redundancy and dependable infrastructure services.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Guwahati",
    location: "Guwahati",
    establishedYear: 2026,
    areaSqFt: 43000,
    racks: 200,
    tier: "Tier-III",
    description: "Expands regional resilience and strengthens availability for North-East focused digital services.",
    services: [],
  },
];

export default async function Home() {
  const keyTracks = await getHomeTracks();

  return (
    <div className="relative overflow-hidden bg-[var(--nicsi-bg)] pb-8">
      <NicsiMotionBackdrop />
      <div className="nicsi-page-aura pointer-events-none absolute inset-0 -z-0">
        <div className="nicsi-aura-orb nicsi-aura-orb-left" />
        <div className="nicsi-aura-orb nicsi-aura-orb-right" />
      </div>
      <Hero />

      <section id="ministry" className="nicsi-reveal bg-white px-6 pb-14 pt-12 scroll-mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="nicsi-stagger rounded-2xl border border-blue-100 bg-gradient-to-b from-[#F7FAFF] via-white to-white p-4 shadow-sm md:p-6">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-5">
              {ministers.map((minister) => (
                <article
                  key={minister.name}
                  className="nicsi-hover-card rounded-xl border border-[#D9E6FF] bg-white p-0 shadow-sm transition hover:border-[#BFD4FF]"
                >
                  <div className="grid grid-cols-[120px_1fr] gap-0 sm:grid-cols-[150px_1fr]">
                    <div className="h-36 overflow-hidden rounded-l-xl border-r border-[#D9E6FF] bg-[#EDF3FF] sm:h-44">
                      <Image
                        src={minister.image}
                        alt={minister.name}
                        width={440}
                        height={360}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-3 sm:p-5">
                      <h3 className="text-lg font-extrabold leading-tight tracking-tight text-[#0F2F78] sm:text-2xl">
                        {minister.name}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-6 text-gray-700 sm:text-base sm:leading-7">
                        {minister.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <article className="rounded-xl border border-[#D9E6FF] bg-[#FCFDFF] p-5 shadow-sm sm:p-6">
              <h3 className="text-2xl font-semibold text-[#133987] sm:text-3xl">{aboutNicsiMinistryBlock.title}</h3>
              <div className="mt-3 h-0.5 w-full bg-[#BFD4FF]" />
              <p className="mt-5 text-sm leading-6 text-gray-800 sm:text-base sm:leading-7">{aboutNicsiMinistryBlock.description}</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-800 sm:text-base sm:leading-7">
                {aboutNicsiMinistryBlock.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF] text-[11px] font-bold text-[#1B3F8E]">
                      •
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
               
            </article>
          </div>
          </div>
        </div>
      </section>

      <section className="nicsi-reveal px-6 pt-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Citizen Quick Services</p>
              <h2 className="mt-1 text-xl font-bold text-[#0F172A] md:text-2xl">Access frequently used government service links</h2>
            </div>
          </div>
          <div className="nicsi-stagger mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickServices.map((item) => (
              <Link key={item.label} href={item.href} className="nicsi-hover-card rounded-lg border border-gray-200 px-4 py-3 font-semibold text-[#003A8C] transition hover:bg-blue-50">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#CFE2FF] bg-gradient-to-br from-[#0A2E73] via-[#0D46AD] to-[#0A2E73] p-6 text-white shadow-[0_20px_40px_rgba(10,46,115,0.25)] md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">NICSI At A Glance</p>
              <h2 className="mt-2 text-3xl font-bold">Built for public-sector digital delivery</h2>
            </div>
            <Link href="/about" className="rounded-md border border-white/40 px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#0A2E73]">
              Explore NICSI
            </Link>
          </div>
          <div className="nicsi-stagger mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {nicsiShowcase.map((item) => (
              <article key={item.title} className="nicsi-hover-card rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-[2px]">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">{item.value}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100">{item.detail}</p>
                <Link href={item.href} className="mt-3 inline-block text-sm font-semibold text-cyan-100 hover:text-white">
                  View details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nicsi-reveal px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr]">
          <article className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Latest Tenders</p>
            <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">Current procurement opportunities</h2>
            <div className="nicsi-stagger mt-6 space-y-3">
              {latestTenders.map((tender) => (
                <Link key={tender.title} href={tender.href} className="nicsi-hover-card block rounded-xl border border-gray-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40">
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

          <div className="nicsi-stagger space-y-4">
            <article className="nicsi-hover-card rounded-2xl bg-[#0B1E43] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">Message</p>
              <h3 className="mt-2 text-2xl font-bold">Chairperson Desk</h3>
              <p className="mt-4 text-sm leading-7 text-blue-100">
                NICSI will continue to strengthen trusted digital public infrastructure through transparent governance, policy-aligned execution, and measurable service outcomes for ministries and departments.
              </p>
              <p className="mt-4 text-sm font-semibold">Official communication from NICSI leadership.</p>
              <Link href="/about" className="mt-5 inline-block rounded-md border border-white/40 px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#0B1E43]">
                Read full message
              </Link>
            </article>

            <article className="nicsi-hover-card rounded-2xl bg-[#0B1E43] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">Message</p>
              <h3 className="mt-2 text-2xl font-bold">MD Desk</h3>
              <p className="mt-4 text-sm leading-7 text-blue-100">
                NICSI is focused on delivery excellence across cloud, data centre, procurement, and managed ICT services, ensuring secure, scalable, and citizen-centric implementation support for government programs.
              </p>
              <p className="mt-4 text-sm font-semibold">Official communication from NICSI leadership.</p>
              <Link href="/about" className="mt-5 inline-block rounded-md border border-white/40 px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#0B1E43]">
                Read full message
              </Link>
            </article>
          </div>
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
            Select a filter to view relevant public documents and notices.
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
          <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">National Data Centres (NDCs) - NICSI</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            NICSI operates multiple National Data Centres (NDCs) across India to provide secure, scalable and highly available hosting,
            colocation and cloud services to Government and public sector organizations. All facilities are designed in compliance with
            Tier-III standards, ensuring redundancy, high uptime and operational resilience.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Locations</p>
              <p className="mt-1 text-2xl font-bold text-[#0F172A]">{dataCentres.length}</p>
            </div>
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Total Racks</p>
              <p className="mt-1 text-2xl font-bold text-[#0F172A]">
                {dataCentres.reduce((sum, dc) => sum + dc.racks, 0).toLocaleString("en-IN")}
              </p>
            </div>
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Built-up Area</p>
              <p className="mt-1 text-2xl font-bold text-[#0F172A]">
                {dataCentres.reduce((sum, dc) => sum + dc.areaSqFt, 0).toLocaleString("en-IN")} sq. ft.
              </p>
            </div>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {dataCentres.map((dc) => (
              <article key={dc.name} className="rounded-xl border border-gray-200 p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-[#003A8C]">
                    <Server size={16} />
                    {dc.name}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1 text-xs font-semibold text-gray-700">
                    <ShieldCheck size={13} />
                    {dc.tier}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-700">{dc.description}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#0F172A]">
                      <MapPin size={14} />
                      Location:
                    </span>{" "}
                    {dc.location}
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#0F172A]">
                      <LayoutGrid size={14} />
                      Racks:
                    </span>{" "}
                    {dc.racks.toLocaleString("en-IN")}
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
                    <span className="font-semibold text-[#0F172A]">Established:</span> {dc.establishedYear}
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
                    <span className="font-semibold text-[#0F172A]">Built-up Area:</span> {dc.areaSqFt.toLocaleString("en-IN")} sq. ft.
                  </div>
                </div>
                {dc.services.length > 0 ? (
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Services</p>
                    <ul className="mt-2 flex flex-wrap gap-2 text-sm text-gray-700">
                      {dc.services.map((service) => (
                        <li key={service} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#003A8C]">
                          {service}
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

    </div>
  );
}
