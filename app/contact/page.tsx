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

        <div className="mt-6 rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F172A]">NICSI Other Office Addresses</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <article className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <h3 className="text-base font-semibold text-[#0F172A]">NICSI Laxmi Nagar Data Centre</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                1st Floor, Core-2, Scope Minar
                <br />
                Laxmi Nagar, Delhi - 110092
              </p>
            </article>

            <article className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <h3 className="text-base font-semibold text-[#0F172A]">NICSI Shastri Park (Address 1)</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                1st to 5th Floor, Block-3, DMRC IT Park
                <br />
                New Delhi - 110053
              </p>
            </article>

            <article className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <h3 className="text-base font-semibold text-[#0F172A]">NICSI Shastri Park (Address 2)</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                2nd &amp; 5th Floor, Block-1, DMRC IT Park
                <br />
                New Delhi - 110053
              </p>
            </article>

            <article className="rounded-lg border border-gray-200 bg-[#F8FAFF] p-4">
              <h3 className="text-base font-semibold text-[#0F172A]">World Trade Centre</h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                Tower-A, 3rd Floor, World Trade Centre Nauroji Nagar
                <br />
                New Delhi - 110029
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
