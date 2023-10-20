const withPWA = require("next-pwa")({
  dest: "public",
})

/** @type {import('next').NextConfig} */

const nextConfig = withPWA({
  output: "standalone",
  env: {
    BASE_URL: "https://magical-dubinsky--tnfznmjs.storage.iran.liara.space",
  },
  images: {
    domains: ["magical-dubinsky--tnfznmjs.storage.iran.liara.space", "fakeperson-face.oss-us-west-1.aliyuncs.com"],
  },
  experimental: {
    appDir: true,
  },
})

module.exports = nextConfig
