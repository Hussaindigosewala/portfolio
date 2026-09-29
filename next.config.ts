import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deployed on Vercel, which optimizes images automatically — no static
  // export needed here.
  images: {
    imageSizes: [200, 320, 400, 640, 800],
  },
};

export default nextConfig;