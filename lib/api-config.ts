/** Public API base (no trailing slash). Set in `.env.local`: `NEXT_PUBLIC_API_BASE_URL=https://your-api:5000` */
export function getApiBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://api.elizble.com";
}
