import HeadquarterPersonnelTable from "@/components/headquarters/HeadquarterPersonnelTable";
import PageTitle from "../../components/layout/PageTitle";
import { getHeadquarterPersonnelList } from "@/services/headquarterPersonnel";

type PageProps = {
  searchParams: Promise<{
    page?: string;
    q?: string;
    limit?: string;
  }>;
};

const DEFAULT_LIMIT = 10;

export default async function HeadquartersPersonnelPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page ?? "1") || 1);
  const limit = Math.min(25, Math.max(5, Number(params.limit ?? String(DEFAULT_LIMIT)) || DEFAULT_LIMIT));
  const query = (params.q ?? "").trim();

  const result = await getHeadquarterPersonnelList({
    page,
    limit,
    query,
  });

  return (
    <main className="pb-12">
      <PageTitle title="Headquarters Personnel" />

      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <HeadquarterPersonnelTable
          initialRows={result.rows}
          initialTotal={result.total}
          initialPage={page}
          limit={limit}
          initialQuery={query}
        />
      </section>
    </main>
  );
}
