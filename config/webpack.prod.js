const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.common');

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
  }),
];

const styleLoader = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader],
};

module.exports = merge.smart(
  {
    mode: 'production',
    module: {
      rules: [styleLoader],
    },
    plugins,
  },
  common,
);
