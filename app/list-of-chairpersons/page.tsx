import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function ListOfChairpersonsPage() {
  return (
    <main className="pb-12">
      <PageTitle title="List of Chairpersons" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>
          Historical list of NICSI chairpersons is maintained on the official profile page and may be updated over time.
        </p>
        <div className="mt-5 rounded-lg border border-gray-200 bg-white p-5">
          <p className="text-sm">
            This portal follows the same profile section structure. For authoritative and complete chronology,
            use the official NICSI listing.
          </p>
        </div>
        <p className="mt-4 text-sm">
          Official source:
          {" "}
          <Link className="font-semibold text-[#003A8C]" href="https://nicsi.nic.in/listOfChairpersons" target="_blank">
            NICSI List of Chairpersons
          </Link>
        </p>
      </section>
    </main>
  );
}
