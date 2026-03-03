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
      tagline: "Low-Code/No-Code e-Service framework",
      description:
        "A metadata driven e Service delivery framework built on Low-Code/No-Code architecture for delivering digital public services.",
      accent: "text-[#0A2A72]",
      logo: "/logos/national-projects/servicesplus.png",
    },
    {
      name: "e Counselling Services",
      tagline: "Unified counselling and admission platform",
      description:
        "A unified platform offering end to end online counselling and transparent admission processes for academic institutions.",
      accent: "text-[#C62828]",
      logo: "/logos/national-projects/ecounselling.png",
    },
    {
      name: "StarBus",
      tagline: "One Nation One Portal",
      description:
        "A fully configurable, cloud-enabled platform providing State Transport Corporation (STC) services such as online seat booking, bus pass issuance, fleet and crew management.",
      accent: "text-[#0A2A72]",
      logo: "/logos/pbd-projects/starbus-logo.svg",
    },
  ];

  const otherProjects: readonly Solution[] = [
    {
      name: "eNagar Setu",
      description:
        "A unified digital platform offering a wide range of municipal services for Urban Local Bodies, including licenses, certificates, permits, payments, and citizen service delivery.",
      accent: "text-[#0A2A72]",
      tagline: "Municipal service delivery platform",
    },
    {
      name: "NextGen eHospital",
      tagline: "Smart Hospital Management System",
      description:
        "An integrated hospital management system that digitizes operations and connects patients, hospitals, and doctors seamlessly.",
      accent: "text-[#0284C7]",
      logo: "/logos/pbd-projects/ehospital-logo-v2.png",
    },
    {
      name: "NAPIX",
      tagline: "National API Exchange Platform",
      description:
        "A centralized government API platform enabling departments and agencies to securely build, integrate, and scale digital services.",
      accent: "text-[#0A2A72]",
      logo: "/logos/pbd-projects/apix-logo-v2.png",
    },
    {
      name: "Face Auth",
      tagline: "Biometric Identity Verification System",
      description:
        "Biometric authentication service that leverages facial recognition technology to verify user identity across government platforms.",
      accent: "text-[#1E40AF]",
    },
    {
      name: "Cyber Solution (Phishing)",
      tagline: "Anti Phishing Readiness Platform",
      description:
        "A cybersecurity awareness platform designed to strengthen organizational defenses against phishing attacks.",
      accent: "text-[#6D28D9]",
    },
    {
      name: "eVetan Seva",
      tagline: "Unified Government Payroll Platform",
      description:
        "A centralized and scalable payroll management system for secure, efficient handling of salaries, employee data, and financial deductions across government bodies.",
      accent: "text-[#0F4BB8]",
    },
  ];

  return (
    <main className="pb-12">
      <PageTitle title="NICSI Products" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">

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
                <p className={`text-base font-semibold leading-7 ${solution.accent}`}>{solution.name}</p>
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
                <p className={`text-base font-semibold leading-7 ${project.accent}`}>{project.name}</p>
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
