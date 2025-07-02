import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  pageExtensions: ["ts", "tsx", "js", "jsx"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
