import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages. Deployment is wired up in a later phase;
  // this only tells Next to emit a fully static `out/` directory on build.
  output: "export",
  // Static export cannot use the default Image Optimization server.
  images: { unoptimized: true },
  // Emit trailing-slash directories so static hosts resolve routes cleanly.
  trailingSlash: true,
};

export default nextConfig;
