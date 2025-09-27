import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  turbopack: {
    root: path.resolve(__dirname, "."),
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
