const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   use: 'ts-loader',
      //   exclude: /node_module/
      // },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.styl$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'stylus-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.pug"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
  ]
}