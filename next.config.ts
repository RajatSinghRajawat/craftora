import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Product cards request q=90 for crisper furniture photography
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

export default nextConfig;
