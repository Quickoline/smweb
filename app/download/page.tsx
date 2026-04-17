import type { Metadata } from "next";
import Link from "next/link";
import { ANDROID_APK_URL } from "@/lib/download-links";

export const metadata: Metadata = {
  title: "Download the app",
  description:
    "Get the Service Marketplace mobile app—browse categories, book services, chat, and pay on the go.",
};

export default function DownloadPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-200/50 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Mobile app</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Download Service Marketplace
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Browse categories, book services, chat with providers, and manage payments from your
            phone—the same marketplace experience, built for on-the-go.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-3xl gap-8 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993.0005.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4486.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.5758 12 7.5758s-3.5902.6681-5.1367 1.7649L4.841 5.8377a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3438-4.1021-2.6894-7.5743-6.1225-9.4396" />
              </svg>
            </div>
            <h2 className="mt-6 font-display text-xl font-semibold text-slate-900">Android</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Download the release APK, then open the file on your phone to install. You may need to
              allow installs from unknown sources in your device settings.
            </p>
            <a
              href={ANDROID_APK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
            >
              Download for Android
            </a>
            <p className="mt-3 text-center text-xs text-slate-500">
              Link opens in a new tab. Complete the download, then install the APK on your device.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-white">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <h2 className="mt-6 font-display text-xl font-semibold text-slate-900">iOS</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              When your app is on the App Store, add your universal link here. Until then, testers
              can install via TestFlight (configure in Apple Developer).
            </p>
            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              App Store (coming soon)
            </a>
            <p className="mt-3 text-center text-xs text-slate-500">
              Placeholder—replace with App Store URL when available.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 px-6 py-8 text-center">
          <p className="text-sm font-semibold text-slate-900">Prefer the web?</p>
          <p className="mt-2 text-sm text-slate-600">
            This marketing site runs in your browser. Full product flows (booking, chat, wallet) use
            the mobile app or your deployed web client when configured.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/how-it-works"
              className="text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              How it works
            </Link>
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <Link href="/contact" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
              Contact support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
