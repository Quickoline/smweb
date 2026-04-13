import type { Metadata } from "next";
import Link from "next/link";
import { OnboardingForm } from "./onboarding-form";

export const metadata: Metadata = {
  title: "Request provider onboarding",
  description:
    "Apply to list your services on Service Marketplace—separate from general contact.",
};

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
            <OnboardingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
