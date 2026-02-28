import PageTitle from "../../components/layout/PageTitle";
import Image from "next/image";

type GalleryItem = {
  id: number;
  title: string;
  imageUrl: string;
};

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Slogan making activities on Swachhata Pakhwada", imageUrl: "https://nicsi.nic.in/assets/images/gallery/swachtapakhwada-1.jpg" },
  { id: 2, title: "Poster making activities on Swachhata Pakhwada", imageUrl: "https://nicsi.nic.in/assets/images/gallery/painting2026-1.jpg" },
  { id: 3, title: "Swachhata Pakhwada Pledge Ceremony", imageUrl: "https://nicsi.nic.in/assets/images/gallery/pledge2026-1.jpg" },
  { id: 4, title: "Rajbhasha Workshop/Meeting", imageUrl: "https://nicsi.nic.in/assets/images/gallery/rajbhasha-workshop2026-1.jpg" },
  { id: 5, title: "Let Us Learn (NICSI Training Programme )", imageUrl: "https://nicsi.nic.in/assets/images/gallery/letuslearn-1.jpg" },
  { id: 6, title: "New Year address by MD NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/new-year-1.jpg" },
  { id: 7, title: "Shri Alok Tiwari, Deputy Director General, NIC, assumed charge as the new Managing Director of NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/MD03122025.jpg" },
  { id: 8, title: "Hindi Pakhwada 2025", imageUrl: "https://nicsi.nic.in/assets/images/gallery/hindi-pakhwadha(1).jpeg" },
  { id: 9, title: "30th Annual Day of NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/nicsi_day_1.jpeg" },
  { id: 10, title: "MoU signing NIC AND NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/mou_sign_img2.jpeg" },
  { id: 11, title: "Swachhata Pledge 2024", imageUrl: "https://nicsi.nic.in/assets/images/gallery/swachhata_pledge_img1.jpeg" },
  { id: 12, title: "29th Annual Day of NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/annualday_img1.jpeg" },
  { id: 13, title: "Yoga Day 2024", imageUrl: "https://nicsi.nic.in/assets/images/gallery/yoga_day_img1.jpeg" },
  { id: 14, title: "MD, NICSI welcomed Shri Bhuvnesh Kumar, AS, MeitY as new Chairperson, NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Chairperson.jpg" },
  { id: 15, title: "MD NICSI in AI Tech Session, June 2023", imageUrl: "https://nicsi.nic.in/assets/images/gallery/AI.jpg" },
  { id: 16, title: "International Yoga Day 2023 in NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Yoga.jpg" },
  { id: 17, title: "NICSI", imageUrl: "https://nicsi.nic.in/assets/images/gallery/nicsiImage1.jpg" },
  { id: 18, title: "Training Session on Qlik+Talend", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Qlik%20Training%20Collage.png" },
  { id: 19, title: "Training Session on Apache Superset", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Superset%20Training%20Collage.png" },
  { id: 20, title: "Training Session on Tableau", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Tableau%20Training%20Collage.png" },
  { id: 21, title: "Bihar Tech Sammelan, July 2023", imageUrl: "https://nicsi.nic.in/assets/images/gallery/Data_Analytics_Session.jpg" },
];

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="Photo Gallery" />
      <section className="mx-auto max-w-7xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Photo Gallery</h2>
          <p className="mt-2 text-sm text-gray-600">Updated from currently available official NICSI photos records.</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryItems.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3">
                  <p className="line-clamp-3 text-sm font-semibold leading-6 text-[#0F172A]">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
