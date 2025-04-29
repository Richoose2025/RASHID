/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Remove basePath as you're now using a subdomain instead of a subfolder
  // basePath: '/Akhil-Shibu', 
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;