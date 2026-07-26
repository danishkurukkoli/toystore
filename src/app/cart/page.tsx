"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { ProductPhoto } from "@/components/ProductPhoto";

const FREE_SHIPPING_THRESHOLD = 999;
const SHIPPING_FEE = 79;

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, isHydrated } = useCart();
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  if (isHydrated && items.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
        <span className="text-6xl">🛒</span>
        <h1 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white">
          Your cart is empty
        </h1>
        <p className="mt-2 text-neutral-500">
          Looks like you haven&apos;t added any toys yet. Let&apos;s fix that!
        </p>
        <Link
          href="/products"
          className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-700"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
        Your Cart {items.length > 0 && `(${items.length} item${items.length > 1 ? "s" : ""})`}
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.productId}
              className="flex gap-4 rounded-2xl border border-black/5 bg-white p-4 dark:border-white/10 dark:bg-neutral-900"
            >
              <Link href={`/products/${item.slug}`} className="shrink-0">
                <ProductPhoto
                  slug={item.slug}
                  name={item.name}
                  className="h-24 w-24 rounded-xl bg-neutral-100"
                  sizes="96px"
                />
              </Link>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <Link
                    href={`/products/${item.slug}`}
                    className="font-semibold text-neutral-900 hover:text-pink-600 dark:text-white"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-neutral-500">
                    {formatPrice(item.price)} each
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-black/10 dark:border-white/10">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="px-3 py-1 text-lg text-neutral-600 hover:text-pink-600"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="px-3 py-1 text-lg text-neutral-600 hover:text-pink-600"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-sm font-medium text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="shrink-0 text-right font-semibold text-neutral-900 dark:text-white">
                {formatPrice(item.price * item.quantity)}
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
          <h2 className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
            Order Summary
          </h2>
          <div className="flex justify-between py-1 text-sm text-neutral-600 dark:text-neutral-300">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between py-1 text-sm text-neutral-600 dark:text-neutral-300">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
          </div>
          {shipping > 0 && (
            <p className="mt-1 text-xs text-emerald-600">
              Add {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping
            </p>
          )}
          <div className="mt-3 flex justify-between border-t border-black/5 pt-3 text-base font-bold text-neutral-900 dark:border-white/10 dark:text-white">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-5 block rounded-full bg-pink-600 py-3 text-center text-sm font-semibold text-white hover:bg-pink-700"
          >
            Proceed to Checkout
          </Link>
          <Link
            href="/products"
            className="mt-3 block text-center text-sm font-medium text-neutral-500 hover:text-pink-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
