import Image from "next/image";
import PageTitle from "../../components/layout/PageTitle";

export default function Page() {
  const projects = [
    {
      title: "Enhancement of National Informatics Centre (NIC) - National Cloud Services",
      logo: "/logos/meity-projects/national-cloud.png",
      description: "Expansion and modernization of core national cloud infrastructure for secure government hosting.",
    },
    {
      title: "eTaal 3.0",
      logo: "/logos/meity-projects/etaal.png",
      description: "Real-time dashboard for monitoring e-transaction volumes across government services.",
    },
    {
      title: "Secure Email Service for Government of India",
      logo: "/logos/meity-projects/secure-email.png",
      description: "Trusted email platform for secure official communication across government entities.",
    },
    {
      title: "Implementation of National Data Highway (NDH)",
      logo: "/logos/meity-projects/nic.png",
      description: "High-capacity backbone initiative to improve secure inter-departmental data exchange.",
    },
    {
      title: "National Single Sign-On Platform for Government of India",
      logo: "/logos/meity-projects/default.svg",
      description: "Unified identity access for government users across multiple digital applications.",
    },
    {
      title: "CollabFiles design, development, rollout, management and maintenance of collaborative suite",
      logo: "/logos/meity-projects/default.svg",
      description: "End-to-end collaboration suite implementation for secure government productivity workflows.",
    },
    {
      title: "Enhancement and management of websites of ministries/departments",
      logo: "/logos/meity-projects/default.svg",
      description: "Strengthening reliability, accessibility and lifecycle maintenance of ministry websites.",
    },
    {
      title: "India Portal 2.0",
      logo: "/logos/meity-projects/india-portal.png",
      description: "Next-generation national portal experience for discoverable public information and services.",
    },
    {
      title: "Pragati VC 2.0",
      logo: "/logos/meity-projects/pragati.png",
      description: "Digital review and video-conferencing platform for governance monitoring at scale.",
    },
    {
      title: "Gov.in Secure Intranet Portal",
      logo: "/logos/meity-projects/india-portal.png",
      description: "Secure intranet environment for internal government collaboration and information exchange.",
    },
    {
      title: "Gov Drive in Storage as Service for Government of India by National Informatics Centre (NIC)",
      logo: "/logos/meity-projects/nic.png",
      description: "Centralized secure storage service for official files and institutional data management.",
    },
    {
      title: "Establishment of National Data Centre in North-East Region (NDC-NER)",
      logo: "/logos/meity-projects/nic.png",
      description: "Regional data center initiative to improve resilience and low-latency service delivery.",
    },
    {
      title: "National Scholarship Portal (Phase-II)",
      logo: "/logos/meity-projects/nsp-logo.svg",
      description: "Integrated scholarship lifecycle platform for applications, verification and disbursement.",
    },
    {
      title: "Website Facilitation and Management Platform (WFMP) to harmonize government's digital footprint with whole-of-government approach",
      logo: "/logos/meity-projects/default.svg",
      description: "Common framework for standardized website onboarding, governance and quality controls.",
    },
    {
      title: "Hosting of e-Office application for 10 States/UTs (8 NE States, UT of J&K and UT of Ladakh)",
      logo: "/logos/meity-projects/e-office.png",
      description: "Managed e-Office hosting for strategic states/UTs to accelerate paperless administration.",
    },
    {
      title: "Operation and maintenance of Grievance Appellate Committee Web Portal",
      logo: "/logos/meity-projects/gac.jpg",
      description: "Sustained operation support for grievance appeal workflows and case tracking.",
    },
    {
      title: "National Knowledge Network",
      logo: "/logos/meity-projects/nkn.png",
      description: "High-speed network connecting educational and research institutions nationwide.",
    },
    {
      title: "Design and development of a unified blockchain framework for offering national blockchain services",
      logo: "/logos/meity-projects/blockchain.jpg",
      description: "Common blockchain foundation for trusted and interoperable government use-cases.",
    },
    {
      title: "Website development of Ministry of Electronics & Information Technology",
      logo: "/logos/meity-projects/meity.png",
      description: "Official MeitY website engineering, delivery and lifecycle support.",
    },
  ] as const;

  return (
    <main className="pb-12">
      <PageTitle title="MeitY Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">MeitY Projects</h2>
          <p className="mt-2 text-sm text-gray-600">
            Key digital governance and national platform initiatives delivered in collaboration with MeitY.
          </p>

          <div className="mt-6 rounded-xl border border-blue-100 bg-[#F8FAFF] p-4">
            <p className="text-sm font-semibold text-[#0A2A72]">Project Count: {projects.length}</p>
            <p className="mt-1 text-xs text-gray-600">Listed as per provided project sheet in implementation-focused format.</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="flex h-full flex-col rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold tracking-wide text-[#0052CC]">Project {index + 1}</p>
                <div className="mt-2 flex h-16 w-44 items-center rounded-md border border-gray-100 bg-white p-2">
                  <Image src={project.logo} alt={`${project.title} logo`} width={200} height={64} className="h-full w-full object-contain" />
                </div>
                <h3 className="mt-3 text-base font-semibold leading-7 text-[#0F172A]">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{project.description}</p>
              </article>
            ))}
          </div>
        </div> 
      </section>
    </main>
  );
}
