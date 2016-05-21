'use strict';

var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [new webpack.optimize.OccurenceOrderPlugin(), new webpack.NoErrorsPlugin()]
};

if (process.env.NODE_ENV === 'production') {
    webpackConfig = merge(webpackConfig, {
        devtool: "source-map",
        entry: ['babel-polyfill', './client/index.js'],
        module: {
            loaders: [{
                test: /\.js$/,
                loaders: ['babel', 'html-path-loader'],
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.(scss|css)/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap', 'autoprefixer-loader', 'sass-loader', 'css-path-loader')
            }, {
                test: /\.(scss|css)/,
                include: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap', 'autoprefixer-loader', 'sass-loader')
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=3000&name=font/[hash:8].[name].[ext]'
            }]
        },
        plugins: [new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }), new ExtractTextPlugin("app.css"), new webpack.optimize.UglifyJsPlugin({ minimize: true })]
    });
} else {
    webpackConfig = merge(webpackConfig, {
        devtool: 'inline-source-map',
        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    plugins: [['react-transform', {
                        'transforms': [{
                            'transform': 'react-transform-hmr',
                            'imports': ['react'],
                            'locals': ['module']
                        }, {
                            'transform': 'react-transform-catch-errors',
                            'imports': ['react', 'redbox-react']
                        }]
                    }]]
                }
            }, {
                test: /\.js$/,
                loader: 'html-path-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.(scss|css)/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader!css-path-loader'
            }, {
                test: /\.(scss|css)/,
                include: /node_modules/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }, {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=3000&name=font/[hash:8].[name].[ext]'
            }]
        },
        entry: ['babel-polyfill', 'webpack-hot-middleware/client', './client/index.js'],
        plugins: [new webpack.HotModuleReplacementPlugin()]
    });
}

module.exports = webpackConfig;