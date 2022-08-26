const { default: getConfig } = require('next/config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { images: { allowFutureImage: true } },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  }
}

module.exports = nextConfig
