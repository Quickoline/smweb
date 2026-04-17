"use client";

import Link from "next/link";
import { useState } from "react";
import { getApiBaseUrl } from "@/lib/api-config";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch(`${getApiBaseUrl()}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(typeof data.message === "string" ? data.message : "Something went wrong.");
        return;
      }
      setStatus("done");
      setMessage(
        typeof data.message === "string"
          ? data.message
          : "If an account exists for that email, we sent instructions."
      );
    } catch {
      setStatus("error");
      setMessage("Network error. Check your connection and try again.");
    }
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-lg px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Account</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Forgot password
        </h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Enter the email you registered with. If it matches an account, we&apos;ll send a reset link.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-brand-600 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700 disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send reset link"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-6 text-sm ${status === "error" ? "text-red-600" : "text-slate-600"}`}
            role="status"
          >
            {message}
          </p>
        )}

        <p className="mt-10 text-center text-sm text-slate-500">
          <Link href="/" className="font-medium text-brand-600 hover:text-brand-700">
            Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
