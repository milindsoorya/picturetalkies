const path = require("path");

module.exports = {
  target: "serverless",
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
};
