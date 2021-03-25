const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development', // 'production' || 'development' || 'none'
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // extract css into css files
          'css-loader', // Translates CSS into CommonJS
          'postcss-loader',
          'sass-loader', // Compiles Sass to CSS
        ],
      },
      // babel loader
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  output: {
    filename: '[name]-[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[contentHash].css',
    }),
  ],
});
