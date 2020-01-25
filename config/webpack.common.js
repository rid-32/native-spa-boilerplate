const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

const rootAssetPath = path.resolve(__dirname, '../public/assets');

const plugins = [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
  }),
];

const handlebarsLoader = {
  test: /\.handlebars$/i,
  loader: 'handlebars-loader',
};

const styleLoader = {
  test: /\.css$/,
  use: ['css-loader', 'postcss-loader'],
};

const jsxLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

const fileLoader = {
  test: /\.(wav|webm|mp3|woff|woff2|ttf|eot|svg|png|jpe?g|gif|ico)(\?.*)?$/i,
  use: {
    loader: 'file-loader',
    options: {
      name: '[path][name].[hash].[ext]',
      context: rootAssetPath,
    },
  },
};

const extensions = ['.js', '.jsx', '.json', '.css'];

module.exports = {
  entry: [
    path.resolve(__dirname, '../node_modules/regenerator-runtime/runtime'),
    path.resolve(__dirname, '../src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['../node_modules', path.resolve(__dirname, '../src')],
    extensions,
  },
  module: {
    rules: [handlebarsLoader, styleLoader, jsxLoader, fileLoader],
  },
  plugins,
};
