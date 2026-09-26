import type { NextConfig } from "next";

// Static export for Cloudflare Pages. The contact form is handled by the
// Pages Function in functions/api/contact.ts, not by a Next.js route.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
