var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    module : {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react','es2015','stage-0']
            }
        }]
    },
    resolve : {
        extensions : ['.js','.jsx']
    },
    output : {
        path : path.resolve(__dirname,'dist'),
        publicPath : '/',
        filename : 'bundle.js'
    },
    devServer : {
        contentBase : './dist',
        hot : true,
        publicPath : '/',
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin()
    ],

}