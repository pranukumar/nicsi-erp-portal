import Hero from "@/components/layout/Hero";
import NicsiMotionBackdrop from "@/components/layout/NicsiMotionBackdrop";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Cloud,
  Code2,
  Database,
  Facebook,
  GraduationCap,
  Globe2,
  Headset,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  MoreHorizontal,
  ScanSearch,
  Share2,
  Server,
  ShieldCheck,
  Smartphone,
  Twitter,
  Users,
  Video,
  Wrench,
} from "lucide-react";
import { filterLinksForStaticAudit, isHiddenInStaticAudit, withSiteBasePath } from "@/lib/staticAudit";

const projectPortfolioIconMap = {
  national: Globe2,
  international: Globe2,
  state: MapPin,
  meity: Server,
  products: Box,
} as const;

const projectSubmenuLinks = [
  {
    title: "National Projects",
    description: "Driving large-scale digital transformation across India.",
    href: "/national-projects",
    iconKey: "national" as const,
    iconColor: "text-[#1B57B4]",
    iconBg: "bg-[#E7EEF9]",
  },
  {
    title: "International Projects",
    description: "Delivering trusted ICT solutions to global partners.",
    href: "/international-projects",
    iconKey: "international" as const,
    iconColor: "text-[#2E8ADB]",
    iconBg: "bg-[#EAF1FA]",
  },
  {
    title: "State Projects",
    description: "Empowering states with tailored digital services.",
    href: "/state-projects",
    iconKey: "state" as const,
    iconColor: "text-[#3E9E49]",
    iconBg: "bg-[#EDF5EF]",
  },
  {
    title: "MeitY Projects",
    description: "Supporting MeitY's flagship digital initiatives.",
    href: "/meity-projects",
    iconKey: "meity" as const,
    iconColor: "text-[#EE8A00]",
    iconBg: "bg-[#FDF3E4]",
  },
  {
    title: "NICSI Products",
    description: "Reliable, scalable ICT products for government needs.",
    href: "/pbd-projects",
    iconKey: "products" as const,
    iconColor: "text-[#8A34AF]",
    iconBg: "bg-[#F1EAF7]",
  },
];

const centreOfExcellencePreviewCards = [
  {
    title: "Artificial Intelligence",
    line1: "Advanced AI solutions",
    line2: "for intelligent governance",
    image: "/images/coe/artificial-intelligence.svg?v=20260304",
  },
  {
    title: "Cyber Security",
    line1: "Protecting digital",
    line2: "infrastructure and data",
    image: "/images/coe/cyber-security.svg?v=20260304",
  },
  {
    title: "Data Analytics",
    line1: "Data-driven insights",
    line2: "for better decision making",
    image: "/images/coe/data-analytics.svg?v=20260304",
  },
  {
    title: "Cloud",
    line1: "Scalable cloud",
    line2: "infrastructure and services",
    image: "/images/coe/cloud.svg?v=20260304",
  },
  {
    title: "Blockchain",
    line1: "Secure distributed ledger",
    line2: "technologies",
    image: "/images/coe/blockchain.svg?v=20260304",
  },
] as const;

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
    "National Informatics Centre Services Inc. (NICSI), under the Ministry of Electronics and Information Technology (MeitY), provides secure and scalable ICT services to strengthen India's digital governance.",
  points: [
    "Trusted Partner: Supporting ministries, departments, and public sector institutions in implementing ICT initiatives.",
    "End-to-End Services: Covering procurement, solution development, project execution, and managed services.",
    "Robust Infrastructure: Delivering secure cloud, data center, and digital platforms for mission-critical government operations.",
  ],
};

