# Webpack

### Sử dụng Webpack
* Mục đích build app sử dụng ES6
* Đóng gói code.

### Cài đặt
```
npm install
```
* Build
```
webpack
```



* Run Webpack Dev Server
```
webpack-dev-server
```

then watchout the PORT of Webpack Dev Server, we can try this
```
http://localhost:7070/
```

We can analize the status of Webpack Server running.
```
http://localhost:7070/webpack-dev-server
```

* In command line, we can change the PORT of Webpack Dev Server

try this
```
Run webpack-dev using this

webpack-dev-server --host 0.0.0.0 --port 80
And set this in webpack.config.js

entry: [
    'webpack-dev-server/client?http://0.0.0.0:80',
     config.paths.demo
 ]
Note If you are using hot loading, you will have to do this.

Run webpack-dev using this

webpack-dev-server --host 0.0.0.0 --port 80
And set this in webpack.config.js

entry: [
    'webpack-dev-server/client?http://0.0.0.0:80',
    'webpack/hot/only-dev-server',
     config.paths.demo
 ],
```