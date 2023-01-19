/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['infinitel-telecom.com', 'github.com']
  }
}

module.exports = nextConfig
