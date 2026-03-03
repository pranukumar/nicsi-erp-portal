import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";
import { ArrowDown, ArrowRight, CloudCog, FileCheck2, HelpCircle, UserPlus } from "lucide-react";

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
      phase: "Onboarding",
      title: "Applicant Registration",
      detail: "Register the department/entity and authorized officials on the NGC portal to initiate access.",
      icon: UserPlus,
    },
    {
      phase: "Planning",
      title: "Cloud Plan Registration",
      detail: "Define service categories, environments and quotas aligned to program objectives and governance requirements.",
      icon: FileCheck2,
    },
    {
      phase: "Provisioning",
      title: "Resource Provisioning",
      detail: "Provision compute, storage, network, database and security resources with observability and managed services as needed.",
      icon: CloudCog,
    },
  ] as const;

  const faqs = [
    {
      question: "Who can apply for NICSI Cloud Services?",
      answer:
        "Ministries, Departments, Government Organizations, and approved public sector entities can onboard through the NGC portal as per defined governance and authorization requirements.",
    },
    {
      question: "How is billing handled for cloud usage?",
      answer:
        "Billing follows a Pay As You Go model, where charges are based on the consumed services and allocated resources, ensuring transparency and cost control.",
    },
    {
      question: "What deployment models are supported?",
      answer:
        "The platform supports public, private, and hybrid cloud models based on workload sensitivity, compliance requirements, and operational priorities.",
    },
    {
      question: "How long does resource provisioning usually take?",
      answer:
        "Provisioning timelines depend on resource type and approvals, but the workflow is designed for streamlined onboarding and faster delivery through standardized stages.",
    },
    {
      question: "What security measures are available?",
      answer:
        "Services include configurable security controls such as IAM, encryption, firewall protections, vulnerability management, and monitoring capabilities.",
    },
    {
      question: "Where can departments get service and pricing details?",
      answer:
        "Detailed service specifications, onboarding guidance, and pricing information are available on the official NGC Cloud Services portal.",
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
          <p className="mt-3 text-sm">
            <Link href="#cloud-faq" className="font-semibold text-[#003A8C] hover:text-[#0F4BB8]">
              Jump to FAQs
            </Link>
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">Service Highlights</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {keyFeatures.map((highlight) => (
              <article key={highlight.title} className="rounded-lg border border-blue-100 bg-[#FCFDFF] p-4">
                <h3 className="text-base font-semibold text-[#0F172A]">{highlight.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700">{highlight.detail}</p>
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
            Departments can onboard and avail cloud services through the NGC portal in three streamlined stages.
          </p>
          <div className="mt-4 flex flex-col gap-3 md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
            {provisioningSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === provisioningSteps.length - 1;

              return (
                <div key={step.title} className="contents">
                  <article className="rounded-lg border border-blue-100 bg-[#FCFDFF] p-4">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#0052CC]"
                    >
                      <span className="nicsi-process-icon" style={{ animationDelay: `${index * 0.22}s` }}>
                        <Icon size={14} />
                      </span>
                      {step.phase}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-[#0F172A]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{step.detail}</p>
                  </article>

                  {!isLast ? (
                    <div className="flex items-center justify-center text-[#0F4BB8]">
                      <ArrowDown
                        className="nicsi-process-arrow-down h-5 w-5 md:hidden"
                        style={{ animationDelay: `${index * 0.22}s` }}
                      />
                      <ArrowRight
                        className="nicsi-process-arrow-right hidden h-5 w-5 md:block"
                        style={{ animationDelay: `${index * 0.22}s` }}
                      />
                    </div>
                  ) : null}
                </div>
              );
            })}
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

        <div id="cloud-faq" className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm scroll-mt-28">
          <div className="flex items-center gap-2">
            <HelpCircle size={19} className="text-[#0052CC]" />
            <h2 className="text-xl font-bold text-[#0F172A]">Frequently Asked Questions</h2>
          </div>
          <p className="mt-2 text-sm text-gray-600">Quick answers to common onboarding, usage, and service queries.</p>
          <div className="mt-4 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-lg border border-blue-100 bg-[#FCFDFF] p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-[#0F172A]">
                  <span className="inline-flex items-start gap-2">
                    <span className="mt-[2px] h-2 w-2 rounded-full bg-[#0F4BB8]" />
                    <span>{faq.question}</span>
                  </span>
                </summary>
                <p className="mt-3 pl-4 text-sm leading-6 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
