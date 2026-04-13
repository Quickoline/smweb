/** Public API base (no trailing slash). Set in `.env.local`: `NEXT_PUBLIC_API_BASE_URL=https://api.example.com` */
export function getApiBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  // `next dev`: talk to local API without configuring env (production build still uses prod host unless env is set).
  if (process.env.NODE_ENV === "development") {
    return "https://api.elizble.com/api";
  }
  return "https://api.elizble.com/api";
}
