import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="Photos" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <p>
          Photos are available in the local NICSI media archive.
        </p>
        <p className="mt-3 text-sm">
          Open the internal archive:{" "}
          <Link href="/media-gallery?tab=photos" className="font-semibold text-[#003A8C]">
            Photo Gallery
          </Link>
        </p>
      </section>
    </main>
  );
}
