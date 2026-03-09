import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";

export default function PhotoGalleryPage() {
  return (
    <main className="pb-12">
      <PageTitle title="Photo Gallery" />
      <section className="mx-auto max-w-5xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Photo Gallery</h2>
          <p className="mt-2 text-sm text-gray-600">
            Static build me photo resources ko dedicated gallery page ke through preserve kiya gaya hai.
          </p>
          <div className="mt-5">
            <Link
              href="/photos"
              className="inline-flex rounded-md bg-[#003A8C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0052CC]"
            >
              Open Photos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
