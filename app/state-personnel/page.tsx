import StatePersonnelTable from "@/components/state/StatePersonnelTable";
import PageTitle from "../../components/layout/PageTitle";
import { getStatePersonnelList } from "@/services/statePersonnel";

const ALL_ROWS_LIMIT = 500;

export default async function StatePersonnelPage() {
  const result = await getStatePersonnelList({
    page: 1,
    limit: ALL_ROWS_LIMIT,
    query: "",
  });

  return (
    <main className="pb-12">
      <PageTitle title="State Personnel" />

      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <StatePersonnelTable
          initialRows={result.rows}
          initialTotal={result.total}
        />
      </section>
    </main>
  );
}
