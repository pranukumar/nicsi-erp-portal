import PageTitle from "../../components/layout/PageTitle";
import { getContactInfo } from "@/services/siteContent";

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  return (
    <main className="pb-12">
      <PageTitle title="Contact" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">NICSI Contact Details</h2>
          <p className="mt-3">{contactInfo.officeName}</p>
          {contactInfo.addressLines.map((line) => (
            <p key={line} className="mt-2">
              {line}
            </p>
          ))}
          {contactInfo.phones.length > 0 && (
            <p className="mt-2">Phone: {contactInfo.phones.join(", ")}</p>
          )}
          {contactInfo.emails.length > 0 && (
            <p className="mt-2">Email: {contactInfo.emails.join(", ")}</p>
          )}
        </div>
      </section>
    </main>
  );
}
