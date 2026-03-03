import Hero from "@/components/layout/Hero";
import DocumentCentre from "@/components/layout/DocumentCentre";
import NicsiMotionBackdrop from "@/components/layout/NicsiMotionBackdrop";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CalendarDays,
  Cloud,
  FileText,
  Globe2,
  MapPin,
  Megaphone,
  Server,
} from "lucide-react";

const iconMap = {
  building: Building2,
  globe: Globe2,
  cloud: Cloud,
  file: FileText,
} as const;

const projectSubmenuLinks = [
  {
    title: "National Projects",
    description: "Projects delivered across India for public institutions.",
    href: "/national-projects",
  },
  {
    title: "State Projects",
    description: "State-specific e-Governance implementation projects.",
    href: "/state-projects",
  },
  {
    title: "MeitY Projects",
    description: "Projects aligned to MeitY programs and initiatives.",
    href: "/meity-projects",
  },
  {
    title: "NICSI Products",
    description: "NICSI product initiatives and related delivery segments.",
    href: "/pbd-projects",
  },
  {
    title: "International Projects",
    description: "Overseas projects and international engagement initiatives.",
    href: "/international-projects",
  },
];

const quickServices = [
  { label: "RTI", href: "/rti" },
  { label: "Download Form", href: "/forms" },
  { label: "NICSI GeM Bids", href: "/nicsi-gem-bids" },
  { label: "Contact Office", href: "/contact" },
  { label: "Vendor Search", href: "/vendor-search" },
  { label: "Internship", href: "/internship" },
];

type Minister = {
  name: string;
  roles: string[];
  image: string;
  imageSize?: "small" | "default";
  phone: string[];
  email: string;
};

const ministers: Minister[] = [
  {
    name: "Shri Ashwini Vaishnaw",
    roles: [
      "Hon'ble Minister of Railways",
      "Hon'ble Minister of Information and Broadcasting",
      "Hon'ble Minister of Electronics and Information Technology",
    ],
    image: "/images/ministry/ashwini-vaishnaw.jpg",
    phone: ["+91-11-24369191 (Office)", "+91-11-24362626 (Office)", "+91-11-24366070 (Fax)"],
    email: "moeit[at]gov[dot]in",
  },
  {
    name: "Shri Jitin Prasada",
    roles: [
      "Hon'ble Minister of State for Commerce and Industry",
      "Hon'ble Minister of State for Electronics and Information Technology",
    ],
    image: "/images/ministry/jitin-prasada.png",
    imageSize: "small",
    phone: ["+91-11-24368757 (Office)", "+91-11-24368758 (Office)", "+91-11-24360958 (Fax)"],
    email: "mos-eit[at]gov[dot]in",
  },
];

const chairpersonDetail = {
  role: "Chairperson, NICSI",
  name: "Shri Abhishek Singh",
  designation: "Additional Secretary, MeitY",
  phone: "011-24369222",
  email: "as[at]meity[dot]gov[dot]in",
  image: "/images/dg_sir.jpg",
};

const aboutNicsiMinistryBlock = {
  title: "About NICSI",
  description:
    "National Informatics Centre Services Inc. (NICSI), under the Ministry of Electronics and Information Technology (MeitY), enables ministries and departments to implement secure, scalable, and transparent digital governance initiatives.",
  points: [
    "Trusted implementation partner for ministries, departments, and public institutions.",
    "End-to-end ICT support across procurement, project delivery, and managed services.",
    "Secure cloud, data centre, and digital infrastructure operations for critical workloads.",
  ],
};

const trustIndicators = [
  { title: "ISO-aligned Processes", subtitle: "Service governance and operational controls" },
  { title: "Cyber Resilience Readiness", subtitle: "Continuous monitoring, hardening, and incident response preparedness" },
  { title: "Multiple Ministries & Departments", subtitle: "Cross-organization service integration" },
  { title: "SLA-driven Operations", subtitle: "Measured response and resolution timelines" },
];

type ShowcaseCard = {
  value: string;
  title: string;
  detail: string;
  href: string;
};

