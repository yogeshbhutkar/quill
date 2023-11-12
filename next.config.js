/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*.googleusercontent.com",
            port: "",
            pathname: "**",
          }
        ],
      },
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.resolve.alias.canvas = false
        config.resolve.alias.encoding = false
        return config
    }
}

module.exports = nextConfig
