const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
      app: [
          './src/main.jsx',
      ],
  },
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      publicPath: '/',
  },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /\.test.(js|jsx)$/,
                include: [
                    /src\/*/,
                    /node_modules/,
                  ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [['@babel/plugin-proposal-decorators', { legacy: true }], ['@babel/plugin-proposal-class-properties', { loose: true }], '@babel/plugin-syntax-dynamic-import'],
                    },
                }],
            },
            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                     {
                        loader: 'css-hot-loader'
                     },
                     {
                       loader: MiniCssExtractPlugin.loader
                     },
                     {
                       loader: 'css-loader',
                     },
                     {
                       loader: 'postcss-loader'
                     },
                     {
                       loader: 'sass-loader',
                       options: {
                         implementation: require("sass")
                       }
                     }
                   ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico|woff|woff2|eot|ttf|xml|webmanifest)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        publicPath: '/',
                    },
                }],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.jpg'],
        alias: {
            assets: path.resolve(__dirname, '/src/assets/'),
            images: path.resolve(__dirname, './src/assets/images/'),
            fonts: path.resolve(__dirname, './src/assets/fonts/'),
            stores: path.resolve(__dirname, './src/stores/'),
            components: path.resolve(__dirname, './src/components/'),
            helpers: path.resolve(__dirname, './src/helpers'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: `React boilerplate ${process.env.NODE_ENV !== 'production' ? ' development' : ' production'}`,
            description: 'Boilerplate to start a basic ReactJS project.',
            template: './src/index.html',
            inject: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new MiniCssExtractPlugin({
          filename: "style.css"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
}
