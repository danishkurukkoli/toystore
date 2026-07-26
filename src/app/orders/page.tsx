"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getOrders, type Order } from "@/lib/orders";
import { formatPrice } from "@/lib/format";
import { ProductPhoto } from "@/components/ProductPhoto";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read from localStorage on mount
    setOrders(getOrders());
  }, []);

  if (orders === null) {
    return <div className="mx-auto max-w-4xl px-6 py-24 text-center text-neutral-500">Loading…</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
        <span className="text-6xl">📦</span>
        <h1 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white">
          No orders yet
        </h1>
        <p className="mt-2 text-neutral-500">
          Your placed orders will show up here on this device.
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
    <div className="mx-auto max-w-4xl px-6 py-8">
      <h1 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">My Orders</h1>
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <Link
            key={order.id}
            href={`/order/${order.id}`}
            className="block rounded-2xl border border-black/5 bg-white p-5 transition hover:shadow-md dark:border-white/10 dark:bg-neutral-900"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/5 pb-3 dark:border-white/10">
              <div>
                <p className="text-xs text-neutral-500">Order ID</p>
                <p className="font-semibold text-neutral-900 dark:text-white">{order.id}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Placed On</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {new Date(order.placedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Status</p>
                <p className="text-sm font-semibold text-emerald-600">{order.status}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Total</p>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {formatPrice(order.total)}
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {order.items.map((item) => (
                <ProductPhoto
                  key={item.productId}
                  slug={item.slug}
                  name={item.name}
                  className="h-14 w-14 shrink-0 rounded-lg bg-neutral-100"
                  sizes="56px"
                />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
