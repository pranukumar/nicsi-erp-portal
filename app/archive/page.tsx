import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="Archive" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>
          This section is reserved for Archive content and can be updated with department-approved media entries.
        </p>
        <p className="mt-3 text-sm">
          Official reference:{" "}
          <Link href="https://nicsi.nic.in/media" target="_blank" className="font-semibold text-[#003A8C]">
            NICSI Media
          </Link>
        </p>
      </section>
    </main>
  );
}
