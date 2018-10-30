const path = require("path");

module.exports = (storybookBaseConfig, configType) => {
  // Not running in a production ENV
  if (configType === 'DEVELOPMENT') {
    // Sass Style importing
    storybookBaseConfig.module.rules.push(
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
      exclude: /(node_modules)/
    });
  }
  // Return the mutated config
  return storybookBaseConfig;
};
