import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="State Projects" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>
          This page is aligned to NICSI menu structure for State Projects and can be expanded with department-approved content.
        </p>
        <p className="mt-3 text-sm">
          Official reference:{" "}
          <Link href="https://nicsi.nic.in/projects" target="_blank" className="font-semibold text-[#003A8C]">
            NICSI Projects
          </Link>
        </p>
      </section>
    </main>
  );
}
