let webpack = require('webpack');
let path = require('path');

module.exports = {
  entry:'./main.js',
  output: {path: __dirname, filename:'bundle.js'},
  module:{
    loaders:[{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets:['es2015','react','stage-1'],
        plugins: ['transform-decorators-legacy']
      }
    }
    ]
  }
}
