/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Compress responses
  compress: true,
  // Enable static optimization
  trailingSlash: false,
  // Reduce bundle size
  swcMinify: true,
}

module.exports = nextConfig 