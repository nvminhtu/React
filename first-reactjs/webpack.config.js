let path = require('path');
module.exports = {
    entry:'./app/app.jsx',
    output:{
        path: __dirname,
        filename : './public/bundle.js'
    },
    resolve: {
        alias : {
            
            Reducer : path.resolve(__dirname, 'app/Reducer.jsx'),
            Action  : path.resolve(__dirname, 'app/Action.jsx'),
            Store   : path.resolve(__dirname, 'app/Store.jsx')
        
        },
        extensions: [".js",".jsx"]
    },
    module: {
        loaders : [
            {
                loader:"babel-loader",
                query:{
                    presets : ['react','es2015','stage-0']
                },
                test    : /\.jsx?$/,
                exclude : /node_modules/
            }
        ]
    },
    watch: true
};