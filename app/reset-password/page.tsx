import type { Metadata } from "next";
import { Suspense } from "react";
import { ResetPasswordForm } from "./reset-password-form";

export const metadata: Metadata = {
  title: "Reset password",
  description: "Set a new password for your Service Marketplace account.",
};

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-white px-4 py-24 text-center text-slate-600">Loading…</div>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
