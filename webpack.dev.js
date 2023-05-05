const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development", // 'production' || 'development' || 'none'
  devtool: "eval-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        // scss rule
        test: /\.scss$/,
        use: [
          "style-loader", // Creates `style` nodes from JS strings
          "css-loader", // Translates CSS into CommonJS
          "postcss-loader",
          "sass-loader", // Compiles Sass to CSS
        ],
      },
    ],
  },
});
