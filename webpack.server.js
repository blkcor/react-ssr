const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const nodeExternals = require('webpack-node-externals')

const config = {
  target: 'node',
  entry: './src/server/index.js',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
}

module.exports = merge(baseConfig, config)
