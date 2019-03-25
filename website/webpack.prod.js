const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({
      cache: true,
      parallel: true,
      terserOptions: {
        compress: true,
        ecma: 6,
        mangle: true
      },
    })],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendor: false,
        vendors: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor'
        },
      }
    }
  },
  devtool: ''
});