import PageTitle from "../../components/layout/PageTitle";
import { getContactInfo } from "@/services/siteContent";

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  return (
    <main className="pb-12">
      <PageTitle title="Contact" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>{contactInfo.officeName}</p>
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
      </section>
    </main>
  );
}
