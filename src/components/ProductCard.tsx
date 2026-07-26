"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import { ProductPhoto } from "./ProductPhoto";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 dark:border-white/10 dark:bg-neutral-900">
      <Link href={`/products/${product.slug}`} className="block">
        <ProductPhoto slug={product.slug} name={product.name} className="h-44 w-full bg-neutral-100" />
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-pink-600 dark:text-pink-400">
          {product.category}
        </span>
        <Link href={`/products/${product.slug}`}>
          <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-semibold text-neutral-900 hover:text-pink-600 dark:text-neutral-100 dark:hover:text-pink-400">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 text-xs text-amber-500">
          <span>★ {product.rating}</span>
          <span className="text-neutral-400">({product.reviews})</span>
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-bold text-neutral-900 dark:text-white">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-neutral-400 line-through">
            {formatPrice(product.mrp)}
          </span>
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            {discount}% off
          </span>
        </div>
        <button
          onClick={() => addItem(product, 1)}
          disabled={product.stock === 0}
          className="mt-2 w-full rounded-full bg-neutral-900 py-2 text-sm font-semibold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:bg-neutral-300 dark:bg-white dark:text-neutral-900 dark:hover:bg-pink-400"
        >
          {product.stock === 0 ? "Out of stock" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}
