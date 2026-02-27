import Image from "next/image";
import PageTitle from "../../components/layout/PageTitle";

export default function Page() {
  type Solution = {
    name: string;
    tagline?: string;
    description: string;
    accent: string;
    logo?: string;
    logoText?: string;
  };

  const featuredSolutions: readonly Solution[] = [
    {
      name: "ServicePlus",
      tagline: "Meta-data-based e-Service delivery framework",
      description:
        "Built on Low Code-No Code (LCNC) architecture for delivering electronic-services to citizens.",
      accent: "text-[#0A2A72]",
      logo: "/logos/national-projects/servicesplus.png",
    },
    {
      name: "e-Counselling Services",
      tagline: "Simplifying The Admission Process",
      description:
        "One stop solution providing end-to-end technical support and services towards a hassle-free transparent admission processes for Technical and Academic Institutions across the country.",
      accent: "text-[#C62828]",
      logo: "/logos/national-projects/ecounselling.png",
    },
    {
      name: "StarBus",
      tagline: "One Nation One Portal",
      description:
        "A fully configurable, cloud-enabled platform providing State Transport Corporation (STC) services such as online seat booking, bus pass issuance, fleet and crew management.",
      accent: "text-[#0A2A72]",
      logoText: "StarBus",
    },
  ];

  const otherProjects: readonly Solution[] = [
    {
      name: "eNagar Setu",
      description:
        "Digital service platform to streamline municipal tax collection across urban local bodies.",
      accent: "text-[#0A2A72]",
      tagline: "Property Tax Collection",
    },
    {
      name: "NextGen eHospital",
      description:
        "A unified hospital management system for governments that digitizes hospital operations and seamlessly connects patients, hospitals and doctors.",
      accent: "text-[#0284C7]",
      logo: "/logos/pbd-projects/ehospital-logo-v2.png",
    },
    {
      name: "APIX",
      description:
        "A centralized platform of Government APIs, which the stakeholders / government departments / government agencies can use for developing their own applications.",
      accent: "text-[#0A2A72]",
      logo: "/logos/pbd-projects/apix-logo-v2.png",
    },
    {
      name: "Face Auth",
      description:
        "Biometric authentication service that leverages facial recognition technology to verify user identity across government platforms.",
      accent: "text-[#1E40AF]",
    },
    {
      name: "Cyber Solution (Phishing)",
      description:
        "Cybersecurity awareness tool to strengthen an organization's defense against phishing attacks.",
      accent: "text-[#6D28D9]",
    },
  ];

  return (
    <main className="pb-12">
      <PageTitle title="PBD Projects" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8"> 
          <p className="mt-2 text-sm text-gray-600">Featured PBD Solutions</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredSolutions.map((solution) => (
              <article key={solution.name} className="flex h-full flex-col rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm">
                <div className="mb-3 flex h-14 items-center justify-start">
                  {solution.logo ? (
                    <div className="flex h-14 w-40 items-center rounded-md border border-gray-100 bg-white p-2">
                      <Image src={solution.logo} alt={`${solution.name} logo`} width={180} height={56} className="h-full w-full object-contain" />
                    </div>
                  ) : solution.logoText ? (
                    <span className="inline-flex h-12 items-center rounded-md border border-blue-200 bg-white px-3 text-3xl font-bold text-[#0A2A72]">
                      {solution.logoText}
                    </span>
                  ) : null}
                </div>
                <p className={`min-h-[3.5rem] text-2xl font-bold ${solution.accent}`}>{solution.name}</p>
                {solution.tagline ? <p className="mt-1 text-sm font-semibold text-gray-600">{solution.tagline}</p> : null}
                <p className="mt-3 text-sm leading-6 text-gray-700">{solution.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <article key={project.name} className="flex h-full flex-col rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                {project.logo ? (
                  <div className="mb-3 flex h-12 w-44 items-center rounded-md border border-gray-100 bg-white p-2">
                    <Image src={project.logo} alt={`${project.name} logo`} width={176} height={48} className="h-full w-full object-contain" />
                  </div>
                ) : project.logoText ? (
                  <span className="mb-3 inline-flex h-10 items-center rounded-md border border-blue-200 bg-[#F8FAFF] px-3 text-2xl font-bold text-[#0A2A72]">
                    {project.logoText}
                  </span>
                ) : null}
                <p className={`min-h-[3.5rem] text-2xl font-bold leading-tight ${project.accent}`}>{project.name}</p>
                {project.tagline ? <p className="mt-1 text-sm font-semibold text-gray-600">{project.tagline}</p> : null}
                <p className="mt-3 text-sm leading-6 text-gray-700">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
 
      </section>
    </main>
  );
}
