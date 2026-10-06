import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for shared hosting (Hostinger Premium) — no Node.js server available.
  output: "export",
  // One 404 for all root layouts (PT at "/", EN/ES under "/en" and "/es").
  experimental: { globalNotFound: true },
  trailingSlash: true,
  images: { unoptimized: true },
  // Pin the workspace root to this app. A stray package-lock.json higher up
  // was making Next infer the wrong root, which broke dev file-watching.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
