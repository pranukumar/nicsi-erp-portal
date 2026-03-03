import PageTitle from "../../components/layout/PageTitle";
import { Atom, BarChart3, Blocks, Brain, CloudCog, Compass, Lightbulb, Rocket, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const missionPoints = [
  "To build institutional expertise across high-impact emerging technology domains.",
  "To support government bodies with end-to-end advisory, strategy, and implementation services.",
  "To accelerate digital transformation through next generation platforms and innovative solutions.",
  "To enhance national cyber resilience and technology preparedness.",
  "To facilitate collaboration between government, industry, academia, and innovation ecosystems.",
] as const;

const excellenceCentres = [
  {
    iconKey: "ai",
    title: "Centre of Excellence in Artificial Intelligence (AI)",
    description: "Advancing AI adoption across governance and public service delivery.",
    points: [
      "AI frameworks and solution development",
      "Responsible and ethical AI for government use-cases",
      "Predictive modelling, NLP, and automation frameworks",
      "AI consulting, PoCs, and capacity building",
    ],
  },
  {
    iconKey: "cyber",
    title: "Centre of Excellence in Cyber Security",
    description: "Ensuring secure, resilient, and trusted digital infrastructure for government entities.",
    points: [
      "Cyber security architecture and assessments",
      "SOC enhancement, threat intelligence, and incident response",
      "Zero-trust implementation models",
      "Governance, risk, and compliance (GRC) advisory",
    ],
  },
  {
    iconKey: "cloud",
    title: "Centre of Excellence in Cloud Technologies",
    description: "Enabling cloud-driven modernization and scalable digital transformation.",
    points: [
      "Cloud readiness and migration strategy",
      "Hybrid/multi-cloud architecture design",
      "Cloud-native application development and DevSecOps",
      "Cloud governance and security frameworks",
    ],
  },
  {
    iconKey: "data",
    title: "Centre of Excellence in Data Analytics",
    description: "Building data-driven decision-making capabilities across government.",
    points: [
      "Data engineering, dashboards, and BI systems",
      "Predictive and prescriptive analytics",
      "Data governance, quality, and architecture frameworks",
      "Enterprise-wide data platform development",
    ],
  },
  {
    iconKey: "quantum",
    title: "Centre of Excellence in Quantum Computing",
    description: "Preparing government systems for next-generation high-performance computing.",
    points: [
      "Research on quantum algorithms and applications",
      "Pilot projects, prototypes, and PoCs",
      "Quantum readiness assessments",
      "Academic and industry collaboration for capability building",
    ],
  },
  {
    iconKey: "blockchain",
    title: "Centre of Excellence in Blockchain",
    description: "Building trusted, tamper-evident digital systems for transparent governance.",
    points: [
      "Blockchain architecture and solution design",
      "Distributed ledger based workflows and registries",
      "Smart contract advisory and implementation support",
      "Interoperable, secure, and auditable public-sector use-cases",
    ],
  },
] as const;

const valueProposition = [
  {
    iconKey: "advisory",
    title: "Expert Advisory and Consulting",
    detail: "Domain expertise across AI, cyber security, cloud, data, and quantum technologies.",
  },
  {
    iconKey: "delivery",
    title: "End-to-End Solution Support",
    detail: "From conceptualization and architecture to development, deployment, and post implementation support.",
  },
  {
    iconKey: "innovation",
    title: "Innovation and Research Platform",
    detail: "Accelerated experimentation, PoC development, and exploration of new technology models.",
  },
  {
    iconKey: "secure",
    title: "Secure and Scalable Digital Solutions",
    detail: "Aligned with national standards, cyber frameworks, and governance principles.",
  },
  {
    iconKey: "capacity",
    title: "Capacity Building and Knowledge Enablement",
    detail: "Training programs, workshops, and knowledge resources for government personnel.",
  },
] as const;

const centreIconMap = {
  ai: Brain,
  cyber: ShieldCheck,
  cloud: CloudCog,
  data: BarChart3,
  quantum: Atom,
  blockchain: Blocks,
} as const;

const valueIconMap = {
  advisory: Compass,
  delivery: Rocket,
  innovation: Lightbulb,
  secure: Sparkles,
  capacity: Wrench,
} as const;

export default function CentreOfExcellencePage() {
  return (
    <main className="pb-12">
      <PageTitle title="NICSI Centres of Excellence" />
      <section className="mx-auto max-w-7xl px-6 py-8 text-gray-700">
        <div className="relative overflow-hidden rounded-[28px] border border-[#BFD6FF] bg-gradient-to-br from-[#04205D] via-[#0A3B96] to-[#1D6CD2] p-7 text-white shadow-[0_20px_46px_rgba(10,59,150,0.35)] md:p-10">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

          <div className="relative grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">Emerging Technology Leadership</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">NICSI Centres of Excellence</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-blue-50 md:text-base">
                NICSI-CoET is a strategic technology division focused on strengthening institutional capabilities and enabling secure,
                scalable, and future-ready digital governance platforms.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-50 md:text-base">
                The Centre supports ministries, departments, and public organizations with research-led advisory, architecture design,
                solution engineering, and implementation support across critical emerging technology domains.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <article className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Specialized Domains</p>
                <p className="mt-1 text-lg font-semibold text-white">6 Excellence Centres</p>
              </article>
              <article className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Strategic Scope</p>
                <p className="mt-1 text-lg font-semibold text-white">Research, Advisory, Build, and Scale</p>
              </article>
              <article className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Primary Outcome</p>
                <p className="mt-1 text-lg font-semibold text-white">Trusted and Intelligent Digital Governance</p>
              </article>
            </div>
          </div>

          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="pointer-events-none absolute -bottom-1 left-0 h-12 w-full text-white md:h-16">
            <path d="M0,48 C180,90 370,8 560,34 C760,62 920,18 1110,40 C1240,55 1330,58 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A]">Vision</h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              To position NICSI as a national leader in emerging technologies by fostering excellence, innovation, and capability
              development that drives secure, intelligent, and transformative digital governance.
            </p>
          </article>

          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A]">Mission</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-700">
              {missionPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0052CC]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-xl font-bold text-[#0F172A]">Core Excellence Domains</h3>
          <p className="mt-2 text-sm leading-7 text-gray-700">
            NICSI-CoET operates through specialized centres focused on high-impact technology domains for government transformation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {excellenceCentres.map((centre) => {
              const Icon = centreIconMap[centre.iconKey];
              return (
                <article key={centre.title} className="rounded-xl border border-[#D9E6FF] bg-gradient-to-b from-[#FCFDFF] to-[#F5F9FF] p-5 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#E9F1FF] text-[#0F4BB8]">
                    <Icon size={18} />
                  </span>
                  <h4 className="mt-3 text-base font-semibold leading-7 text-[#0F172A]">{centre.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{centre.description}</p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-6 text-gray-700">
                    {centre.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0052CC]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-[#F7FAFF] to-[#EEF5FF] p-6 shadow-sm md:p-8">
          <h3 className="text-xl font-bold text-[#0F172A]">Value Proposition</h3>
          <p className="mt-2 text-sm leading-7 text-gray-700">NICSI-CoET enables government stakeholders through:</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {valueProposition.map((item) => {
              const Icon = valueIconMap[item.iconKey];
              return (
                <article key={item.title} className="rounded-xl border border-[#D9E6FF] bg-white p-4 shadow-[0_3px_10px_rgba(15,23,42,0.05)]">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#E9F1FF] text-[#0F4BB8]">
                    <Icon size={16} />
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-[#0F172A]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
