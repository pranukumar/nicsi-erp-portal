import HeadquarterPersonnelTable from "@/components/headquarters/HeadquarterPersonnelTable";
import PageTitle from "../../components/layout/PageTitle";
import { getHeadquarterPersonnelList } from "@/services/headquarterPersonnel";

type PageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

const ALL_ROWS_LIMIT = 500;

export default async function HeadquartersPersonnelPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = (params.q ?? "").trim();

  const result = await getHeadquarterPersonnelList({
    page: 1,
    limit: ALL_ROWS_LIMIT,
    query,
  });

  return (
    <main className="pb-12">
      <PageTitle title="Headquarters Personnel" />

      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <HeadquarterPersonnelTable
          initialRows={result.rows}
          initialTotal={result.total}
          initialManagingDirector={result.managingDirector}
          initialQuery={query}
        />
      </section>
    </main>
  );
}
