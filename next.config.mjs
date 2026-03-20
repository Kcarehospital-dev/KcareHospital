/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // No output: 'export' — we need API routes for admin + KV
}

export default nextConfig
