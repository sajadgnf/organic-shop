/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["fakeperson-face.oss-us-west-1.aliyuncs.com"] },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
