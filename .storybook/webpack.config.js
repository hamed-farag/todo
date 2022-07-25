const path = require("path");

module.exports = ({ config }) => {
  // Alternately, for an alias:
  config.resolve.alias = {
    "@styles": path.join(__dirname, "../src/styles"),
  };

  return config;
};
