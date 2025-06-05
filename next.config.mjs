/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
    ],
  },
};

export default nextConfig;