const serviceOfferings = [
  { title: "Cloud Services", subtitle: "Secure and scalable cloud infrastructure", icon: Cloud },
  { title: "Data Centre Services", subtitle: "Robust data center solutions", icon: Database },
  { title: "Security Audit Services", subtitle: "Comprehensive security assessments", icon: ShieldCheck },
  { title: "IT Consultancy Services", subtitle: "Expert technology consulting", icon: Lightbulb },
  { title: "Application Development", subtitle: "Custom enterprise applications", icon: Code2 },
  { title: "Software & Website Development", subtitle: "Web solutions and portals", icon: Globe2 },
  { title: "Mobile App Development", subtitle: "Native and cross-platform apps", icon: Smartphone },
  { title: "Manpower Services", subtitle: "Skilled IT professionals", icon: Users },
  { title: "Support (OA & Others)", subtitle: "Technical support services", icon: Headset },
  { title: "AMC", subtitle: "Annual maintenance contracts", icon: Wrench },
  { title: "VC Services", subtitle: "Video conferencing solutions", icon: Video },
  { title: "Scanning & Digitization", subtitle: "Document digitization services", icon: ScanSearch },
  { title: "SMS/Email Services", subtitle: "Bulk communication services", icon: Mail },
  { title: "Social Media Services", subtitle: "Social media management", icon: Share2 },
  { title: "Capacity Building", subtitle: "Training and skill development", icon: GraduationCap },
  { title: "And Many More...", subtitle: "", icon: MoreHorizontal },
] as const;

const socialConnectLinks = [
  {
    label: "LinkedIn",
    handle: "@nicsi",
    href: "https://www.linkedin.com/company/nicsi/",
    icon: Linkedin,
    cardHover: "hover:bg-[#F2F8FF] hover:border-[#0A66C2]/40",
    iconStyle: "bg-[#EAF2FF] text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white",
  },
  {
    label: "Facebook",
    handle: "@MeitY.NICSI",
    href: "https://www.facebook.com/MeitY.NICSI",
    icon: Facebook,
    cardHover: "hover:bg-[#F1F7FF] hover:border-[#1877F2]/40",
    iconStyle: "bg-[#EAF2FF] text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white",
  },
  {
    label: "Twitter / X",
    handle: "@MeitY_NICSI",
    href: "https://x.com/MeitY_NICSI",
    icon: Twitter,
    cardHover: "hover:bg-[#F3F4F6] hover:border-[#111827]/30",
    iconStyle: "bg-[#EEF2F7] text-[#111827] group-hover:bg-[#111827] group-hover:text-white",
  },
  {
    label: "Instagram",
    handle: "@meity_nicsi",
    href: "https://www.instagram.com/meity_nicsi/",
    icon: Instagram,
    cardHover: "hover:bg-[#FFF4FA] hover:border-[#DD2A7B]/40",
    iconStyle: "bg-[#FDEDF4] text-[#DD2A7B] group-hover:bg-[#DD2A7B] group-hover:text-white",
  },
] as const;

