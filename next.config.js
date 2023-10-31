// next.config.js
module.exports = {
  // Other Next.js configuration options

  // Serve fonts from the public directory
  async rewrites() {
    return [
      {
        source: "/fonts/:path*",
        destination: "/public/fonts/:path*",
      },
    ];
  },
};
