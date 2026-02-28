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
      title: "National Cloud Services",
      logo: "/logos/meity-projects/national-cloud.png",
      description: "Strengthening and modernizing cloud infrastructure to support secure government service delivery.",
      website: "https://www.cloud.gov.in/",
    },
    {
      title: "eTaal 3.0",
      logo: "/logos/meity-projects/etaal.png",
      description: "A real time analytics platform measuring and monitoring the usage of digital government services across India.",
      website: "https://etaal.gov.in/",
    },
    {
      title: "Secure Email Services",
      logo: "/logos/meity-projects/secure-email.png",
      description: "A robust, managed email platform ensuring secure communication for government users.",
      website: "https://email.gov.in/",
    },
    {
      title: "National Data Highway (NDH)",
      logo: "/logos/meity-projects/nic.png",
      description: "A high speed, scalable data exchange layer enabling seamless inter departmental digital integration.",
    },
    {
      title: "National Single Sign On (NSSO)",
      logo: "/logos/meity-projects/default.svg",
      description: "A unified authentication system allowing users to access multiple digital government services with a single login.",
    },
    {
      title: "Collab Files",
      logo: "/logos/meity-projects/default.svg",
      description: "A secure platform for document creation, collaboration, workflow automation, and file management for government.",
    },
    {
      title: "Enhancement and Management of Ministries' Websites",
      logo: "/logos/meity-projects/default.svg",
      description: "Improving security, accessibility, design, and backend management for government ministry portals.",
    },
    {
      title: "India Portal 2.0",
      logo: "/logos/meity-projects/india-portal.png",
      description: "A unified gateway providing centralized access to discoverable government information and citizen services.",
      website: "https://www.india.gov.in/",
    },
    {
      title: "Pragati VC 2.0",
      logo: "/logos/meity-projects/pragati.png",
      description: "A video conferencing platform enabling collaborative governance and real-time monitoring.",
    },
    {
      title: "Gov.in - Secure Intranet Portal",
      logo: "/logos/meity-projects/india-portal.png",
      description: "A secure internal workspace for collaboration, communication, and information sharing within government.",
    },
    {
      title: "GovDrive - Government Cloud Storage",
      logo: "/logos/meity-projects/nic.png",
      description: "A centralized cloud based storage solution for secure file access, sharing, and management by government entities.",
    },
    {
      title: "National Data Centre - North East Region (NDC NER)",
      logo: "/logos/meity-projects/nic.png",
      description: "A regional data centre ensuring resilient hosting and digital service availability for the North East.",
    },
    {
      title: "National Scholarship Portal (Phase III)",
      logo: "/logos/meity-projects/nsp-logo.svg",
      description: "A unified digital platform supporting transparent scholarship applications, verification, and disbursement.",
      website: "https://scholarships.gov.in/",
    },
    {
      title: "Website Facilitation & Management System (WFMS)",
      logo: "/logos/meity-projects/default.svg",
      description: "A centralized website management ecosystem enabling standardization, governance, and quality control for government sites.",
    },
    {
      title: "e Office - Hosting & Application Services",
      logo: "/logos/meity-projects/e-office.png",
      description: "Managed hosting and application services for e Office to streamline digital file movement and administration.",
      website: "https://eoffice.gov.in/",
    },
    {
      title: "Grievance Redressal Web Portal",
      logo: "/logos/meity-projects/gac.jpg",
      description: "Integrated online platform handling citizen grievances efficiently.",
      website: "https://gac.gov.in/",
    },
    {
      title: "National Knowledge Network",
      logo: "/logos/meity-projects/nkn.png",
      description: "A high speed, secure network connecting educational and research institutions across India.",
      website: "https://www.nkn.gov.in/",
    },
    {
      title: "Unified Blockchain Framework Development",
      logo: "/logos/meity-projects/blockchain.jpg",
      description: "Creating a standardized blockchain platform to support trusted, interoperable government applications.",
    },
    {
      title: "MeitY Website Development",
      logo: "/logos/meity-projects/meity.png",
      description: "Designing and maintaining an accessible, user centric website for the Ministry of Electronics & IT.",
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
                {project.logo.endsWith("default.svg") ? (
                  <div className="flex h-16 w-44 items-center justify-center rounded-md border border-blue-200 bg-gradient-to-r from-[#EEF5FF] to-[#E0EEFF] px-2 text-center">
                    <span className="text-[11px] font-semibold leading-4 text-[#0A3B8A]">{project.title}</span>
                  </div>
                ) : (
                  <div className="flex h-16 w-44 items-center rounded-md border border-gray-100 bg-white p-2">
                    <Image src={project.logo} alt={`${project.title} logo`} width={200} height={64} className="h-full w-full object-contain" />
                  </div>
                )}
                <h3 className="mt-3 text-base font-semibold leading-7 text-[#0F172A]">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{project.description}</p>
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
