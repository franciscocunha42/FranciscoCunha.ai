import type { NextConfig } from "next";

// Fully static export for Cloudflare Pages. The contact form drafts an email
// in the browser, so there is no server code.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
