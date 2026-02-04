/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 1. Tell Next.js to generate a static site (creates the ./out directory)
  output: 'export',
  
  // 2. Disable server-based image optimization (required for static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
