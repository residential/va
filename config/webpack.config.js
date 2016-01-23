const path = require('path');
const context = path.resolve(__dirname, '..', 'app');

module.exports = {
  context,
  entry: './index.js',
  output: {
    libraryTarget: 'umd',
    library: 'va',
    umdNamedDefine: true,
    path: path.resolve(__dirname, '..', 'public', 'assets'),
    publicPath: '/assets/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015'] }
      }
    ]
  },
  devServer: {
    contentBase: 'public',
    noInfo: true
  }
};
