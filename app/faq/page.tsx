import PageTitle from "../../components/layout/PageTitle";

const faqItems = [
  {
    question: "What is NICSI Digital Governance Platform?",
    answer:
      "NICSI Digital Governance Platform is a unified portal for NICSI public information, procurement updates, project references, policy resources, and related service access.",
  },
  {
    question: "Where can I find NICSI GeM bids and tender information?",
    answer:
      "You can access GeM bid details on the NICSI GeM Bids page and CPP tender references on the Active Tenders section.",
  },
  {
    question: "How can I search empanelled vendors?",
    answer:
      "Use the Vendor Search page to explore vendors using keyword and category-oriented filtering.",
  },
  {
    question: "Where can I download official forms and annual reports?",
    answer:
      "Download Form and Download Annual Report sections provide official document downloads and references.",
  },
  {
    question: "How can I contact NICSI for support?",
    answer:
      "Visit Contact Us page for office address, contact numbers, email details, and map location information.",
  },
  {
    question: "How can I apply for internship opportunities?",
    answer:
      "Internship details and application access are available under the Internship section in the portal menu.",
  },
] as const;

export default function FaqPage() {
  return (
    <main className="pb-12">
      <PageTitle title="FAQ" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Frequently Asked Questions</h2>
          <p className="mt-2 text-sm text-gray-600">Common portal-related queries and quick answers.</p>
          <div className="mt-5 space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-lg border border-blue-100 bg-[#FCFDFF] p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-[#0F172A]">
                  <span className="inline-flex items-start gap-2">
                    <span className="mt-[2px] h-2 w-2 rounded-full bg-[#0F4BB8]" />
                    <span>{item.question}</span>
                  </span>
                </summary>
                <p className="mt-3 pl-4 text-sm leading-6 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
