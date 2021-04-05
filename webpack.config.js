const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
module.exports = {
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin(),
    // new webpack.SourceMapDevToolPlugin({}),
    new Dotenv({
      path: './.env',
      // safe: true,
    }),
    new WebpackPwaManifest({
      name: 'Pocket Tools - tu caja de herramientas de bolsillo',
      short_name: 'PockeTools',
      description:
        'Con PockeTools puedes encontrar todas las herramientas que necesitas al alcance de un click',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve(__dirname, 'src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://pocket-tools.vercel.app/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
      maximumFileSizeToCacheInBytes: 80000,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
    },
  },
  devtool: 'eval-source-map',
};
