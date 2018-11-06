const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./assets/js/site.js', './assets/css/site.scss'],
  output: {
    path: path.resolve(__dirname, '.tmp/dist/assets'),
    filename: 'js/site.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'resolve-url-loader',
              options: {
                sourceMap: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]',
          publicPath: '/assets'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/site.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      from: './assets/images',
      to: 'images',
      ignore: '.*'
    }])
  ],
};
