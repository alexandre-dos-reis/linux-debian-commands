/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/root",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: [process.env.API_DOMAIN],
  },
};
