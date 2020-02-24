// this is node.js
const path = require('path'); // provided automatically for constructing absolute path
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        // path.resolve(__dirname)  is absolute path to this file
        // 'dist' will be the folder where bundle is generated
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'none', // not generate source maps for production
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/i,
                exclude: '/node_modules/',
                use: [
                    {loader: 'style-loader'}, // injecting css code
                    {
                        loader: 'css-loader', // resolve imports
                        // options: {
                        //     importLoaders: 1,
                        //     modules: {
                        //         localIdentName: '[name]__[local]__[hash:base64:5]' // name of generated CSS classes in the DOM
                        //     }
                        // }
                    },
                    {
                        loader: 'postcss-loader', // prefix css for other browsers
                        options: {
                            indent: 'postcss',
                            plugins: () => [autoprefixer()]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // will copy this in src/build file like other bundles
            template: __dirname + '/src/index.html', //starting point
            filename: 'index.html',
            inject: 'body',
        }),
    ]
};