import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Learn how Service Marketplace connects you with providers—from discovery to payment.",
};

const phases = [
  {
    title: "Browse & compare",
    body:
      "Explore categories such as software, legal, design, hiring, and consulting. Each listing is organized so you can compare scope, pricing signals, and fit before you commit.",
  },
  {
    title: "Create an order",
    body:
      "When you find the right service, you book a structured order. That becomes the single source of truth for what was agreed—so both sides stay aligned.",
  },
  {
    title: "Connect & collaborate",
    body:
      "When your order is active, you can chat in context with your provider. No more lost context across email threads or random tools.",
  },
  {
    title: "Pay with confidence",
    body:
      "When it is time to pay, you will see payment options that match your provider. Wallet and verification flows keep your history clear and auditable.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Process</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          How Service Marketplace works
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
          We designed the marketplace around a simple loop: discover, book, collaborate, and
          complete—without friction. Here is how the pieces fit together.
        </p>

        {/* Numbered steps: dedicated column so badges never overlap copy */}
        <ol className="mt-16 max-w-3xl space-y-0">
          {phases.map((p, i) => (
            <li key={p.title} className="flex gap-5 sm:gap-8">
              <div className="flex w-14 shrink-0 flex-col items-center sm:w-16">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-sm font-bold tabular-nums text-white shadow-md ring-4 ring-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                {i < phases.length - 1 ? (
                  <span
                    className="mt-4 w-px flex-1 min-h-[3rem] bg-gradient-to-b from-brand-200 to-brand-100"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div
                className={`min-w-0 flex-1 ${i < phases.length - 1 ? "pb-12" : "pb-0"}`}
              >
                <h2 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">
                  {p.title}
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{p.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <h2 className="font-display text-xl font-semibold text-slate-900">For providers</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Providers can list services, manage orders, verify payments, and keep conversations
            tied to the work that matters. If you are onboarding a team, start with a clear
            category and service description.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
            <Link
              href="/become-a-provider"
              className="font-semibold text-brand-600 transition hover:text-brand-700"
            >
              Become a service provider →
            </Link>
            <Link
              href="/request-onboarding"
              className="font-semibold text-brand-600 transition hover:text-brand-700"
            >
              Request onboarding →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
          >
            Contact us
          </Link>
          <Link
            href="/request-onboarding"
            className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Request onboarding
          </Link>
          <Link
            href="/become-a-provider"
            className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Become a provider
          </Link>
          <Link
            href="/"
            className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
