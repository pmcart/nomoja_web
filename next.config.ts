import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: no server, so no API routes or on-the-fly image optimization.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
