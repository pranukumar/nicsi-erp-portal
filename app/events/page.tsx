import PageTitle from "../../components/layout/PageTitle";
import Link from "next/link";

type EventItem = {
  id: number;
  title: string;
  source: string;
};

const events: EventItem[] = [
  { id: 1, title: "Slogan making activities on Swachhata Pakhwada", source: "NICSI Photos Gallery" },
  { id: 2, title: "Poster making activities on Swachhata Pakhwada", source: "NICSI Photos Gallery" },
  { id: 3, title: "Swachhata Pakhwada Pledge Ceremony", source: "NICSI Photos Gallery" },
  { id: 4, title: "Rajbhasha Workshop/Meeting", source: "NICSI Photos Gallery" },
  { id: 5, title: "Let Us Learn (NICSI Training Programme)", source: "NICSI Photos Gallery" },
  { id: 6, title: "New Year address by MD NICSI", source: "NICSI Photos Gallery" },
  {
    id: 7,
    title: "Shri Alok Tiwari, Deputy Director General, NIC, assumed charge as the new Managing Director of NICSI",
    source: "NICSI Photos Gallery",
  },
  { id: 8, title: "Hindi Pakhwada 2025", source: "NICSI Photos Gallery" },
  { id: 9, title: "30th Annual Day of NICSI", source: "NICSI Photos Gallery" },
  { id: 10, title: "MoU signing NIC AND NICSI", source: "NICSI Photos Gallery" },
  { id: 11, title: "Swachhata Pledge 2024", source: "NICSI Photos Gallery" },
  { id: 12, title: "29th Annual Day of NICSI", source: "NICSI Photos Gallery" },
  { id: 13, title: "Yoga Day 2024", source: "NICSI Photos Gallery" },
  { id: 14, title: "MD, NICSI welcomed Shri Bhuvnesh Kumar, AS, MeitY as new Chairperson, NICSI", source: "NICSI Photos Gallery" },
  { id: 15, title: "MD NICSI in AI Tech Session, June 2023", source: "NICSI Photos Gallery" },
  { id: 16, title: "International Yoga Day 2023 in NICSI", source: "NICSI Photos Gallery" },
  { id: 17, title: "Training Session on Qlik+Talend", source: "NICSI Photos Gallery" },
  { id: 18, title: "Training Session on Apache Superset", source: "NICSI Photos Gallery" },
  { id: 19, title: "Training Session on Tableau", source: "NICSI Photos Gallery" },
  { id: 20, title: "Bihar Tech Sammelan, July 2023", source: "NICSI Photos Gallery" },
];

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="Events" />
      <section className="mx-auto max-w-6xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-[#0F172A]">Events & Activities</h2>
            <Link
              href="/photo-gallery"
              className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#003A8C] hover:bg-blue-100"
            >
              View Photo Gallery
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {events.map((event) => (
              <article key={event.id} className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-4 shadow-sm">
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-[#003A8C]">
                    Event {event.id}
                  </span>
                  <span className="text-xs text-gray-500">{event.source}</span>
                </div>
                <h3 className="text-base font-semibold leading-7 text-[#0F172A]">{event.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
