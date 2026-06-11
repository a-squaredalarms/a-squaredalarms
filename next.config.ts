import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/a-squaredalarms',
  assetPrefix: '/a-squaredalarms',

  // ─── Performance ─────────────────────────────────────────────────────────
  compress: true,
  poweredByHeader: false,

  // ─── Images ──────────────────────────────────────────────────────────────
  // Remote image optimization requires a server; disabled for static export.
  images: {
    unoptimized: true,
  },

  // ─── Experimental ────────────────────────────────────────────────────────
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
