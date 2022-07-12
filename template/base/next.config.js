/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      topLevelAwait: true,
      layers: true // optional, with some bundlers/frameworks it doesn't work without
    };
    return config;
  },
}

module.exports = nextConfig
