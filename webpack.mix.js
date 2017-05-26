// const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// var webpackMerge = require('webpack-merge');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var commonConfig = require('./public/webpack.common.js');
// var helpers = require('./public/helpers');

// module.exports = webpackMerge(commonConfig, {
//   devtool: 'cheap-module-eval-source-map',

//   output: {
//     path: helpers.root('./public/dist'),
//     publicPath: '/',
//     filename: '[name].js',
//     chunkFilename: '[id].chunk.js'
//   },

//   plugins: [
//     new ExtractTextPlugin('[name].css')
//   ],

//   devServer: {
//     historyApiFallback: true,
//     stats: 'minimal'
//   }
// });

/*正式华宁*/
module.exports = require('./config/webpack.prod.js');
