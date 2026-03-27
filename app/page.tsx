import Link from "next/link";

const categories = [
  {
    title: "Software & product",
    desc: "Web, mobile, and full-stack delivery with clear scopes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Legal & compliance",
    desc: "Contracts, corporate filings, and counsel-backed review.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Design & brand",
    desc: "Identity systems, UI/UX, and production-ready handoff.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Hiring & leadership",
    desc: "Structured search, screening, and executive mandates.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const steps = [
  { t: "Discover", d: "Browse categories and compare offerings side by side." },
  { t: "Book", d: "Create an order and connect with your provider in-app." },
  { t: "Pay & track", d: "Pay securely and follow status until completion." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-white hero-grid">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-800">
            One marketplace · Many services
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1]">
            Hire trusted professionals{" "}
            <span className="text-brand-600">without the noise.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Service Marketplace brings software, legal, design, hiring, and consulting into a
            single, modern flow—so you spend less time coordinating and more time shipping.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/how-it-works"
              className="inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
            >
              See how it works
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">
            Built for serious projects
          </h2>
          <p className="mt-3 text-slate-600">
            Whether you are launching a product or closing a compliance gap, the same principles
            apply: clarity, accountability, and a clean handoff.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-100">
                {c.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">
                From browse to done—in three steps
              </h2>
              <p className="mt-3 text-slate-600">
                A simple journey that keeps everyone aligned: you, your provider, and your
                outcomes.
              </p>
              <ol className="mt-10 max-w-xl space-y-0">
                {steps.map((s, i) => (
                  <li key={s.t} className="flex gap-4 sm:gap-5">
                    <div className="flex w-12 shrink-0 flex-col items-center sm:w-14">
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-sm font-bold tabular-nums text-white shadow-sm ring-4 ring-slate-50"
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      {i < steps.length - 1 ? (
                        <span
                          className="mt-3 w-px flex-1 min-h-[1.25rem] bg-gradient-to-b from-brand-200 to-brand-100"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                    <div className={`min-w-0 flex-1 ${i < steps.length - 1 ? "pb-8" : "pb-0"}`}>
                      <p className="font-semibold leading-snug text-slate-900">{s.t}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                Why teams choose us
              </p>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 text-brand-600">✓</span>
                  <span>Structured categories so you find the right specialist fast.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-brand-600">✓</span>
                  <span>Orders and messaging keep context in one thread.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-brand-600">✓</span>
                  <span>Payments and wallet history designed for transparency.</span>
                </li>
              </ul>
              <div className="mt-8 rounded-2xl bg-brand-50 px-5 py-4 text-sm text-brand-900">
                Use the mobile app to browse categories, book services, chat with providers, and
                pay when your order is ready.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl bg-brand-600 px-8 py-14 text-center sm:px-16">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Ready to start your next engagement?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Tell us what you need—we will help you navigate categories, providers, and next steps.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
            >
              Contact
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
