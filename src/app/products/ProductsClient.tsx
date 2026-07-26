"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type SortOption = "popular" | "price-asc" | "price-desc" | "rating";

export function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category") || "All";
  const initialQuery = searchParams.get("q") || "";

  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState<SortOption>("popular");

  function selectCategory(cat: string) {
    setCategory(cat);
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") params.delete("category");
    else params.set("category", cat);
    router.replace(`/products?${params.toString()}`);
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      category === "All" ? true : p.category === category
    );
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        list = [...list].sort((a, b) => b.reviews - a.reviews);
    }
    return list;
  }, [category, query, sort]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
          {category === "All" ? "All Toys" : category}
        </h1>
        <p className="text-sm text-neutral-500">
          {filtered.length} {filtered.length === 1 ? "product" : "products"}
          {query ? ` for "${query}"` : ""}
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row">
        <aside className="lg:w-56 shrink-0">
          <div className="mb-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search toys..."
              className="w-full rounded-full border border-black/10 bg-neutral-50 px-4 py-2 text-sm outline-none focus:border-pink-400 dark:border-white/10 dark:bg-neutral-900"
            />
          </div>
          <h3 className="mb-2 text-sm font-semibold text-neutral-900 dark:text-white">
            Category
          </h3>
          <ul className="flex flex-row flex-wrap gap-2 lg:flex-col">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => selectCategory(cat)}
                  className={`w-full rounded-full px-3 py-1.5 text-left text-sm transition lg:rounded-lg ${
                    category === cat
                      ? "bg-pink-600 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-pink-50 hover:text-pink-600 dark:bg-neutral-900 dark:text-neutral-300"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex-1">
          <div className="mb-4 flex justify-end">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm outline-none dark:border-white/10 dark:bg-neutral-900"
            >
              <option value="popular">Sort: Most Popular</option>
              <option value="rating">Sort: Highest Rated</option>
              <option value="price-asc">Sort: Price Low to High</option>
              <option value="price-desc">Sort: Price High to Low</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-neutral-500">
              No toys found. Try a different search or category.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
