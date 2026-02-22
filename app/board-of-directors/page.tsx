import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function BoardOfDirectorsPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Board of Directors" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>Board of Directors reference snapshot (verified on February 21, 2026):</p>
        <div className="mt-5 overflow-x-auto rounded-lg border border-gray-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="px-4 py-3">Shri Abhishek Singh</td><td className="px-4 py-3">Chairperson, NICSI</td></tr>
              <tr className="border-t"><td className="px-4 py-3">Shri Alok Tiwari</td><td className="px-4 py-3">Managing Director</td></tr>
              <tr className="border-t"><td className="px-4 py-3">Shri Saurabh Trivedi</td><td className="px-4 py-3">Director</td></tr>
              <tr className="border-t"><td className="px-4 py-3">Smt. Rajbala Verma</td><td className="px-4 py-3">Director</td></tr>
              <tr className="border-t"><td className="px-4 py-3">Shri Ashok Kumar</td><td className="px-4 py-3">Director</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm">
          Official source:
          {" "}
          <Link className="font-semibold text-[#003A8C]" href="https://nicsi.nic.in/boardOfDirectors" target="_blank">
            NICSI Board of Directors
          </Link>
        </p>
      </section>
    </main>
  );
}
