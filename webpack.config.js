const path = require('path');

// for creating separate css file
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const appOutputName = 'notebook.js';

module.exports = {
  entry: `./public/src`,
  output: {
    filename: `./scripts/${appOutputName}`,
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.sass|scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: 'inline'
              }
            },
            'sass-loader'
          ],

        })
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: "/images/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ],
      }

    ]
  },
  plugins: [
    new ExtractTextPlugin('/styles/[name].css'),
  ],


  devServer:{
    contentBase: path.resolve(__dirname, './src'),
    port: 9876,
    historyApiFallback: true,
    inline: true,
    host: 'localhost'
  }
};