import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Shop All Toys — chillarakada",
  description: "Browse building blocks, soft toys, action figures, dolls, RC toys, and more at chillarakada.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-6 py-8">Loading…</div>}>
      <ProductsClient />
    </Suspense>
  );
}
