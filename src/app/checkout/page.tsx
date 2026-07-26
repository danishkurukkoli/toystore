"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import { generateOrderId, saveOrder, type Address, type Order } from "@/lib/orders";

const FREE_SHIPPING_THRESHOLD = 999;
const SHIPPING_FEE = 79;

export default function CheckoutPage() {
  const { items, subtotal, clearCart, isHydrated } = useCart();
  const router = useRouter();
  const paymentMethod = "COD" as const;
  const [placing, setPlacing] = useState(false);
  const [address, setAddress] = useState<Address>({
    fullName: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  function updateAddress<K extends keyof Address>(key: K, value: Address[K]) {
    setAddress((prev) => ({ ...prev, [key]: value }));
  }

  function handlePlaceOrder(e: FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;
    setPlacing(true);

    const order: Order = {
      id: generateOrderId(),
      items: items.map((i) => ({
        productId: i.productId,
        slug: i.slug,
        name: i.name,
        price: i.price,
        quantity: i.quantity,
      })),
      address,
      paymentMethod,
      subtotal,
      shipping,
      total,
      placedAt: new Date().toISOString(),
      status: "Confirmed",
    };

    saveOrder(order);
    clearCart();
    setTimeout(() => {
      router.push(`/order/${order.id}`);
    }, 500);
  }

  if (isHydrated && items.length === 0 && !placing) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
        <span className="text-6xl">🧾</span>
        <h1 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white">
          Nothing to check out
        </h1>
        <p className="mt-2 text-neutral-500">Add some toys to your cart first.</p>
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
      <h1 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">Checkout</h1>
      <form onSubmit={handlePlaceOrder} className="grid gap-8 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <section className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
              1. Shipping Address
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Full Name"
                value={address.fullName}
                onChange={(v) => updateAddress("fullName", v)}
                required
              />
              <Field
                label="Phone Number"
                type="tel"
                pattern="[0-9]{10}"
                value={address.phone}
                onChange={(v) => updateAddress("phone", v)}
                required
              />
              <Field
                label="Address Line 1"
                value={address.line1}
                onChange={(v) => updateAddress("line1", v)}
                required
                className="sm:col-span-2"
              />
              <Field
                label="Address Line 2 (optional)"
                value={address.line2 ?? ""}
                onChange={(v) => updateAddress("line2", v)}
                className="sm:col-span-2"
              />
              <Field
                label="City"
                value={address.city}
                onChange={(v) => updateAddress("city", v)}
                required
              />
              <Field
                label="State"
                value={address.state}
                onChange={(v) => updateAddress("state", v)}
                required
              />
              <Field
                label="Pincode"
                pattern="[0-9]{6}"
                value={address.pincode}
                onChange={(v) => updateAddress("pincode", v)}
                required
              />
            </div>
          </section>

          <section className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
              2. Payment Method
            </h2>
            <div className="mb-4 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                className="flex-1 rounded-xl border border-pink-600 bg-pink-50 px-4 py-3 text-sm font-semibold text-pink-700 dark:bg-pink-900/30 dark:text-pink-300"
              >
                💵 Cash on Delivery
              </button>
              <button
                type="button"
                disabled
                title="Coming soon"
                className="flex-1 cursor-not-allowed rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold text-neutral-400 dark:border-white/10 dark:text-neutral-600"
              >
                📱 UPI <span className="text-xs font-normal">(Coming soon)</span>
              </button>
              <button
                type="button"
                disabled
                title="Coming soon"
                className="flex-1 cursor-not-allowed rounded-xl border border-black/10 px-4 py-3 text-sm font-semibold text-neutral-400 dark:border-white/10 dark:text-neutral-600"
              >
                💳 Credit / Debit Card <span className="text-xs font-normal">(Coming soon)</span>
              </button>
            </div>

            <p className="text-sm text-neutral-500">
              Pay with cash when your order arrives at your doorstep. Card and UPI payments are coming soon.
            </p>
          </section>
        </div>

        <div className="h-fit rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
          <h2 className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
            Order Summary
          </h2>
          <ul className="mb-3 flex max-h-56 flex-col gap-2 overflow-y-auto text-sm">
            {items.map((i) => (
              <li key={i.productId} className="flex justify-between text-neutral-600 dark:text-neutral-300">
                <span className="line-clamp-1">
                  {i.name} × {i.quantity}
                </span>
                <span className="shrink-0 pl-2">{formatPrice(i.price * i.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between py-1 text-sm text-neutral-600 dark:text-neutral-300">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between py-1 text-sm text-neutral-600 dark:text-neutral-300">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-black/5 pt-3 text-base font-bold text-neutral-900 dark:border-white/10 dark:text-white">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <button
            type="submit"
            disabled={placing || items.length === 0}
            className="mt-5 w-full rounded-full bg-pink-600 py-3 text-sm font-semibold text-white transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
          >
            {placing ? "Placing order..." : `Place Order — ${formatPrice(total)}`}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  pattern,
  placeholder,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  pattern?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1 text-sm ${className}`}>
      <span className="font-medium text-neutral-700 dark:text-neutral-300">
        {label} {required && <span className="text-pink-600">*</span>}
      </span>
      <input
        type={type}
        required={required}
        pattern={pattern}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-black/10 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-pink-400 dark:border-white/10 dark:bg-neutral-950"
      />
    </label>
  );
}
