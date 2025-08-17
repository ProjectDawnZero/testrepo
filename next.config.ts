import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Generate a static export to the `out` directory on build
  output: 'export',
};

export default nextConfig;
