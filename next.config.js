const withPWA = require("next-pwa")({
  dest: "public",
})

/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  images: { domains: ["fakeperson-face.oss-us-west-1.aliyuncs.com"] },
  experimental: {
    appDir: true,
  },
})

module.exports = nextConfig
