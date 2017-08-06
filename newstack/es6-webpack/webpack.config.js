/* global __dirname */
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets=es2015' }
    ]
  },
  devServer: {
    inline:true,
    port: 7070
  },
  plugins: [
   new BrowserSyncPlugin({
     // browse to http://localhost:3000/ during development,
     // ./public directory is being served
     host: 'localhost',
     port: 3000,
     server: { baseDir: ['public'] }
   })
 ]
}
