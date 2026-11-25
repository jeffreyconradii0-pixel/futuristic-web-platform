import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/token-factory", destination: "/products", permanent: true },
      { source: "/solutions/tokenization", destination: "/solutions/blockchain", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
    },
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();