export default function Home() {
  const visibleProjectSubmenuLinks = filterLinksForStaticAudit(projectSubmenuLinks);
  const serviceAccessHref = isHiddenInStaticAudit("/empanelled-vendors") ? "/forms" : "/empanelled-vendors";
  const centreOfExcellenceCards = centreOfExcellencePreviewCards.map((item) => ({
    ...item,
    image: withSiteBasePath(item.image),
  }));
  const ministryLeaders = ministers.map((minister) => ({
    ...minister,
    image: withSiteBasePath(minister.image),
  }));

  return (
    <div className="relative overflow-hidden pb-8" style={{ backgroundColor: "var(--nicsi-bg)" }}>
      <NicsiMotionBackdrop />
      <div className="nicsi-page-aura pointer-events-none absolute inset-0 -z-0">
        <div className="nicsi-aura-orb nicsi-aura-orb-left" />
        <div className="nicsi-aura-orb nicsi-aura-orb-right" />
      </div>
      <Hero />

      <section id="ministry" className="nicsi-reveal bg-white px-6 pb-14 pt-12 scroll-mt-28">
        <div className="mx-auto max-w-6xl">
          <div className="nicsi-stagger rounded-2xl border border-blue-100 bg-gradient-to-b from-[#F7FAFF] via-white to-white p-4 shadow-sm md:p-6">
            <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex h-full flex-col gap-3">
              {ministryLeaders.map((minister) => (
                <article
                  key={minister.name}
                  className="nicsi-hover-card flex-1 rounded-lg border border-[#D9E6FF] bg-white p-0 shadow-sm transition hover:border-[#BFD4FF] lg:min-h-[192px]"
                >
                  <div className="grid h-full grid-cols-[96px_1fr] gap-0 sm:grid-cols-[122px_1fr]">
                    <div className="h-full min-h-[112px] overflow-hidden rounded-l-lg border-r border-[#D9E6FF] bg-white sm:min-h-[128px]">
                      <Image
                        src={minister.image}
                        alt={minister.name}
                        width={440}
                        height={360}
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                    <div className="flex h-full flex-col justify-center p-3 sm:p-4">
                      <h3 className="text-base font-extrabold leading-tight tracking-tight text-[#0F2F78] sm:text-xl">
                        {minister.name}
                      </h3>
                      <p className="mt-2 text-xs font-medium leading-5 text-gray-700 sm:text-sm sm:leading-6">
                        {minister.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <article className="flex h-full flex-col rounded-xl border border-[#D9E6FF] bg-[#FCFDFF] p-5 shadow-sm sm:p-6">
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
                className="mt-6 inline-flex self-end items-center rounded-md border border-[#0F4BB8] bg-gradient-to-r from-[#0F4BB8] to-[#0A2E73] px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(15,75,184,0.22)] transition hover:from-[#0D3FA2] hover:to-[#08245B]"
              >
                Know More..
              </Link>
            </article>
          </div>
          </div>
        </div>
      </section>

      <section className="nicsi-reveal px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-6xl items-stretch gap-5 sm:gap-8 lg:grid-cols-[1.45fr_1fr]">
          <article className="overflow-hidden rounded-3xl border border-[#D5E7FF] bg-gradient-to-br from-[#F8FBFF] via-white to-[#F3F8FF] p-4 shadow-[0_16px_40px_rgba(15,75,184,0.08)] sm:p-8">
            <h2 className="mt-1 text-2xl font-bold text-[#0F172A] sm:mt-2 sm:text-3xl">Project Portfolio</h2>
            <div className="nicsi-stagger mt-5 grid items-stretch gap-3 sm:mt-7 sm:grid-cols-2 lg:grid-cols-6">
              {visibleProjectSubmenuLinks.map((project, index) => {
                const Icon = projectPortfolioIconMap[project.iconKey];
                const centeredRowClass =
                  index === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : index === 4
                      ? "lg:col-span-2 lg:col-start-4"
                      : "lg:col-span-2";

                return (
                  <Link
                    key={project.title}
                    href={project.href}
                    className={`nicsi-hover-card group relative flex min-h-[230px] w-full flex-col items-center justify-between rounded-2xl border border-[#D7E5FA] bg-white/95 px-4 py-5 text-center shadow-[0_6px_18px_rgba(15,75,184,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#8FB8F0] hover:shadow-[0_14px_30px_rgba(13,70,173,0.16)] sm:min-h-[250px] sm:px-5 sm:py-6 lg:min-h-[272px] ${centeredRowClass}`}
                  >
                    <div className="flex w-full flex-1 flex-col items-center">
                      <span className={`mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full ring-1 ring-inset ring-[#D5E5FA] ${project.iconBg}`}>
                        <Icon size={24} className={project.iconColor} />
                      </span>
                      <p className="mt-4 text-[15px] font-semibold leading-snug text-[#102A56] sm:text-lg">{project.title}</p>
                      <p className="mt-2 max-w-[15rem] text-[13px] leading-5 text-[#4A5B78] sm:text-sm sm:leading-6">{project.description}</p>
                    </div>
                    <span className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#1E63B5]">Explore</span>
                  </Link>
                );
              })}
            </div>
          </article>

          <div className="nicsi-stagger h-full">
            <article className="nicsi-hover-card h-full overflow-hidden rounded-3xl bg-[#0B1E43] p-5 text-white shadow-[0_16px_40px_rgba(11,30,67,0.28)] sm:p-8">
              <h3 className="text-xl font-bold sm:text-2xl">Message</h3>
              <p className="mt-3 break-words text-justify text-[13px] italic leading-6 text-[#D9E6FF] sm:mt-4 sm:text-[15px] sm:leading-8">
                &ldquo;India stands at a defining moment in its digital transformation journey. As emerging technologies reshape governance worldwide, NICSI strives to empower every Ministry, Department, and State with solutions that are secure, scalable, intelligent, and future-ready. By fostering innovation and collaboration, NICSI is committed to building a digital ecosystem that not only addresses today&apos;s challenges but also anticipates tomorrow&apos;s opportunities.
              </p>
              <p className="mt-2 break-words text-justify text-[13px] italic leading-6 text-[#D9E6FF] sm:indent-8 sm:text-[15px] sm:leading-8">
                As we advance toward an era driven by Artificial Intelligence, Quantum Computing, and automation, NICSI aims to play a pivotal role in strengthening digital public infrastructure, enhancing cyber resilience, and enabling mission-mode projects that touch the lives of millions. With a vision rooted in inclusivity and sustainability, NICSI endeavors to ensure that technology becomes a true enabler of good governance, citizen-centric services, and national progress.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-cyan-100 sm:mt-5">Shri Alok Tiwari, MD NICSI</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-[#0F4BB8] sm:text-3xl md:text-4xl">NICSI Centres of Excellence</h2>
          <p className="mt-3 text-center text-base text-[#334155] sm:text-xl md:text-2xl">Pioneering Innovation In Emerging Technologies</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {centreOfExcellenceCards.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-[#D9E3F4] bg-white shadow-[0_4px_14px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(15,23,42,0.16)]"
              >
                <div className="relative h-52">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/25 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-3xl font-bold leading-tight text-white">{item.title}</h3>
                </div>
                <div className="px-5 py-4">
                  <p className="min-h-[3.25rem] text-sm leading-6 text-[#334155]">
                    <span className="block">{item.line1}</span>
                    <span className="block">{item.line2}</span>
                  </p>
                  <Link href="/centre-of-excellence" className="mt-3 inline-flex items-center text-base font-semibold text-[#0F4BB8] hover:text-[#003A8C]">
                    Explore <span aria-hidden="true" className="ml-1">-&gt;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF4FF] p-6 shadow-[0_14px_32px_rgba(15,75,184,0.10)] md:p-8">
            <h2 className="text-center text-2xl font-bold text-[#0F4BB8] sm:text-3xl md:text-4xl">NICSI Service Offerings</h2>
            <p className="mt-3 text-center text-sm text-[#334155] sm:text-base md:text-lg">Comprehensive ICT Services for Government Requirements</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {serviceOfferings.map((item) => (
                <article
                  key={item.title}
                  className="h-full rounded-xl border border-[#D9E3F4] bg-gradient-to-b from-white to-[#F8FBFF] p-4 shadow-[0_2px_10px_rgba(15,23,42,0.06)] transition hover:border-[#B9D1F5] hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)]"
                >
                  <div className="flex h-full flex-col">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#EEF4FF] to-[#DDEBFF] text-[#0F4BB8]">
                      <item.icon size={19} />
                    </span>
                    <h3 className="mt-3 min-h-[2.5rem] text-sm font-semibold leading-5 text-[#0F172A]">{item.title}</h3>
                    {item.subtitle ? (
                      <p className="mt-1 min-h-[2.5rem] text-xs leading-5 text-[#475569]">{item.subtitle}</p>
                    ) : (
                      <p className="mt-1 min-h-[2.5rem] text-xs leading-5 text-transparent">.</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href={serviceAccessHref}
                className="inline-flex items-center rounded-md bg-gradient-to-r from-[#0F4BB8] to-[#0A2E73] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(15,75,184,0.28)] transition hover:from-[#0C3C96] hover:to-[#08245B]"
              >
                Access Our Services Here
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-14">
        <div className="mx-auto max-w-6xl rounded-2xl border border-blue-100 bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF4FF] p-6 shadow-[0_12px_28px_rgba(15,75,184,0.08)] md:p-8">
          <h2 className="text-center text-2xl font-bold text-[#0F4BB8] sm:text-3xl md:text-4xl">Connect with US</h2>
          <p className="mt-3 text-center text-lg text-[#334155]">Follow us on social media for latest updates</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {socialConnectLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group rounded-xl border border-[#D9E3F4] bg-white p-5 text-center shadow-[0_2px_10px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(15,23,42,0.12)] ${item.cardHover}`}
                >
                  <span className={`mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full transition group-hover:scale-105 ${item.iconStyle}`}>
                    <Icon size={22} />
                  </span>
                  <p className="mt-4 text-lg font-semibold text-[#0F172A]">{item.label}</p>
                  <p className="mt-1 text-sm text-[#475569]">{item.handle}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
