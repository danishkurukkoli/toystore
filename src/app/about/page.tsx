import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — chillarakada",
  description: "Learn about chillarakada, India's favourite little toy shop.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-extrabold text-neutral-900">About Us</h1>
      <p className="mt-4 text-neutral-600">
        chillarakada started with a simple idea: toy shopping should feel as
        joyful as playtime itself. We hand-pick every toy in our catalog for
        safety, durability, and the spark of imagination it brings — from
        stacking rings for the newest members of the family to remote control
        cars for your budding racer.
      </p>
      <p className="mt-4 text-neutral-600">
        We&apos;re based in Kerala and ship toys to families across India,
        backed by safety-certified materials and a hassle-free returns
        policy.
      </p>
    </div>
  );
}
