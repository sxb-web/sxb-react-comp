const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, argv) => {
  const prodMode = argv.mode === 'production'
  return {
    mode: prodMode ? 'production' : 'development',
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, './site'),
      filename: prodMode ? '[name].[hash:8].js' : '[name].js',
      chunkFilename: prodMode ? '[name].[chunkhash:8].js' : '[name].js',
      publicPath: prodMode ? "/DawnUI/" : '/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: argv.mode !== 'production',
              },
            },
            'css-loader']
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: argv.mode !== 'production',
              },
            },
            'css-loader', 'sass-loader']
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.md$/,
          loader: 'raw-loader'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({template: `./src/index.html`}),
      new MiniCssExtractPlugin({
        filename: prodMode ? '[name].[contenthash:8].css' : '[name].css',
        chunkFilename: prodMode ? '[id].[contenthash:8].css' : '[id].css',
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devServer: {
      host: '192.168.0.8',
      port: 3000,
      // respond to 404s with index.html
      historyApiFallback: true,
      // open the browser
      open: true,
      hot: true
    }
  }
}