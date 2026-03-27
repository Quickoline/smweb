import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-slate-900">
              Service Marketplace
            </p>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Connecting clients with vetted professionals across software, legal,
              design, and more.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div>
              <p className="font-semibold text-slate-900">Explore</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/how-it-works" className="text-slate-600 hover:text-brand-600">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/become-a-provider" className="text-slate-600 hover:text-brand-600">
                    Become a provider
                  </Link>
                </li>
                <li>
                  <Link href="/request-onboarding" className="text-slate-600 hover:text-brand-600">
                    Request onboarding
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="text-slate-600 hover:text-brand-600">
                    Download app
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-600 hover:text-brand-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Legal</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <span className="text-slate-500">Privacy & terms (placeholder)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-100 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Service Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
