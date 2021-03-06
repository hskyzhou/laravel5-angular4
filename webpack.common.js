var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './resources/assets/angular/polyfills.ts',
    'vendor': './resources/assets/angular/vendor.ts',
    'app': './resources/assets/angular/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('', 'tsconfig.json') }
          } , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('resource/assets/angular/app'),
        loader: ['to-string-loader'].concat(ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' }))
      },
      {
        test: /\.css$/,
        include: helpers.root('resource/assets/angular/app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('resource/assets/angular'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    })

    // new HtmlWebpackPlugin({
    //   template : helpers.root('resource/views/index.blade.php')
    // })
  ]
};