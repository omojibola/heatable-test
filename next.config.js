/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.pixabay.com',
      'images.pexel.com',
      'source.unsplash.com',
      'img.icons8.com',
    ],
  },
};

module.exports = nextConfig;
