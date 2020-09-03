const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  {
  mode: 'development',
  entry: `./src/main.js`,
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules:[
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({template: `./src/index.html`})
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    // respond to 404s with index.html
    historyApiFallback: true,
    // open the browser
    open: true,
    hot: true
  }
}