const nicsiShowcase: ShowcaseCard[] = [
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
    title: "Execution with assurance",
    detail: "Transparent procurement and lifecycle management from planning to implementation and support.",
    href: "/nicsi-gem-bids",
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

type ValuePillar = {
  title: string;
  text: string;
  href: string;
  cta: string;
  iconKey: keyof typeof iconMap;
};

const coreValuePillars: ValuePillar[] = [
  {
    title: "Strategic ICT Advisory",
    text: "Policy-aligned advisory and planning support for ministries and departments to launch high-impact digital programs.",
    href: "/about",
    cta: "Explore Profile",
    iconKey: "building",
  },
  {
    title: "Project Delivery & PMU",
    text: "End-to-end execution support from planning and procurement to implementation, monitoring, and outcomes.",
    href: "/national-projects",
    cta: "Explore Projects",
    iconKey: "globe",
  },
  {
    title: "Secure Cloud & Data Centre",
    text: "Resilient, scalable cloud and data centre infrastructure for mission-critical government workloads.",
    href: "/nicsi-cloud",
    cta: "Explore Cloud Services",
    iconKey: "cloud",
  },
  {
    title: "Transparent Procurement",
    text: "Structured procurement workflows, GeM bid enablement, and auditable lifecycle management.",
    href: "/nicsi-gem-bids",
    cta: "View NICSI GeM Bids",
    iconKey: "file",
  },
];

const dataCentres = [
  {
    name: "NDC Bhubaneswar",
    location: "Bhubaneswar",
    establishedYear: 2018,
    areaSqFt: 40000,
    description: "Designed for high availability and reliable delivery of government digital workloads.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Hyderabad",
    location: "Hyderabad",
    establishedYear: 2018,
    areaSqFt: 14000,
    description: "Supports secure hosting with operational reliability aligned to national service delivery needs.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Delhi",
    location: "Delhi",
    establishedYear: 2011,
    areaSqFt: 30000,
    description: "Core hub for resilient infrastructure and mission-critical government application hosting.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Pune",
    location: "Pune",
    establishedYear: 2010,
    areaSqFt: 10000,
    description: "Built for continuous operations with redundancy and dependable infrastructure services.",
    services: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"],
  },
  {
    name: "NDC Guwahati",
    location: "Guwahati",
    establishedYear: 2026,
    areaSqFt: 43000,
    description: "Expands regional resilience and strengthens availability for North-East focused digital services.",
    services: [],
  },
];

export default function Home() {
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
            <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-3">
              {ministers.map((minister) => (
                <article
                  key={minister.name}
                  className="nicsi-hover-card rounded-lg border border-[#D9E6FF] bg-white p-0 shadow-sm transition hover:border-[#BFD4FF]"
                >
                  <div className="grid grid-cols-[96px_1fr] gap-0 sm:grid-cols-[122px_1fr]">
                    <div className="h-28 overflow-hidden rounded-l-lg border-r border-[#D9E6FF] bg-[#EDF3FF] sm:h-32">
                      <Image
                        src={minister.image}
                        alt={minister.name}
                        width={440}
                        height={360}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-3 sm:p-4">
                      <h3 className="text-base font-extrabold leading-tight tracking-tight text-[#0F2F78] sm:text-xl">
                        {minister.name}
                      </h3>
                      <ul className="mt-2 space-y-1 text-xs font-medium leading-5 text-gray-700 sm:text-sm sm:leading-6">
                        {minister.roles.map((role) => (
                          <li key={role}>{role}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
              <article className="rounded-lg border border-[#D9E6FF] bg-white p-0 shadow-sm">
                <div className="grid grid-cols-[96px_1fr] gap-0 sm:grid-cols-[122px_1fr]">
                  <div className="h-28 overflow-hidden rounded-l-lg border-r border-[#D9E6FF] bg-[#EDF3FF] sm:h-32">
                    <Image
                      src={chairpersonDetail.image}
                      alt={chairpersonDetail.name}
                      width={440}
                      height={360}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-3 sm:p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1B3F8E]">{chairpersonDetail.role}</p>
                    <h3 className="mt-1 text-base font-extrabold leading-tight tracking-tight text-[#0F2F78] sm:text-xl">
                      {chairpersonDetail.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium leading-5 text-gray-700 sm:text-sm sm:leading-6">{chairpersonDetail.designation}</p>
                    <p className="mt-1 text-[11px] leading-5 text-[#38517B] sm:text-xs">
                      Phone: {chairpersonDetail.phone} | Email: {chairpersonDetail.email}
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <article className="rounded-xl border border-[#D9E6FF] bg-[#FCFDFF] p-5 shadow-sm sm:p-6">
              <h3 className="text-2xl font-semibold text-[#133987] sm:text-3xl">{aboutNicsiMinistryBlock.title}</h3>
              <div className="mt-3 h-0.5 w-full bg-[#BFD4FF]" />
              <p className="mt-5 text-sm leading-6 text-gray-800 sm:text-base sm:leading-7">{aboutNicsiMinistryBlock.description}</p>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-gray-800 marker:text-[#1B3F8E] sm:text-base sm:leading-7">
                {aboutNicsiMinistryBlock.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center rounded-md border border-[#BFD4FF] bg-[#F1F6FF] px-4 py-2 text-sm font-semibold text-[#0F4BB8] transition hover:border-[#8DB4FF] hover:bg-[#E6F0FF]"
              >
                About More...
              </Link>
            </article>
          </div>
          </div>
        </div>
      </section>

      <section className="nicsi-reveal px-6 pt-8">
        <div className="mx-auto max-w-6xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">NICSI Quick Services</p>
              <h2 className="mt-1 text-xl font-bold text-[#0F172A] md:text-2xl">Access frequently used NICSI service links</h2>
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
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center rounded-md border border-cyan-200/40 bg-white/10 px-3 py-1.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100 hover:bg-white/20 hover:text-white"
                >
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
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">Project Showcase</p>
            <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">Project Portfolio</h2>
            <div className="nicsi-stagger mt-6 grid gap-3 sm:grid-cols-2">
              {projectSubmenuLinks.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  className="nicsi-hover-card block rounded-xl border border-gray-200 bg-[#FCFDFF] p-4 transition hover:border-blue-300 hover:bg-blue-50/40"
                >
                  <p className="font-semibold text-[#0F172A]">{project.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{project.description}</p>
                </Link>
              ))}
            </div>
          </article>

          <div className="nicsi-stagger">
            <article className="nicsi-hover-card rounded-2xl bg-[#0B1E43] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-200">Message</p>
              <h3 className="mt-2 text-2xl font-bold">Managing Director Desk</h3>
              <p className="mt-2 text-sm font-semibold text-cyan-100">
                Under the visionary guidance of the Chairperson, NICSI is shaping the next era of secure, citizen-first digital governance.
              </p>
              <p className="mt-4 text-sm leading-7 text-blue-100">
                NICSI is delivering measurable impact through secure cloud and data centre operations, transparent procurement, and faster project execution support for ministries and departments across India.
              </p>
              <p className="mt-3 text-sm leading-7 text-blue-100">
                Going forward, NICSI is focused on AI-enabled governance platforms, stronger cyber resilience, and outcome-driven digital programs to build faster, safer, and citizen-first public services.
              </p>
              <p className="mt-4 text-sm font-semibold">Strategic direction from NICSI leadership.</p>
              <Link href="/about" className="mt-5 inline-block rounded-md border border-white/40 px-4 py-2 text-sm font-semibold hover:bg-white hover:text-[#0B1E43]">
                Read full message
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0052CC]">NICSI Value Pillars</p>
          <h2 className="mt-2 text-3xl font-bold text-[#0F172A]">How NICSI Enables Government Digital Delivery</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {coreValuePillars.map((pillar) => {
              const Icon = iconMap[pillar.iconKey] ?? Building2;
              return (
                <article key={pillar.title} className="rounded-xl border border-blue-100 p-6">
                  <span className="inline-flex rounded-lg bg-blue-50 p-2 text-[#003A8C]"><Icon size={20} /></span>
                  <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{pillar.text}</p>
                  <Link href={pillar.href} className="mt-3 inline-block text-sm font-semibold text-[#003A8C]">{pillar.cta}</Link>
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

      <DocumentCentre />

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
            colocation and cloud services to Government and public sector organizations, ensuring redundancy, high uptime and operational resilience.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Locations</p>
              <p className="mt-1 text-2xl font-bold text-[#0F172A]">{dataCentres.length}</p>
            </div>
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Built-up Area</p>
              <p className="mt-1 text-2xl font-bold text-[#0F172A]">{dataCentres.reduce((sum, dc) => sum + dc.areaSqFt, 0).toLocaleString("en-IN")} sq. ft.</p>
            </div>
            <div className="rounded-xl border border-blue-100 bg-[#F7FAFF] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052CC]">Services</p>
              <p className="mt-1 text-sm font-semibold text-[#0F172A]">IaaS and PaaS</p>
            </div>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dataCentres.map((dc) => (
              <article key={dc.name} className="rounded-xl border border-gray-200 bg-[#FCFDFF] p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-[#003A8C]">
                    <Server size={16} />
                    {dc.name}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-700">{dc.description}</p>
                <div className="mt-4 grid gap-2">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#0F172A]">
                      <MapPin size={14} />
                      Location:
                    </span>{" "}
                    {dc.location}
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

