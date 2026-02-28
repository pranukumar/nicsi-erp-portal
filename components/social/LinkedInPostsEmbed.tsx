"use client";

const posts = [
  "https://www.linkedin.com/embed/feed/update/urn:li:share:POST_URN_ID_1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:POST_URN_ID_2",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:POST_URN_ID_3",
];

export default function LinkedInPostsEmbed() {
  const hasConfiguredPosts = posts.every((src) => !src.includes("POST_URN_ID_"));

  if (!hasConfiguredPosts) {
    return (
      <p className="text-sm text-gray-600">
        LinkedIn embed activate karne ke liye `POST_URN_ID_*` ko actual share URN se replace karein.
      </p>
    );
  }

  return (
    <section className="grid gap-4 md:grid-cols-3">
      {posts.map((src) => (
        <div key={src} className="rounded-2xl border bg-white p-2 shadow-sm">
          <iframe
            src={src}
            height={780}
            className="w-full"
            style={{ border: 0 }}
            allowFullScreen
            title="LinkedIn embedded post"
          />
        </div>
      ))}
    </section>
  );
}
