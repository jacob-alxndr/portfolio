const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // devtools: '', //
  entry: {
    main: './src/js/main.js',
    // vendor: './src/vendor.js',
  },
  module: {
    rules: [
      // html loader rule
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // file loader image folder rule
      {
        test: /\.(svg|jpg|jpeg|png|gif|pdf|tiff|tif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[contentHash].[ext]',
              outputPath: 'assets/imgs',
            },
          },
        ],
      },
      // file loader font folder rule - need to figure out a solution for svg fonts if in use
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html', // pulls the html content from our template html file in the src directory and bundles it in the dist directory.
    }),

    // Additional HTML pages
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './src/404.html',
    }),

    // Additional HTML pages
    // new HtmlWebpackPlugin({
    //   filename: 'projects.html',
    //   template: './src/project#.html',
    // }),
  ],
};
