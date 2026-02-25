import StatePersonnelTable from "@/components/state/StatePersonnelTable";
import PageTitle from "../../components/layout/PageTitle";
import { getStatePersonnelList } from "@/services/statePersonnel";

type PageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

const ALL_ROWS_LIMIT = 500;

export default async function StatePersonnelPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = (params.q ?? "").trim();

  const result = await getStatePersonnelList({
    page: 1,
    limit: ALL_ROWS_LIMIT,
    query,
  });

  return (
    <main className="pb-12">
      <PageTitle title="State Personnel" />

      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <StatePersonnelTable
          initialRows={result.rows}
          initialTotal={result.total}
          initialQuery={query}
        />
      </section>
    </main>
  );
}
