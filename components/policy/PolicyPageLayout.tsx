import type { ReactNode } from "react";
import PageTitle from "@/components/layout/PageTitle";

export default function PolicyPageLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="pb-12">
      <PageTitle title={title} />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          {children}
        </div>
      </section>
    </main>
  );
}
