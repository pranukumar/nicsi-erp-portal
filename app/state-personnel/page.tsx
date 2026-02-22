import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function StatePersonnelPage() {
  return (
    <main className="pb-12">
      <PageTitle title="State Personnel" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>State personnel reference snapshot (verified on February 21, 2026):</p>
        <div className="mt-5 overflow-x-auto rounded-lg border border-gray-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Designation</th>
                <th className="px-4 py-3">Mobile</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="px-4 py-3">Jammu & Kashmir</td><td className="px-4 py-3">Shri Muneeb ul Islam</td><td className="px-4 py-3">Sr. Technical Director</td><td className="px-4 py-3">9419000913</td></tr>
              <tr className="border-t"><td className="px-4 py-3">Himachal Pradesh</td><td className="px-4 py-3">Shri Rajesh Kumar</td><td className="px-4 py-3">Sr. Technical Director</td><td className="px-4 py-3">9418077806</td></tr>
              <tr className="border-t"><td className="px-4 py-3">Punjab</td><td className="px-4 py-3">Shri S.K. Chawla</td><td className="px-4 py-3">Technical Director</td><td className="px-4 py-3">9646115131</td></tr>
              <tr className="border-t"><td className="px-4 py-3">Haryana</td><td className="px-4 py-3">Shri Vikas Sharma</td><td className="px-4 py-3">Technical Director</td><td className="px-4 py-3">9813022888</td></tr>
              <tr className="border-t"><td className="px-4 py-3">Uttarakhand</td><td className="px-4 py-3">Shri Sanjay Kumar Tiwari</td><td className="px-4 py-3">Technical Director</td><td className="px-4 py-3">9411111264</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm">
          Official source:
          {" "}
          <Link className="font-semibold text-[#003A8C]" href="https://nicsi.nic.in/statePersonnel" target="_blank">
            NICSI State Personnel
          </Link>
        </p>
      </section>
    </main>
  );
}
