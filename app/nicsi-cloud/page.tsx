import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function Page() {
  const keyFeatures = [
    {
      title: "Pay As You Go Consumption Model",
      detail: "Usage-based billing ensures cost transparency and minimizes upfront capital expenditure.",
    },
    {
      title: "Hybrid Cloud Platform",
      detail: "Unified hybrid cloud platform with automated, scalable and cloud-enabled services.",
    },
    {
      title: "Self Service Portal",
      detail: "Unified hybrid management, on-demand provisioning, observability, AI-driven operations and secure application enhancement.",
    },
    {
      title: "Managed Services",
      detail: "Routine IT operations and infrastructure management are handled by expert teams.",
    },
    {
      title: "Secure, Compliant Environment",
      detail: "Configurable controls including IAM, encryption and firewall protections.",
    },
    {
      title: "Multi Cloud Access via Empanelled Vendors",
      detail: "Cloud capacity through empanelled vendors including Jio and Yotta for enterprise-grade, government-ready environments.",
    },
  ] as const;

  const serviceCatalogue = [
    {
      category: "Platform as a Service",
      services: ["Container Services", "Kubernetes", "API Management", "Resource Monitoring", "Resource Metering", "Enterprise Monitoring"],
    },
    {
      category: "Infrastructure as a Service",
      services: ["Compute Services", "Database Services", "Storage Services", "Backup Services", "Network Services", "Public IP Services"],
    },
    {
      category: "Security Infra as a Service",
      services: ["Security Antivirus", "Vulnerability Assessment", "Web App Firewall"],
    },
    {
      category: "Other Services",
      services: ["Disaster Recovery Services", "Migration Services", "Authentication Services", "Application Services"],
    },
  ] as const;

  const provisioningSteps = [
    {
      title: "Applicant Registration",
      detail: "Register the department/entity and authorized officials on the NGC portal to initiate access.",
    },
    {
      title: "Cloud Plan Registration",
      detail: "Define service categories, environments and quotas aligned to program objectives and governance requirements.",
    },
    {
      title: "Resource Provisioning",
      detail: "Provision compute, storage, network, database and security resources with observability and managed services as needed.",
    },
  ] as const;

  return (
    <main className="pb-12">
      <PageTitle title="NICSI Cloud Services" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Overview</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            National Informatics Centre Services Inc. (NICSI) enables Ministries, Departments and Government Organizations (MDOs) to access secure,
            scalable and high-performance cloud services through empanelled industry partners. These services support digital transformation, application
            hosting, data management and mission-critical operations for evolving government requirements.
          </p>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            Services are provisioned through the National Government Cloud (NGC) platform, enabling access to public, private and hybrid cloud
            environments with integrated monitoring, managed services and a Pay As You Go model for operational efficiency.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Key Features</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {keyFeatures.map((feature, index) => (
              <article key={feature.title} className="rounded-lg border border-blue-100 bg-[#FCFDFF] p-4">
                <p className="text-xs font-semibold tracking-wide text-[#0052CC]">Feature {index + 1}</p>
                <h3 className="mt-1 text-base font-semibold text-[#0F172A]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{feature.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Key Services Offered Through NGC Platform</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {serviceCatalogue.map((group) => (
              <article key={group.category} className="rounded-lg border border-blue-100 bg-[#FCFDFF] p-4">
                <h3 className="text-base font-semibold text-[#0F172A]">{group.category}</h3>
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  {group.services.map((service) => (
                    <li key={service} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0052CC]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Provisioning Process</h2>
          <p className="mt-2 text-sm text-gray-600">
            Departments can onboard and avail cloud services through the NGC portal in three streamlined steps.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {provisioningSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-blue-100 bg-[#FCFDFF] p-4">
                <p className="text-xs font-semibold tracking-wide text-[#0052CC]">Step {index + 1}</p>
                <h3 className="mt-1 text-base font-semibold text-[#0F172A]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Service Catalogue and Pricing</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            For comprehensive service descriptions, technical specifications and pricing, refer to the official NGC Cloud Services portal.
          </p>
          <p className="mt-3 text-sm">
            Official portal:{" "}
            <Link href="https://cloud.nicsi.nic.in/" target="_blank" rel="noreferrer" className="font-semibold text-[#003A8C]">
              NGC Cloud Services
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
