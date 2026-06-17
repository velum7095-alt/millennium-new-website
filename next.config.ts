import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export static HTML for use on static hosts (cPanel upload)
  output: 'export',
  // Disable image optimization for static export compatibility
  images: {
    unoptimized: true,
  },
};

export default nextConfig;