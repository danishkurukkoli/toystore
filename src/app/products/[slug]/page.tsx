import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, products } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { ProductPhoto } from "@/components/ProductPhoto";
import { AddToCartPanel } from "@/components/AddToCartPanel";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found — chillarakada" };
  return {
    title: `${product.name} — chillarakada`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <nav className="mb-6 text-sm text-neutral-500">
        <Link href="/" className="hover:text-pink-600">Home</Link>
        {" / "}
        <Link href="/products" className="hover:text-pink-600">Products</Link>
        {" / "}
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="hover:text-pink-600"
        >
          {product.category}
        </Link>
        {" / "}
        <span className="text-neutral-700 dark:text-neutral-300">{product.name}</span>
      </nav>

      <div className="grid gap-10 sm:grid-cols-2">
        <ProductPhoto
          slug={product.slug}
          name={product.name}
          className="aspect-square w-full rounded-3xl bg-neutral-100"
          sizes="(max-width: 640px) 100vw, 50vw"
          priority
        />

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-pink-600">
            {product.category}
          </span>
          <h1 className="mt-1 text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">
            {product.name}
          </h1>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 rounded bg-emerald-600 px-1.5 py-0.5 text-xs font-semibold text-white">
              {product.rating} ★
            </span>
            <span className="text-neutral-500">{product.reviews} ratings</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-500">Age: {product.ageGroup}</span>
          </div>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-neutral-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
            <span className="text-lg text-neutral-400 line-through">
              {formatPrice(product.mrp)}
            </span>
            <span className="font-semibold text-emerald-600">{discount}% off</span>
          </div>
          <p className="mt-1 text-xs text-neutral-500">Inclusive of all taxes</p>

          <p className="mt-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            {product.description}
          </p>

          <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-600">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <AddToCartPanel product={product} />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-neutral-500 sm:grid-cols-3">
            <span>🚚 Free delivery over ₹999</span>
            <span>↩️ 7-day easy returns</span>
            <span>🛡️ 100% safety certified</span>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 text-xl font-bold text-neutral-900 dark:text-white">
            You might also like
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
