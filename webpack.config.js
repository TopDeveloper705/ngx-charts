var path = require('path');
var webpack = require('webpack');

var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var ENV = process.env.NODE_ENV;
var IS_PRODUCTION = ENV === 'production';
var VERSION = JSON.stringify(require('./package.json').version);

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  resolve: {
    extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'],
    root: root('demo'),
    descriptionFiles: ['package.json'],
    modules: [
      root('demo'),
      'node_modules'
    ]
  },

  // context: root(),
  debug: true,
  devtool: 'cheap-module-source-map',

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map',
        exclude: /(node_modules)/
      },
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?sourceMap',
          'postcss?sourceMap',
          'sass?sourceMap'
        ]
      }
    ]
  },

  entry: {
    'app': './demo/bootstrap.ts',
    'polyfills': './demo/polyfills.ts',
    'vendor': './demo/vendor.ts'
  },

  devServer: {
    outputPath: root('dist'),
    watchOptions: {
      poll: true
    },
    port: 9999,
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunks: false
    }
  },

  output: {
    path: root('dist'),
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].map',
    chunkFilename: '[id].[hash].chunk.js'
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ],

  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'demo'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills'],
      minChunks: Infinity
    }),

    // https://github.com/angular/angular/issues/11580#issuecomment-246880731
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('src') // location of your src
    ),

    new webpack.DefinePlugin({
      'ENV': JSON.stringify(ENV),
      'IS_PRODUCTION': IS_PRODUCTION,
      'APP_VERSION': VERSION
    }),

    new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency'
    }),

    new WebpackNotifierPlugin({
      excludeWarnings: true
    }),

    new webpack.optimize.OccurrenceOrderPlugin(true),

    new CleanWebpackPlugin(['dist'], {
      root: root(),
      verbose: false,
      dry: false
    })
  ]
};
