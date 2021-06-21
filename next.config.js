const path = require("path");

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://ackee.picturetalkies.in/:path*",
      },
    ];
  },
};
