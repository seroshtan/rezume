'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/frontend',
  entry:  {
    main: './main',
    styles: './styles'
  },
  output:  {
    path:     __dirname + '/public',
    publicPath: '/',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.js', '.styl']
  },

  module: {

    loaders: [{
      test:   /\.js$/,
      loader: "babel?presets[]=es2015"
    }, {
      test:   /\.pug$/,
      loader: "pug"
    }, {
      test:   /\.styl$/,
      loader: ExtractTextPlugin.extract('css!stylus?resolve url')
    }, {
      test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file?name=[path][name].[ext]'
    }]

  },

  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ]
};



