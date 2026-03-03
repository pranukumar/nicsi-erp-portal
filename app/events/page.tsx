import PageTitle from "../../components/layout/PageTitle";
import Image from "next/image";
import Link from "next/link";

type EventItem = {
  id: number;
  title: string;
  source: string;
  imageUrl?: string;
};

const events: EventItem[] = [
  { id: 1, title: "Slogan making activities on Swachhata Pakhwada", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/swachtapakhwada-1.jpg" },
  { id: 2, title: "Poster making activities on Swachhata Pakhwada", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/painting2026-1.jpg" },
  { id: 3, title: "Swachhata Pakhwada Pledge Ceremony", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/pledge2026-1.jpg" },
  { id: 4, title: "Rajbhasha Workshop/Meeting", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/rajbhasha-workshop2026-1.jpg" },
  { id: 5, title: "Let Us Learn (NICSI Training Programme)", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/letuslearn-1.jpg" },
  { id: 6, title: "New Year address by MD NICSI", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/new-year-1.jpg" },
  {
    id: 7,
    title: "Shri Alok Tiwari, Deputy Director General, NIC, assumed charge as the new Managing Director of NICSI",
    source: "NICSI Photos Gallery",
    imageUrl: "https://nicsi.nic.in/assets/images/gallery/MD03122025.jpg",
  },
  { id: 8, title: "Hindi Pakhwada 2025", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/hindi-pakhwadha%281%29.jpeg" },
  { id: 9, title: "30th Annual Day of NICSI", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/nicsi_day_1.jpeg" },
  { id: 10, title: "MoU signing NIC AND NICSI", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/mou_sign_img2.jpeg" },
  { id: 11, title: "Swachhata Pledge 2024", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/swachhata_pledge_img1.jpeg" },
  { id: 12, title: "29th Annual Day of NICSI", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/annualday_img1.jpeg" },
  { id: 13, title: "Yoga Day 2024", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/yoga_day_img1.jpeg" },
  { id: 14, title: "MD, NICSI welcomed Shri Bhuvnesh Kumar, AS, MeitY as new Chairperson, NICSI", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Chairperson.jpg" },
  { id: 15, title: "MD NICSI in AI Tech Session, June 2023", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/AI.jpg" },
  { id: 16, title: "International Yoga Day 2023 in NICSI", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Yoga.jpg" },
  { id: 17, title: "NICSI", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/nicsiImage1.jpg" },
  { id: 18, title: "Training Sessions on Qlik+Talend, Apache Superset and Tableau", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/digitalIndia.jpeg" },
  { id: 19, title: "Bihar Tech Sammelan, July 2023", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Data_Analytics_Session.jpg" },
  { id: 20, title: "NICSI", source: "NICSI Photos Gallery", imageUrl: "https://nicsi.nic.in/assets/images/gallery/nicsi_img1.jpeg" },
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
              <article key={event.id} className="overflow-hidden rounded-xl border border-blue-100 bg-[#FCFDFF] shadow-sm">
                <div className="relative h-52 w-full bg-[#F3F7FF]">
                  {event.imageUrl ? (
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm font-medium text-gray-500">Image not available</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-end">
                    <span className="text-xs text-gray-500">{event.source}</span>
                  </div>
                  <h3 className="text-base font-semibold leading-7 text-[#0F172A]">{event.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
