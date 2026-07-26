"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { getOrderById, type Order } from "@/lib/orders";
import { formatPrice } from "@/lib/format";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [result, setResult] = useState<Order | null | undefined>(undefined);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setResult(getOrderById(orderId.trim()) ?? null);
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <h1 className="text-3xl font-extrabold text-neutral-900">Track Your Order</h1>
      <p className="mt-3 text-neutral-600">
        Enter the Order ID from your confirmation email or{" "}
        <Link href="/orders" className="text-pink-600 hover:underline">
          My Orders
        </Link>{" "}
        to see its status.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
        <input
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="e.g. CHK-052935LHT15X"
          required
          className="flex-1 rounded-full border border-black/10 bg-neutral-50 px-4 py-2.5 text-sm outline-none focus:border-pink-400"
        />
        <button
          type="submit"
          className="rounded-full bg-pink-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-pink-700"
        >
          Track
        </button>
      </form>

      {result === null && (
        <p className="mt-6 rounded-2xl border border-black/5 bg-white p-5 text-sm text-neutral-500">
          No order found with that ID on this device. Order history is stored
          locally in your browser, so orders placed on another device or
          browser won&apos;t show up here.
        </p>
      )}

      {result && (
        <div className="mt-6 rounded-2xl border border-black/5 bg-white p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs text-neutral-500">Order ID</p>
              <p className="font-semibold text-neutral-900">{result.id}</p>
            </div>
            <div>
              <p className="text-xs text-neutral-500">Status</p>
              <p className="font-semibold text-emerald-600">{result.status}</p>
            </div>
            <div>
              <p className="text-xs text-neutral-500">Total</p>
              <p className="font-semibold text-neutral-900">{formatPrice(result.total)}</p>
            </div>
          </div>
          <Link
            href={`/order/${result.id}`}
            className="mt-4 inline-block text-sm font-medium text-pink-600 hover:underline"
          >
            View full order details →
          </Link>
        </div>
      )}
    </div>
  );
}
