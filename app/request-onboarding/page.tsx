import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request provider onboarding",
  description:
    "Apply to list your services on Service Marketplace—separate from general contact.",
};

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

export default function RequestOnboardingPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <nav className="text-sm text-slate-600">
          <Link href="/become-a-provider" className="font-medium text-brand-600 hover:text-brand-700">
            ← Become a provider
          </Link>
        </nav>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Provider onboarding
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Request onboarding
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              This form is only for teams and professionals who want to{" "}
              <strong className="font-semibold text-slate-800">list services</strong> on the
              marketplace. For client projects or support, use{" "}
              <Link href="/contact" className="font-semibold text-brand-600 hover:text-brand-700">
                Contact
              </Link>
              .
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-brand-600">✓</span>
                <span>We review your profile and categories (usually within a few business days).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-600">✓</span>
                <span>You will receive next steps for admin access and listing your services.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm sm:p-8">
            <form className="space-y-5" action="#" method="post">
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
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-600 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
              >
                Submit onboarding request
              </button>
              <p className="text-center text-xs text-slate-500">
                Static demo—connect this action to your backend or form service when ready.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
