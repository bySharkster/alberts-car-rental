import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Basic compression
  compress: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "d2jok6qj8nz7dd.cloudfront.net",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "d10dhtn0mnlmib.cloudfront.net",
        port: "",
        pathname: "**",
      },
    ],
  },

  // Simple webpack fix for Motion library
  webpack: (config, { isServer, webpack }) => {
    // Fix "self is not defined" error for Motion library
    if (isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          self: "global",
        })
      );
    }
    return config;
  },
};

export default nextConfig;
