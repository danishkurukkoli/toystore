"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleBuyNow() {
    addItem(product, quantity);
    router.push("/checkout");
  }

  if (product.stock === 0) {
    return (
      <div className="rounded-xl bg-neutral-100 px-4 py-3 text-sm font-semibold text-neutral-500 dark:bg-neutral-900">
        Currently out of stock
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Quantity
        </span>
        <div className="flex items-center rounded-full border border-black/10 dark:border-white/10">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 text-lg text-neutral-600 hover:text-pink-600"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
            className="px-3 py-1 text-lg text-neutral-600 hover:text-pink-600"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <span className="text-xs text-neutral-400">{product.stock} in stock</span>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleAdd}
          className="flex-1 rounded-full border border-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-700"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
