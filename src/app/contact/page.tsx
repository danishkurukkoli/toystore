import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — chillarakada",
  description: "Get in touch with the chillarakada team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-3xl font-extrabold text-neutral-900">Contact Us</h1>
      <p className="mt-3 text-neutral-600">
        Have a question about an order or a product? Reach out any time.
      </p>

      <div className="mt-6 grid gap-3 text-sm text-neutral-600 sm:grid-cols-3">
        <div className="rounded-2xl border border-black/5 bg-white p-4">
          <p className="font-semibold text-neutral-900">Email</p>
          <a href="mailto:chillarakada@gmail.com" className="hover:text-pink-600">
            chillarakada@gmail.com
          </a>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-4">
          <p className="font-semibold text-neutral-900">Phone</p>
          <a href="tel:+919148628774" className="hover:text-pink-600">
            +91 91486 28774
          </a>
        </div>
        <div className="rounded-2xl border border-black/5 bg-white p-4">
          <p className="font-semibold text-neutral-900">Address</p>
          <p>Vailathur, Malappuram, Kerala 676551</p>
        </div>
      </div>

      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
