import Image from "next/image";
import PageTitle from "../../components/layout/PageTitle";
import ExternalLaunchButton from "@/components/common/ExternalLaunchButton";
import { withSiteBasePath } from "@/lib/staticAudit";

interface Project {
  title: string;
  logo: string;
  description: string;
  website?: string;
}

export default function Page() {
  const projects: Project[] = [
    {
      title: "NKN",
      logo: "/logos/meity-projects/nkn.png",
      description: "A high speed, secure network connecting educational and research institutions across India.",
      website: "https://www.nkn.gov.in/",
    },
    {
      title: "National Cloud Services",
      logo: "/logos/meity-projects/national-cloud.png",
      description: "Strengthening and modernizing cloud infrastructure to support secure government service delivery.",
      website: "https://www.cloud.gov.in/",
    },
    {
      title: "Government Email Services",
      logo: "/logos/meity-projects/secure-email.png",
      description: "A robust, managed email platform ensuring secure communication for government users.",
      website: "https://email.gov.in/",
    },
    {
      title: "National Data Centre - North East Region (NDC NER)",
      logo: "/logos/meity-projects/nic.png",
      description: "A regional data centre ensuring resilient hosting and digital service availability for the North East.",
    },
    {
      title: "Parichay",
      logo: "/logos/meity-projects/default.svg",
      description: "A unified authentication system allowing users to access multiple digital government services with a single login.",
      website: "https://parichay.nic.in/",
    },
    {
      title: "eOffice",
      logo: "/logos/meity-projects/e-office.png",
      description: "Managed hosting and application services for eOffice to streamline digital file movement and administration.",
      website: "https://eoffice.gov.in/",
    },
    {
      title: "National Scholarship Portal",
      logo: "/logos/meity-projects/nsp-logo.svg",
      description: "A unified digital platform supporting transparent scholarship applications, verification, and disbursement.",
      website: "https://scholarships.gov.in/",
    },
    {
      title: "Pragati VC 2.0",
      logo: "/logos/meity-projects/pragati.png",
      description: "A video conferencing platform enabling collaborative governance and real-time monitoring.",
    },
    {
      title: "India Portal 2.0",
      logo: "/logos/meity-projects/india-portal.png",
      description: "A unified gateway providing centralized access to discoverable government information and citizen services.",
      website: "https://www.india.gov.in/",
    },
    {
      title: "MeitY Website Development",
      logo: "/logos/meity-projects/meity.png",
      description: "Designing and maintaining an accessible, user centric website for the Ministry of Electronics & IT.",
      website: "https://www.meity.gov.in/",
    },
  ];
  const normalizedProjects = projects.map((project) => ({
    ...project,
    logo: withSiteBasePath(project.logo),
  }));

  return (
    <main className="pb-12">
      <PageTitle title="MeitY Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {normalizedProjects.map((project) => (
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
                  <ExternalLaunchButton
                    url={project.website}
                    className="mt-3 inline-flex w-fit rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
                    title={`Visit ${project.title}`}
                  >
                    Visit Site
                  </ExternalLaunchButton>
                ) : null}
              </article>
            ))}
          </div>
        </div> 
      </section>
    </main>
  );
}
