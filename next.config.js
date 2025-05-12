/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Ensures page build works correctly on GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/tmelectrical' : '',
  images: {
    unoptimized: true,
  },
  // Add trailing slash to pages (needed for GitHub Pages)
  trailingSlash: true,
}

module.exports = nextConfig 