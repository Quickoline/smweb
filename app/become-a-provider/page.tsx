import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Become a service provider",
  description:
    "List your services on Service Marketplace—manage orders, chat with clients, and get paid.",
};

const benefits = [
  {
    title: "Structured orders",
    body: "Every booking is tied to a service and status—so scope and expectations stay clear.",
  },
  {
    title: "In-app chat",
    body: "Keep client conversations next to the order instead of scattered across inboxes.",
  },
  {
    title: "Payments & verification",
    body: "Share payment links or QR where applicable; verification flows help you stay organized.",
  },
];

const onboarding = [
  {
    step: 1,
    title: "Create your admin account",
    body: "Submit the dedicated request onboarding form—we follow up with access for your organization.",
  },
  {
    step: 2,
    title: "Publish services",
    body: "Add services with category, subcategory, price, and a clear description of deliverables.",
  },
  {
    step: 3,
    title: "Fulfill & get paid",
    body: "Accept orders, chat with clients, and mark work complete when payment is ready.",
  },
];

export default function BecomeAProviderPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            Providers
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Become a service provider
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Reach clients who are already browsing by category—software, legal, design, hiring,
            consulting, and more. One marketplace for discovery, collaboration, and payouts.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/request-onboarding"
              className="inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
            >
              Request onboarding
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              How the marketplace works
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
          Why list here
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Built for professionals who want fewer tools and clearer client relationships.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
            Getting started
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Three steps to go live—same clear layout as our client “how it works” page.
          </p>

          <ol className="mt-12 max-w-3xl space-y-0">
            {onboarding.map((row, i) => (
              <li key={row.step} className="flex gap-5 sm:gap-8">
                <div className="flex w-14 shrink-0 flex-col items-center sm:w-16">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-sm font-bold tabular-nums text-white shadow-md ring-4 ring-slate-50"
                    aria-hidden
                  >
                    {row.step}
                  </span>
                  {i < onboarding.length - 1 ? (
                    <span
                      className="mt-4 w-px flex-1 min-h-[3rem] bg-gradient-to-b from-brand-200 to-brand-100"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div className={`min-w-0 flex-1 ${i < onboarding.length - 1 ? "pb-12" : "pb-0"}`}>
                  <h3 className="font-display text-lg font-semibold text-slate-900 sm:text-xl">
                    {row.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{row.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-3xl bg-brand-600 px-8 py-12 text-center sm:px-12">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Ready to join as a provider?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Tell us about your services and we will follow up with onboarding details and access.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-onboarding"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
            >
              Request onboarding
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              General contact
            </Link>
            <Link
              href="/"
              className="inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
