var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
