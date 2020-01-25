const merge = require('webpack-merge');

const common = require('./webpack.common');

const styleLoader = {
  test: /\.css$/,
  use: ['style-loader'],
};

module.exports = merge.smart(
  {
    mode: 'development',
    module: {
      rules: [styleLoader],
    },
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      host: '0.0.0.0',
      port: 3000,
      hot: true,
      compress: true,
    },
  },
  common,
);
