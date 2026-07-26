"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useCart } from "@/lib/cart-context";

export function Header() {
  const { itemCount } = useCart();
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    router.push(query.trim() ? `/products?q=${encodeURIComponent(query)}` : "/products");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-6 sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl">🧸</span>
          <span className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            chillar<span className="text-pink-600">akada</span>
          </span>
        </Link>

        <form onSubmit={handleSearch} className="flex-1">
          <div className="flex items-center overflow-hidden rounded-full border border-black/10 bg-neutral-50 focus-within:border-pink-400 dark:border-white/10 dark:bg-neutral-900">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search for toys, games, and more..."
              className="w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-neutral-400"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-neutral-500 hover:text-pink-600"
              aria-label="Search"
            >
              🔍
            </button>
          </div>
        </form>

        <nav className="flex items-center gap-5 text-sm font-medium text-neutral-700 dark:text-neutral-200">
          <Link href="/products" className="hidden hover:text-pink-600 sm:inline">
            Shop All
          </Link>
          <Link href="/orders" className="hidden hover:text-pink-600 sm:inline">
            My Orders
          </Link>
          <Link href="/cart" className="relative flex items-center gap-1 hover:text-pink-600">
            <span className="text-xl">🛒</span>
            <span>Cart</span>
            {itemCount > 0 && (
              <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-600 px-1 text-xs font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
      <div className="hidden border-t border-black/5 bg-neutral-50 dark:border-white/10 dark:bg-neutral-900/50 sm:block">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-300">
          <Link href="/products?category=Building+Blocks" className="whitespace-nowrap hover:text-pink-600">Building Blocks</Link>
          <Link href="/products?category=Soft+Toys" className="whitespace-nowrap hover:text-pink-600">Soft Toys</Link>
          <Link href="/products?category=Action+Figures" className="whitespace-nowrap hover:text-pink-600">Action Figures</Link>
          <Link href="/products?category=Dolls+%26+Playsets" className="whitespace-nowrap hover:text-pink-600">Dolls & Playsets</Link>
          <Link href="/products?category=Remote+Control" className="whitespace-nowrap hover:text-pink-600">Remote Control</Link>
          <Link href="/products?category=Educational" className="whitespace-nowrap hover:text-pink-600">Educational</Link>
          <Link href="/products?category=Puzzles+%26+Board+Games" className="whitespace-nowrap hover:text-pink-600">Puzzles & Board Games</Link>
          <Link href="/products?category=Outdoor" className="whitespace-nowrap hover:text-pink-600">Outdoor</Link>
        </div>
      </div>
    </header>
  );
}
