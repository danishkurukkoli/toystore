import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — chillarakada",
  description: "Shipping, warranty, size guide, and other frequently asked questions.",
};

const faqs = [
  {
    id: "shipping",
    q: "Shipping Info",
    a: "Orders are dispatched within 24 hours. Shipping is free on orders over ₹999; otherwise a flat ₹79 shipping fee applies. Most orders arrive within 5 days.",
  },
  {
    id: "warranty",
    q: "Warranty Policy",
    a: "All toys are covered by a 6-month manufacturing defect warranty. If a toy arrives damaged or stops working under normal use, contact us for a free replacement.",
  },
  {
    id: "size-guide",
    q: "Size Guide",
    a: "Each product page lists the recommended age group and dimensions where relevant. If you're unsure whether a toy is right for your child's age, reach out and we'll help you choose.",
  },
  {
    id: "returns",
    q: "Returns",
    a: "We offer easy 7-day returns on unopened, unused items. Reach out via the Contact page to start a return.",
  },
  {
    id: "tracking",
    q: "How do I track my order?",
    a: "Use the Track Order page with your Order ID (shown on your confirmation page and in My Orders) to see its current status.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-extrabold text-neutral-900">
        Frequently Asked Questions
      </h1>
      <div className="mt-8 flex flex-col gap-4">
        {faqs.map((item) => (
          <section
            key={item.id}
            id={item.id}
            className="scroll-mt-24 rounded-2xl border border-black/5 bg-white p-5"
          >
            <h2 className="font-semibold text-neutral-900">{item.q}</h2>
            <p className="mt-1 text-sm text-neutral-600">{item.a}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
