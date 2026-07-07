import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this app. A stray package-lock.json higher up
  // was making Next infer the wrong root, which broke dev file-watching.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
