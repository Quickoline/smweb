"use client";

import { useState } from "react";
import { getApiBaseUrl } from "@/lib/api-config";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

const CATEGORY_TO_API: Record<string, string> = {
  software: "software_product",
  legal: "legal_compliance",
  design: "design_brand",
  hiring: "hiring_leadership",
  consultancy: "consulting",
  buying_selling: "buy_sell_advisory",
  other: "other_multiple",
};

export function OnboardingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const fd = new FormData(e.currentTarget);
    const categoryKey = String(fd.get("category_focus") || "");
    const primaryCategoryFocus = CATEGORY_TO_API[categoryKey];
    if (!primaryCategoryFocus) {
      setStatus("error");
      setMessage("Please select a primary category.");
      return;
    }

    const body = {
      businessName: String(fd.get("organization") || "").trim(),
      yourName: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || undefined,
      workEmail: String(fd.get("email") || "").trim(),
      primaryCategoryFocus,
      servicesPlanned: String(fd.get("services_planned") || "").trim(),
      portfolioUrl: String(fd.get("portfolio_url") || "").trim() || undefined,
      notes: String(fd.get("notes") || "").trim() || undefined,
    };

    try {
      const res = await fetch(`${getApiBaseUrl()}/onboarding`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (!res.ok) {
        throw new Error(data.message || `Request failed (${res.status})`);
      }
      setStatus("success");
      setMessage(data.message || "Thanks — we received your request.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      {status === "success" ? (
        <div
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
          role="status"
        >
          {message}
        </div>
      ) : null}
      {status === "error" ? (
        <div
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
          role="alert"
        >
          {message}
        </div>
      ) : null}

      <div>
        <label htmlFor="org" className="block text-sm font-medium text-slate-800">
          Business or brand name
        </label>
        <input
          id="org"
          name="organization"
          type="text"
          autoComplete="organization"
          className={inputClass}
          placeholder="e.g. Northwind Studio"
          required
          disabled={status === "loading"}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="onb-name" className="block text-sm font-medium text-slate-800">
            Your name
          </label>
          <input
            id="onb-name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputClass}
            placeholder="Full name"
            required
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="onb-phone" className="block text-sm font-medium text-slate-800">
            Phone <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input
            id="onb-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+91 …"
            disabled={status === "loading"}
          />
        </div>
      </div>
      <div>
        <label htmlFor="onb-email" className="block text-sm font-medium text-slate-800">
          Work email
        </label>
        <input
          id="onb-email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          placeholder="you@company.com"
          required
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="focus" className="block text-sm font-medium text-slate-800">
          Primary category focus
        </label>
        <select
          id="focus"
          name="category_focus"
          className={inputClass}
          defaultValue=""
          required
          disabled={status === "loading"}
        >
          <option value="" disabled>
            Select a category
          </option>
          <option value="software">Software &amp; product</option>
          <option value="legal">Legal &amp; compliance</option>
          <option value="design">Design &amp; brand</option>
          <option value="hiring">Hiring &amp; leadership</option>
          <option value="consultancy">Consulting</option>
          <option value="buying_selling">Buy / sell advisory</option>
          <option value="other">Other / multiple</option>
        </select>
      </div>
      <div>
        <label htmlFor="services" className="block text-sm font-medium text-slate-800">
          Services you plan to offer
        </label>
        <textarea
          id="services"
          name="services_planned"
          rows={4}
          className={`${inputClass} resize-y`}
          placeholder="Short list of offerings, typical price range, and geography."
          required
          minLength={10}
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="portfolio" className="block text-sm font-medium text-slate-800">
          Website or portfolio URL{" "}
          <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <input
          id="portfolio"
          name="portfolio_url"
          type="url"
          inputMode="url"
          className={inputClass}
          placeholder="https://"
          disabled={status === "loading"}
        />
      </div>
      <div>
        <label htmlFor="onb-notes" className="block text-sm font-medium text-slate-800">
          Anything else we should know?
        </label>
        <textarea
          id="onb-notes"
          name="notes"
          rows={3}
          className={`${inputClass} resize-y`}
          placeholder="Team size, certifications, or timeline to go live."
          disabled={status === "loading"}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-brand-600 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Submit onboarding request"}
      </button>
      <p className="text-center text-xs text-slate-500">
        Uses <code className="rounded bg-slate-100 px-1">POST /onboarding</code> on{" "}
        <code className="rounded bg-slate-100 px-1">NEXT_PUBLIC_API_BASE_URL</code>.
      </p>
    </form>
  );
}
