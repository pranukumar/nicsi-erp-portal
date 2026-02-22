import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function ListOfManagingDirectorsPage() {
  return (
    <main className="pb-12">
      <PageTitle title="List of Managing Directors" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>Historical managing directors list (reference snapshot verified on February 21, 2026):</p>
        <div className="mt-5 overflow-x-auto rounded-lg border border-gray-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-4 py-3">S. No.</th>
                <th className="px-4 py-3">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="px-4 py-3">1</td><td className="px-4 py-3">Shri A.K. Verma</td></tr>
              <tr className="border-t"><td className="px-4 py-3">2</td><td className="px-4 py-3">Shri N. Seshagiri</td></tr>
              <tr className="border-t"><td className="px-4 py-3">3</td><td className="px-4 py-3">Shri K. N. Shinde</td></tr>
              <tr className="border-t"><td className="px-4 py-3">4</td><td className="px-4 py-3">Shri K. R. Chary</td></tr>
              <tr className="border-t"><td className="px-4 py-3">5</td><td className="px-4 py-3">Shri M. R. Khanna</td></tr>
              <tr className="border-t"><td className="px-4 py-3">6</td><td className="px-4 py-3">Shri Pramod Mahajan</td></tr>
              <tr className="border-t"><td className="px-4 py-3">7</td><td className="px-4 py-3">Shri K. V. Rao</td></tr>
              <tr className="border-t"><td className="px-4 py-3">8</td><td className="px-4 py-3">Shri H. K. Habra</td></tr>
              <tr className="border-t"><td className="px-4 py-3">9</td><td className="px-4 py-3">Shri A. K. Sinha</td></tr>
              <tr className="border-t"><td className="px-4 py-3">10</td><td className="px-4 py-3">Shri Rajesh Kumar (Interim Charge)</td></tr>
              <tr className="border-t"><td className="px-4 py-3">11</td><td className="px-4 py-3">Shri Rajeev Sharma</td></tr>
              <tr className="border-t"><td className="px-4 py-3">12</td><td className="px-4 py-3">Shri Naresh Kumar</td></tr>
              <tr className="border-t"><td className="px-4 py-3">13</td><td className="px-4 py-3">Shri Deepak Kumar</td></tr>
              <tr className="border-t"><td className="px-4 py-3">14</td><td className="px-4 py-3">Shri Rajesh Kumar (Interim Charge)</td></tr>
              <tr className="border-t"><td className="px-4 py-3">15</td><td className="px-4 py-3">Shri Injeti Srinivas</td></tr>
              <tr className="border-t"><td className="px-4 py-3">16</td><td className="px-4 py-3">Shri Alok Tiwari</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm">
          Official source:
          {" "}
          <Link className="font-semibold text-[#003A8C]" href="https://nicsi.nic.in/listOfManagingDirectors" target="_blank">
            NICSI List of Managing Directors
          </Link>
        </p>
      </section>
    </main>
  );
}
