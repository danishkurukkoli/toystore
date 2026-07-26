import Link from "next/link";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductPhoto } from "@/components/ProductPhoto";

const categoryMeta: Record<string, { slug: string }> = {
  "Building Blocks": { slug: "brickmaster-city-builder-500pc" },
  "Soft Toys": { slug: "cuddlekins-plush-teddy-bear" },
  "Action Figures": { slug: "galaxy-guardian-action-figure" },
  "Dolls & Playsets": { slug: "sunshine-dream-dollhouse" },
  "Remote Control": { slug: "turbo-racer-rc-car" },
  Educational: { slug: "wooden-shape-sorter-puzzle" },
  "Puzzles & Board Games": { slug: "kingdom-quest-1000pc-jigsaw" },
  Outdoor: { slug: "bounce-buddy-space-hopper" },
};

const heroSlugs = [
  "cuddlekins-plush-teddy-bear",
  "skyhopper-drone-kids",
  "kingdom-quest-1000pc-jigsaw",
  "turbo-racer-rc-car",
  "mega-dino-figure-set",
  "brickmaster-city-builder-500pc",
];

export default function Home() {
  const bestSellers = [...products]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 8);
  const newArrivals = [...products].slice(-8).reverse();

  return (
    <div>
      <section className="bg-gradient-to-br from-pink-50 via-amber-50 to-sky-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 sm:grid-cols-2 sm:py-20">
          <div>
            <p className="mb-3 inline-block rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
              Free shipping on orders over ₹999
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-neutral-900 dark:text-white sm:text-5xl">
              Play more.
              <br />
              <span className="text-pink-600">Worry less.</span>
            </h1>
            <p className="mt-4 max-w-md text-neutral-600 dark:text-neutral-300">
              chillarakada brings you safe, joyful, and imagination-sparking
              toys for every age — from stacking rings for infants to RC cars
              for your budding racer.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/products"
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-600 dark:bg-white dark:text-neutral-900"
              >
                Shop All Toys
              </Link>
              <Link
                href="/products?category=Educational"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-pink-400 hover:text-pink-600 dark:border-neutral-700 dark:text-neutral-200"
              >
                Educational Toys
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {heroSlugs.map((slug) => (
              <ProductPhoto
                key={slug}
                slug={slug}
                name={slug}
                className="aspect-square rounded-2xl bg-white/70 shadow-sm dark:bg-white/5"
                sizes="(max-width: 640px) 33vw, 150px"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="mb-5 text-xl font-bold text-neutral-900 dark:text-white">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories
            .filter((c) => c !== "All")
            .map((cat) => {
              const meta = categoryMeta[cat];
              return (
                <Link
                  key={cat}
                  href={`/products?category=${encodeURIComponent(cat)}`}
                  className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-neutral-900"
                >
                  <ProductPhoto
                    slug={meta.slug}
                    name={cat}
                    className="h-24 w-full bg-neutral-100"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <p className="px-3 py-2 text-center text-sm font-semibold text-neutral-800 group-hover:text-pink-600 dark:text-neutral-100">
                    {cat}
                  </p>
                </Link>
              );
            })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
            Best Sellers
          </h2>
          <Link href="/products" className="text-sm font-medium text-pink-600 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
            New Arrivals
          </h2>
          <Link href="/products" className="text-sm font-medium text-pink-600 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { emoji: "🚚", title: "Fast Delivery", desc: "Dispatched within 24 hours" },
            { emoji: "🛡️", title: "Safety Certified", desc: "Non-toxic & child-safe materials" },
            { emoji: "↩️", title: "Easy Returns", desc: "7-day hassle-free return policy" },
          ].map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-neutral-900"
            >
              <span className="text-3xl">{f.emoji}</span>
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white">{f.title}</p>
                <p className="text-sm text-neutral-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
