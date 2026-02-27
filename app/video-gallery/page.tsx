import PageTitle from "../../components/layout/PageTitle";

type VideoItem = {
  id: number;
  title: string;
  embedUrl: string;
};

const videos: VideoItem[] = [
  {
    id: 1,
    title: "Video Message of ECI for Voter Awareness Election Commission",
    embedUrl: "https://www.youtube.com/embed/pk-vImvmF2A",
  },
  {
    id: 2,
    title: "Voter Helpline 1950 for Election Related Queries",
    embedUrl: "https://www.youtube.com/embed/Zqqwdg6jUek",
  },
  {
    id: 3,
    title: "Service Voter ETPBS Music Video 60s Hindi",
    embedUrl: "https://www.youtube.com/embed/FJVxXC8l9j4",
  },
  {
    id: 4,
    title: "Video Message on Voter Awareness",
    embedUrl: "https://www.youtube.com/embed/XQGpdOcYu14",
  },
];

export default function Page() {
  return (
    <main className="pb-12">
      <PageTitle title="Video Gallery" />
      <section className="mx-auto max-w-7xl px-6 py-8 text-gray-700">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-[#0F172A]">Video Gallery</h2>
          <p className="mt-2 text-sm text-gray-600">Updated from currently available official NICSI videos records.</p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {videos.map((video) => (
              <article key={video.id} className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="h-full w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold leading-6 text-[#0F172A]">{video.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
