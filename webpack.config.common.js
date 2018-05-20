const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const buildPath = path.resolve(__dirname, 'build')

module.exports = (env) => {
  return {
    entry: {
      app: ['whatwg-fetch', 'babel-polyfill', 'react-hot-loader/patch', './app/src/index.js'],
      silentCallback: ['whatwg-fetch', 'babel-polyfill']
    },
    output: {
      path: buildPath,
      filename: '[name].bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: ['/node_modules/', '/app/config', '/e2e/**.*', '/app/src/**/*.spec.js']
      },
      {
        test: /app\/src\/components\/.*\/.*\.(gif|ico|jpg|png|svg|ttf|eot|woff(2)?)(\?.*)?$/,
        loader: 'file-loader?name=assets/[name].[hash:8].[ext]'
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './app/index.html'),
        filename: 'index.html',
        inject: 'body'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
          return module.context && module.context.indexOf('node_modules') !== -1
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity
      }),
      new webpack.DefinePlugin({
        'NOWWHERE_SERVICE_API_KEY': JSON.stringify('2fM1682N8JJ31RK421X6fK2sG566D152Q4MU517a')
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    }
  }
}
