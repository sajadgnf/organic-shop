const withPWA = require("next-pwa")({
  dest: "public",
})

/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  output: "standalone",
  env: {
    BASE_URL: "https://img-bucket.s3.ir-thr-at1.arvanstorage.ir",
  },
  images: { domains: ["img-bucket.s3.ir-thr-at1.arvanstorage.ir", "fakeperson-face.oss-us-west-1.aliyuncs.com"] },
  experimental: {
    appDir: true,
  },
})

module.exports = nextConfig
