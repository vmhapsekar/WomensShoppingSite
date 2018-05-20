const path = require('path')
const buildPath = path.resolve(__dirname, 'build')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = () => {
  const env = process.env.NODE_ENV
  console.log('PROCESS.ENV : ' + env)
  let config = require('./webpack.config.common')(env)

// inline css allow hot reload of CSS (without browser refresh)
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
  if (env === 'dev_cache') {
    config.module.rules.push({
      test: /\.json$/,
      use: 'json-loader'
    })
    config.plugins.push(new CopyWebpackPlugin([{
      from: './cache', to: 'cache'
    }]))
  }

  // Global Variables'
  config.plugins.push(
    new webpack.DefinePlugin({
      'ENV': JSON.stringify('DEV'),
      '__VERSION__': JSON.stringify(require('./package.json').version),
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }))

  // webpack-dev-server
  config.devServer = {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: '9999',
    proxy: {
      '/api/uam': {
        target: 'http://localhost:4569',
        secure: false,
        pathRewrite: {
          '/api/uam': ''
        }
      },
      '/api/productservice': {
        target: 'http://10.186.147.11:4569',
        secure: false
      },
      '/api/referenceservice': {
        target: 'http://10.186.147.11:4569',
        secure: false
      },
      '/api/customerservicev2': {
        target: 'http://10.186.147.11:4569',
        secure: false
      },
      '/api/partyservice': {
        target: 'http://10.186.147.11:4569',
        secure: false
      },
      '/api/arrangementservice': {
        target: 'http://10.186.147.11:4569',
        secure: false
      },
      '/api/so': {
        target: 'http://10.186.147.11:4569',
        secure: false
      },
      '/api/bdservicecore': {
        target: 'http://10.186.147.11:4569',
        secure: false
      }
    },
    historyApiFallback: {
      index: '/index.html'
    },
    contentBase: buildPath
  }

  config.devtool = 'source-map'
  return config
}
