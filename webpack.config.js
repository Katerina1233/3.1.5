const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js'
  ],

  output: {
    filename: './js/bundle.js'
  },

  devtool: "source-map",

 module: {
  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader",
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              indentedSyntax: true, // ВАЖНО для .sass
            },
          },
        },
      ],
    },
    {
      test: /\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader",
      ],
    },

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          },
        ]
      },

      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader?name=./static/[name].[ext]'
          },
        ]
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      }
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    new CopyWebpackPlugin([
      { from: 'src/img', to: 'images' }
    ])
  ],

  devServer: {
  contentBase: path.join(__dirname, 'dist'),
  port: 8080,
  open: true,
  hot: true
}
};