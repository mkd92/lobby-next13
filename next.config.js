/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/AEdFTp6mKBqavNxZT385yT-c8v0pMBcjD9V4p-A5_WFK6PU=s96-c",
      },
    ],
  },
};

module.exports = nextConfig;
