"use client";

import { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CloudCog,
  Cpu,
  Database,
  FileCheck2,
  Globe,
  HelpCircle,
  Layers,
  LockKeyhole,
  MapPin,
  Network,
  Server,
  ShieldCheck,
  UserPlus,
  Wallet,
  Workflow,
} from "lucide-react";

export default function Page() {
  const keyFeatures = [
    {
      title: "Pay As You Go Consumption Model",
      detail: "Usage-based billing ensures cost transparency and minimizes upfront capital expenditure.",
      icon: Wallet,
    },
    {
      title: "Hybrid Cloud Platform",
      detail: "Unified hybrid cloud platform with automated, scalable and cloud-enabled services.",
      icon: Layers,
    },
    {
      title: "Self Service Portal",
      detail: "Unified hybrid management, on-demand provisioning, observability, AI-driven operations and secure application enhancement.",
      icon: Workflow,
    },
    {
      title: "Managed Services",
      detail: "Routine IT operations and infrastructure management are handled by expert teams.",
      icon: CloudCog,
    },
    {
      title: "Secure, Compliant Environment",
      detail: "Configurable controls including IAM, encryption and firewall protections.",
      icon: ShieldCheck,
    },
    {
      title: "Multi Cloud Access via Empanelled Vendors",
      detail: "Cloud capacity through empanelled vendors including Jio and Yotta for enterprise-grade, government-ready environments.",
      icon: Globe,
    },
  ] as const;

  const serviceCatalogue = [
    {
      category: "Platform as a Service",
      icon: Cpu,
      services: ["Container Services", "Kubernetes", "API Management", "Resource Monitoring", "Resource Metering", "Enterprise Monitoring"],
    },
    {
      category: "Infrastructure as a Service",
      icon: Server,
      services: ["Compute Services", "Database Services", "Storage Services", "Backup Services", "Network Services", "Public IP Services"],
    },
    {
      category: "Security Infra as a Service",
      icon: LockKeyhole,
      services: ["Security Antivirus", "Vulnerability Assessment", "Web App Firewall"],
    },
    {
      category: "Other Services",
      icon: Network,
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

  const ndcLocations = [
    { name: "NDC Delhi", year: "2011" },
    { name: "NDC Guwahati", year: "2025" },
    { name: "NDC Bhubaneswar", year: "2018" },
    { name: "NDC Pune", year: "2010" },
    { name: "NDC Hyderabad", year: "2008" },
  ] as const;

  const infraMetrics = [
    { label: "Attached NDCs", value: "5 Locations", icon: MapPin },
    { label: "vCPUs", value: "4,00,000+", icon: Cpu },
    { label: "Storage", value: "100+ PB", icon: Database },
    { label: "Total IT Load", value: "11.4 Megawatt", icon: CloudCog },
  ] as const;

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeServiceGroup = serviceCatalogue[activeServiceIndex];
  const ActiveServiceIcon = activeServiceGroup.icon;

  return (
    <main className="pb-12">
      <PageTitle title="NICSI Cloud Services" />
      <section className="mx-auto max-w-7xl px-6 py-8 text-gray-700">
        <div className="relative overflow-hidden rounded-[28px] border border-[#BFD6FF] bg-gradient-to-br from-[#04205D] via-[#0A3B96] to-[#1D6CD2] p-7 text-white shadow-[0_20px_46px_rgba(10,59,150,0.35)] md:p-10">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />
          <div className="relative grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">National Government Cloud</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">NICSI Cloud Services</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-blue-50 md:text-base">
                National Informatics Centre Services Inc. (NICSI) enables Ministries, Departments and Government Organizations (MDOs) to access secure,
                scalable and high-performance cloud services through empanelled industry partners.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-blue-50 md:text-base">
                Services are provisioned through the National Government Cloud (NGC) platform, enabling public, private and hybrid cloud environments
                with integrated monitoring, managed operations and a Pay As You Go model.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://ngc.gov.in/home"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0A3B96] transition hover:bg-blue-50"
                >
                  Access NGC Portal <ArrowRight size={16} />
                </Link>
                <Link
                  href="https://ngc.gov.in/home"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Jump to FAQs <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <article className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Coverage</p>
                <p className="mt-1 text-lg font-semibold text-white">Public, Private, and Hybrid Cloud</p>
              </article>
              <article className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Governance</p>
                <p className="mt-1 text-lg font-semibold text-white">Secure, Compliant, and Auditable Delivery</p>
              </article>
              <article className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Operations</p>
                <p className="mt-1 text-lg font-semibold text-white">Managed Services with Observability</p>
              </article>
            </div>
          </div>

          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -bottom-1 left-0 h-12 w-full text-white md:h-16"
          >
            <path d="M0,48 C180,90 370,8 560,34 C760,62 920,18 1110,40 C1240,55 1330,58 1440,30 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Cloud Service Highlights</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {keyFeatures.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="rounded-xl border border-[#D9E6FF] bg-gradient-to-b from-[#FCFDFF] to-[#F5F9FF] p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#E9F1FF] text-[#0F4BB8]">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-[#0F172A]">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{highlight.detail}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-center text-2xl font-bold text-[#0F172A]">Data Centre Backbone for Cloud Services</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm leading-7 text-[#475569]">
            NICSI cloud services are offered through attached National Data Centres (NDCs), ensuring secure, resilient, and
            high-capacity delivery for government workloads.
          </p>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#0F4BB8]" />

          <div className="mt-7 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-2xl border border-[#D9E6FF] bg-[#F8FBFF] p-5 shadow-[0_10px_24px_rgba(15,75,184,0.12)]">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1E4FA8]">Attached NDC Locations</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {ndcLocations.map((centre) => (
                  <article
                    key={centre.name}
                    className="rounded-xl border border-[#D9E6FF] bg-white p-4 shadow-[0_6px_16px_rgba(15,75,184,0.08)]"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#E9F1FF] text-[#0F4BB8]">
                        <MapPin size={16} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#0F172A]">{centre.name}</p>
                        <p className="text-xs font-medium uppercase tracking-[0.1em] text-[#1E4FA8]">Year: {centre.year}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {infraMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex items-center gap-3 rounded-xl border border-[#D9E6FF] bg-[#F8FBFF] p-3.5">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#0F4BB8] text-white">
                      <Icon size={19} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">{metric.label}</p>
                      <p className="text-base font-bold text-[#0F4BB8]">{metric.value}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div id="cloud-services-matrix" className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-center text-2xl font-bold text-[#0F172A]">Key Services Offered Through NGC Platform</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-7 text-[#475569]">
            Platform, Infrastructure, Security, and other specialized services delivered through NGC.
          </p>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#0F4BB8]" />

          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {serviceCatalogue.map((group, index) => {
              const Icon = group.icon;
              const isActive = index === activeServiceIndex;
              return (
                <button
                  type="button"
                  key={group.category}
                  onClick={() => setActiveServiceIndex(index)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-[#0F4BB8] bg-[#0F4BB8] text-white shadow-[0_8px_18px_rgba(15,75,184,0.25)]"
                      : "border-[#D9E6FF] bg-white text-[#0F172A] hover:border-[#BFD4FF] hover:bg-[#F8FBFF]"
                  }`}
                >
                  <Icon size={16} />
                  {group.category}
                </button>
              );
            })}
          </div>

          <div className="mt-7 rounded-2xl border border-[#D9E6FF] bg-[#FCFDFF] p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#E9F1FF] text-[#0F4BB8]">
                <ActiveServiceIcon size={17} />
              </span>
              <h3 className="text-base font-semibold text-[#0F172A]">{activeServiceGroup.category}</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {activeServiceGroup.services.map((service) => (
                <article
                  key={service}
                  className="rounded-xl border border-[#DCE8FF] bg-white p-3.5 shadow-[0_2px_8px_rgba(15,75,184,0.07)]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#0F4BB8] text-white">
                      <ActiveServiceIcon size={14} />
                    </span>
                    <p className="text-sm font-semibold text-[#1E293B]">{service}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-center text-2xl font-bold text-[#0F172A]">Provisioning Process</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-base leading-8 text-[#475569]">
            Departments can onboard and avail cloud services through the NGC portal in three streamlined stages.
          </p>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#0F4BB8]" />

          <div className="relative mx-auto mt-8 max-w-5xl">
            <div className="pointer-events-none absolute bottom-8 left-7 top-8 hidden w-px bg-gradient-to-b from-[#A5C5F9] via-[#2F75D5] to-[#A5C5F9] md:block" />
            <div className="space-y-6">
              {provisioningSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="grid items-center gap-4 md:grid-cols-[4.5rem_1fr] md:gap-6">
                    <div className="relative z-10 flex justify-start md:justify-center">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F4BB8] text-white shadow-[0_10px_20px_rgba(15,75,184,0.35)]">
                        <Icon size={24} />
                      </span>
                    </div>
                    <article className="rounded-2xl border border-[#D9E6FF] bg-white p-5 shadow-[0_8px_20px_rgba(15,23,42,0.08)] md:p-6">
                      <span className="inline-flex rounded-full bg-[#0F4BB8] px-3 py-1 text-xs font-semibold text-white">
                        Step {index + 1}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold leading-tight text-[#0F172A] sm:text-2xl md:text-[30px]">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-gray-700 md:text-base">{step.detail}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-9 flex justify-center">
            <Link
              href="https://ngc.gov.in/home"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#0F4BB8] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(15,75,184,0.3)] transition hover:bg-[#0B3C93]"
            >
              Open NGC Portal <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-r from-[#F7FAFF] to-[#EEF5FF] p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Service Catalogue and Pricing</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            For comprehensive service descriptions, technical specifications and pricing, refer to the official NGC Cloud Services portal.
          </p>
          <Link
            href="https://ngc.gov.in/home"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-[#0F4BB8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0B3C93]"
          >
            Open NGC Cloud Services <ArrowRight size={16} />
          </Link>
        </div>

        <div id="cloud-faq" className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm scroll-mt-28 md:p-8">
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
                    <CheckCircle2 size={16} className="mt-[1px] text-[#0F4BB8]" />
                    <span>{faq.question}</span>
                  </span>
                </summary>
                <p className="mt-3 pl-6 text-sm leading-6 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-bold text-[#0F172A]">Ready to Onboard Your Department?</h2>
              <p className="mt-2 text-sm text-gray-700">Initiate secure, scalable cloud provisioning through NICSI and NGC today.</p>
            </div>
            <Link
              href="https://ngc.gov.in/home"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-[#0F4BB8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B3C93]"
            >
              Start Cloud Request <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
