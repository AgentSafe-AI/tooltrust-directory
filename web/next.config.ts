import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static HTML export. The directory is pure SSG (no server routes,
  // middleware, server actions, or runtime data fetching), so exporting to
  // plain static files lets Vercel serve them as CDN assets instead of through
  // the ISR/prerender cache — which was consuming ~1M ISR Reads/mo from
  // crawler-driven edge-cache misses across ~2k tool pages.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
