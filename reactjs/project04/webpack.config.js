var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {   // thêm style loader 
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.svg$/,
                loaders: [
                    {
                      loader: 'babel-loader',
                      query: {
                        presets: ['es2015']
                      }
                    },
                    {
                      loader: 'react-svg-loader',
                      query: {
                        jsx: true
                      }
                    }
                  ]
                } 
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};