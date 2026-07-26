"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getOrderById, type Order } from "@/lib/orders";
import { formatPrice } from "@/lib/format";
import { ProductPhoto } from "@/components/ProductPhoto";

export function OrderConfirmationClient({ id }: { id: string }) {
  const [order, setOrder] = useState<Order | null | undefined>(undefined);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read from localStorage on mount
    setOrder(getOrderById(id) ?? null);
  }, [id]);

  if (order === undefined) {
    return <div className="mx-auto max-w-3xl px-6 py-24 text-center text-neutral-500">Loading…</div>;
  }

  if (order === null) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
        <span className="text-6xl">🔍</span>
        <h1 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white">
          Order not found
        </h1>
        <p className="mt-2 text-neutral-500">
          We couldn&apos;t find this order on this device.
        </p>
        <Link
          href="/products"
          className="mt-6 rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white hover:bg-pink-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const eta = new Date(order.placedAt);
  eta.setDate(eta.getDate() + 5);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="flex flex-col items-center text-center">
        <span className="text-6xl">🎉</span>
        <h1 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white">
          Order placed successfully!
        </h1>
        <p className="mt-2 text-neutral-500">
          Thank you for shopping with chillarakada. A confirmation has been saved to your order history.
        </p>
        <p className="mt-4 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
          Order ID: {order.id}
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-sm text-neutral-500">Order Status</p>
            <p className="font-semibold text-emerald-600">{order.status}</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Estimated Delivery</p>
            <p className="font-semibold text-neutral-900 dark:text-white">
              {eta.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Payment Method</p>
            <p className="font-semibold text-neutral-900 dark:text-white">
              {order.paymentMethod === "COD"
                ? "Cash on Delivery"
                : order.paymentMethod === "UPI"
                ? "UPI"
                : "Card"}
            </p>
          </div>
        </div>

        <div className="border-t border-black/5 pt-4 dark:border-white/10">
          <p className="mb-2 text-sm font-semibold text-neutral-900 dark:text-white">
            Shipping to
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            {order.address.fullName} · {order.address.phone}
            <br />
            {order.address.line1}
            {order.address.line2 ? `, ${order.address.line2}` : ""}
            <br />
            {order.address.city}, {order.address.state} - {order.address.pincode}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-black/5 pt-4 dark:border-white/10">
          {order.items.map((item) => (
            <div key={item.productId} className="flex items-center gap-3">
              <ProductPhoto
                slug={item.slug}
                name={item.name}
                className="h-14 w-14 shrink-0 rounded-lg bg-neutral-100"
                sizes="56px"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  {item.name}
                </p>
                <p className="text-xs text-neutral-500">Qty: {item.quantity}</p>
              </div>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                {formatPrice(item.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 border-t border-black/5 pt-4 dark:border-white/10">
          <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-300">
            <span>Subtotal</span>
            <span>{formatPrice(order.subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-300">
            <span>Shipping</span>
            <span>{order.shipping === 0 ? "FREE" : formatPrice(order.shipping)}</span>
          </div>
          <div className="mt-2 flex justify-between text-base font-bold text-neutral-900 dark:text-white">
            <span>Total Paid</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/orders"
          className="rounded-full border border-neutral-300 px-6 py-3 text-center text-sm font-semibold text-neutral-700 hover:border-pink-400 hover:text-pink-600 dark:border-neutral-700 dark:text-neutral-200"
        >
          View My Orders
        </Link>
        <Link
          href="/products"
          className="rounded-full bg-pink-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-pink-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
