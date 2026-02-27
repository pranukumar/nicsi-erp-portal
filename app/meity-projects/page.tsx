import Image from "next/image";
import PageTitle from "../../components/layout/PageTitle";

interface Project {
  title: string;
  logo: string;
  description: string;
  website?: string;
}

export default function Page() {
  const projects: Project[] = [
    {
      title: "Enhancement of National Informatics Centre (NIC) - National Cloud Services",
      logo: "/logos/meity-projects/national-cloud.png",
      description: "Expansion and modernization of core national cloud infrastructure for secure government hosting.",
      website: "https://www.cloud.gov.in/",
    },
    {
      title: "eTaal 3.0",
      logo: "/logos/meity-projects/etaal.png",
      description: "Real-time dashboard for monitoring e-transaction volumes across government services.",
      website: "https://etaal.gov.in/",
    },
    {
      title: "Secure Email Service for Government of India",
      logo: "/logos/meity-projects/secure-email.png",
      description: "Trusted email platform for secure official communication across government entities.",
      website: "https://email.gov.in/",
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
      website: "https://www.india.gov.in/",
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
      website: "https://scholarships.gov.in/",
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
      website: "https://eoffice.gov.in/",
    },
    {
      title: "Operation and maintenance of Grievance Appellate Committee Web Portal",
      logo: "/logos/meity-projects/gac.jpg",
      description: "Sustained operation support for grievance appeal workflows and case tracking.",
      website: "https://gac.gov.in/",
    },
    {
      title: "National Knowledge Network",
      logo: "/logos/meity-projects/nkn.png",
      description: "High-speed network connecting educational and research institutions nationwide.",
      website: "https://www.nkn.gov.in/",
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
      website: "https://www.meity.gov.in/",
    },
  ];

  return (
    <main className="pb-12">
      <PageTitle title="MeitY Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="flex h-full flex-col rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                <div className="flex h-16 w-44 items-center rounded-md border border-gray-100 bg-white p-2">
                  <Image src={project.logo} alt={`${project.title} logo`} width={200} height={64} className="h-full w-full object-contain" />
                </div>
                <h3 className="mt-3 text-base font-semibold leading-7 text-[#0F172A]">{project.title}</h3>
                <p
                  className="mt-2 text-sm leading-6 text-gray-700"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>
                {project.website ? (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex w-fit rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                  >
                    Visit Site
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div> 
      </section>
    </main>
  );
}
