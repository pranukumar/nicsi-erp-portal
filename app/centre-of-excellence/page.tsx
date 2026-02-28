import PageTitle from "../../components/layout/PageTitle";
import { Atom, BarChart3, Brain, CloudCog, Compass, Lightbulb, Rocket, ShieldCheck, Sparkles, Wrench } from "lucide-react";

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
      <PageTitle title="NICSI Centre of Excellence" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.45fr_1fr]">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A]">NICSI - Centre of Excellence for Emerging Technologies</h2>
              <p className="mt-2 text-sm font-semibold text-[#0A2E73]">Driving innovation, intelligence, and future-ready digital governance</p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                The NICSI Centre of Excellence for Emerging Technologies (NICSI-CoET) is established to strengthen NICSI&apos;s technological
                leadership and elevate service delivery in alignment with India&apos;s rapidly advancing digital governance landscape. NICSI-CoET
                functions as a dedicated strategic division focused on building deep institutional capabilities, driving innovation, and
                supporting government departments in the adoption and integration of next-generation digital technologies.
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                As the Government of India increasingly leverages advanced digital platforms to enhance efficiency and transparency, NICSI-CoET
                provides a structured and unified framework for research, consulting, solution development, and implementation support across
                key emerging technology domains. The Centre is committed to empowering ministries, departments, and public sector organizations
                with secure, scalable, and future-ready technology solutions that facilitate efficient service delivery and promote
                citizen-centric governance.
              </p>
            </div>

            <aside className="relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-[#0A2E73] via-[#0F4BB8] to-[#0A2E73] p-5 text-white">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-300/30 blur-xl" />
              <div className="absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-blue-200/30 blur-xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">NICSI-CoET Snapshot</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-white/25 bg-white/10 p-3">
                  <p className="text-xs text-cyan-100">Specialized Domains</p>
                  <p className="text-lg font-bold">5 Excellence Centres</p>
                </div>
                <div className="rounded-xl border border-white/25 bg-white/10 p-3">
                  <p className="text-xs text-cyan-100">Strategic Focus</p>
                  <p className="text-sm font-semibold">Research, Consulting, Solution Development, and Implementation Support</p>
                </div>
                <div className="rounded-xl border border-white/25 bg-white/10 p-3">
                  <p className="text-xs text-cyan-100">Outcome</p>
                  <p className="text-sm font-semibold">Secure, scalable, and future-ready digital governance solutions</p>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
            <h3 className="text-base font-bold text-[#0F172A]">Vision</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              To position NICSI as a national leader in emerging technologies by fostering excellence, innovation, and capability
              development that drives secure, intelligent, and transformative digital governance.
            </p>
          </article>

          <article className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
            <h3 className="text-base font-bold text-[#0F172A]">Mission</h3>
            <ul className="mt-2 space-y-2 text-sm leading-6 text-gray-700">
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
          <h3 className="text-lg font-bold text-[#0F172A]">Our Key Excellence Centres within NICSI-CoET</h3>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            NICSI-CoET operates through specialized Centres of Excellence, each focusing on a critical domain of emerging technology.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {excellenceCentres.map((centre) => (
              <article key={centre.title} className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-5">
                <div className="mb-2 inline-flex rounded-lg bg-blue-100 p-2 text-[#0F4BB8]">
                  {(() => {
                    const Icon = centreIconMap[centre.iconKey];
                    return <Icon size={18} />;
                  })()}
                </div>
                <h4 className="text-base font-semibold text-[#0F172A]">{centre.title}</h4>
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
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h3 className="text-lg font-bold text-[#0F172A]">Value Proposition</h3>
          <p className="mt-2 text-sm leading-6 text-gray-700">NICSI-CoET offers government stakeholders:</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {valueProposition.map((item) => (
              <article key={item.title} className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4">
                <div className="mb-2 inline-flex rounded-lg bg-blue-100 p-2 text-[#0F4BB8]">
                  {(() => {
                    const Icon = valueIconMap[item.iconKey];
                    return <Icon size={16} />;
                  })()}
                </div>
                <h4 className="text-base font-semibold text-[#0F172A]">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-gray-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
