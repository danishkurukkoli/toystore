import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — chillarakada",
  description: "Tips on toys, play, and child development from the chillarakada team.",
};

const posts = [
  {
    title: "5 Toys That Grow With Your Child",
    excerpt:
      "Open-ended toys like building blocks and magnetic tiles keep kids engaged for years, not months. Here's what to look for.",
    emoji: "🧱",
  },
  {
    title: "Choosing Age-Appropriate Toys",
    excerpt:
      "A quick guide to reading age recommendations and safety labels so you can shop with confidence.",
    emoji: "🎯",
  },
  {
    title: "The Case for Screen-Free Play",
    excerpt:
      "Why puzzles, board games, and pretend play still matter in a screen-filled world.",
    emoji: "🧩",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="text-3xl font-extrabold text-neutral-900">Blog</h1>
      <p className="mt-3 text-neutral-600">
        Notes on toys, play, and raising curious kids.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-2xl border border-black/5 bg-white p-5"
          >
            <span className="text-3xl">{post.emoji}</span>
            <h2 className="mt-3 font-semibold text-neutral-900">{post.title}</h2>
            <p className="mt-1 text-sm text-neutral-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-neutral-400">More posts coming soon.</p>
    </div>
  );
}
