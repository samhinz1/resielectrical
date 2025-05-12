/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensures page build works correctly on GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/lopeselectrical' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lopeselectrical' : '',
  images: {
    unoptimized: true,
  },
  // Add trailing slash to pages (needed for GitHub Pages)
  trailingSlash: true,
  // For TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // For ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig 