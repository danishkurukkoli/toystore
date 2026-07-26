"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-black/5 bg-white p-6 text-center">
        <p className="text-lg font-semibold text-neutral-900">Thanks, {name}!</p>
        <p className="mt-1 text-sm text-neutral-500">
          Your message has been noted. Since this is a demo store, no real
          reply will be sent — but on a live site we&apos;d get back to you
          within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6">
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-neutral-700">Name</span>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-black/10 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-pink-400"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-neutral-700">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-black/10 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-pink-400"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-neutral-700">Message</span>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-lg border border-black/10 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-pink-400"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-pink-600 py-3 text-sm font-semibold text-white hover:bg-pink-700"
      >
        Send Message
      </button>
    </form>
  );
}
