const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = () => {
  let config = require('./webpack.config.common')()

// Extract CSS Into a separate file.
  config.plugins.push(new ExtractTextPlugin({
    filename: 'style.css',
    allChunks: true
  }))

  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 1
        }
      },
      {
        loader: 'resolve-url-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          config: './app/config/postCss/postcss.config.js'
        }
      }
    ]
  })

  // Uglify
  // Temporarily commenting out uglify plugin so we debug easily in SIT
  config.plugins.push(
    new UglifyJSPlugin()
  )

  // Global Variables
  config.plugins.push(
    new webpack.DefinePlugin({
      'ENV': JSON.stringify('PROD'),
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      __VERSION__: JSON.stringify(require('./package.json').version)
    })
  )

  // Temporarily adding source-map so we can debug easily in SIT
  config.devtool = 'source-map'
  return config
}
