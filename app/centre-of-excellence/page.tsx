import PageTitle from "../../components/layout/PageTitle";

const focusAreas = [
  {
    title: "Cloud and Infrastructure Excellence",
    detail: "Reference architectures, capacity optimization and resilient deployment models for government platforms.",
  },
  {
    title: "Security and Compliance",
    detail: "Secure-by-design controls, audit readiness and governance-aligned operational practices.",
  },
  {
    title: "Data and Platform Engineering",
    detail: "Reusable service frameworks, interoperability patterns and analytics enablement for mission projects.",
  },
  {
    title: "Capacity Building and Advisory",
    detail: "Knowledge transfer, project mentoring and technical advisory support for ministries and departments.",
  },
] as const;

export default function CentreOfExcellencePage() {
  return (
    <main className="pb-12">
      <PageTitle title="NICSI Centre of Excellence" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">NICSI Centre of Excellence</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            NICSI Centre of Excellence (CoE) is focused on strengthening government digital programs through specialized domain support,
            reusable standards and technical enablement. The CoE framework helps departments accelerate implementation quality,
            improve reliability and adopt scalable digital governance practices.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {focusAreas.map((area) => (
            <article key={area.title} className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-[#0F172A]">{area.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">{area.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
