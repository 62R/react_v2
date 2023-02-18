const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    clean: true,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  devtool: isDev ? 'eval-source-map' : 'hidden-source-map',
  devServer: {
    client: {
      logging: 'info',
    },
    compress: true,
    historyApiFallback: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/i,
        exclude: /node_module/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/i,
        exclude: /\.module\.s?css$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'icss',
              },
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.module\.s?css$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
              },
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    ...(isDev
      ? []
      : new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      })),
  ],
};
