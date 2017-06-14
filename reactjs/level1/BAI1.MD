# BÀI 1: Khởi tạo project ReactJS với NodeJS + Webpack + Babel

### Tạo folder:
`mkdir practice`

### Khởi tạo 1 project mới với npm:
`npm init -y`

### Cài đặt các package cần sử dụng:
```
npm install --save-dev webpack webpack-dev-server react-hot-loader
npm install --save-dev babel-core babel-loader
npm install --save-dev babel-preset-es2015 babel-preset-react
npm install --save react react-dom history react-router
```

### Sau khi install vào folder chứa source, mở file package.json
Thêm đoạn dưới vào sau `"license": "ISC"`
```
"babel": {
    "presets": [
        "es2015",
        "react"
    ]
},
```

> Tiếp đến chúng ta cấu hình cho Webpack 

## Tạo 1 file mới đặt tên là `webpack.config.js`
Đặt nội dung như dưới đây:
```
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: 'dist',
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
```
Về Webpack, nó bundle tất cả script chúng ta thành bundle.js, chi tiết hỏi thêm sau nhé các bạn, tạm thời theo cấu hình như trên để có thể sử dụng Webpack trong project của chúng ta.

### Tiếp đến là thử nghiệm source chạy với những gì chúng ta vừa cấu hình

### Chúng ta tạo 1 folder đặt tên là `src` + tạo 1 file index.js trong đó, chạy 1 lệnh đơn giản.
```
console.log('React is up and running!');
```
* Chúng ta tạo 1 folder đặt tên là `dist` + tạo 1 file index.html trong đó.
```
<!DOCTYPE html>
<html>
    <body>
        <div id="app"></div>
        <script src="bundle.js"></script>
    </body>
</html>
```
* `<div id="app"></div>` chính là div chứa ID để chúng ta khai báo mà React JS sẽ hiểu và chạy ứng dụng của chúng ta vào.
* `<script src="bundle.js"></script>` chính là file mà webpack đã bundle các source JAVASCRIPT của chúng ta.

Sau đó chúng ta chạy lệnh sau: `webpack` để kiểm tra, nó sẽ bundle source code cho chúng ta.

Nếu gặp lỗi khi gọi lệnh `webpack` - chúng ta thực hiện cài đặt thêm như sau
`npm install -g webpack webpack-dev-server`

* Để run Webpack bundle các file của chúng ta, chúng ta chạy lệnh sau trong thư mục source.
`webpack` 

* Để chạy live sever của webpack thực hiện lệnh sau
`webpack-dev-server` 

* Sau đó chúng ta vào `http://localhost:8080/`
Nếu cần coi log của Webpack `http://localhost:8080/webpack-dev-server`