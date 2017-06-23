# BÀI 1: GETTING STARTED

## STEP BY STEP
### [Cài đặt và Setup](http://facebook.github.io/react-native/docs/getting-started.html) Có 2 cách cài đặt: 

* Sử dụng create-react-native-app (khỏi phải cấu hình nhiều)
* Build native code trực tiếp (sử dụng react-native-cli)

## Sử dụng React Native CLI:

### 0.Cài đặt 1 số cái để làm:

* [Homebrew](https://brew.sh/) - tìm hiểu thêm nhé (MacOS => UniBox) - tức là cho phép lập trình viên cài thêm các phần mềm trên Linux, Unix nhưng ko có trên MacOS, quá lợi nhỉ
=> Quá dễ vào trang chủ của nó cài đặt nhé.
* [Watchman](https://facebook.github.io/watchman/) - Sau khi cài Homebrew thì dùng Homebrew - cài thằng Watchman này vào (`homebrew install watchman`) - đơn giản nó hoạt động như việc Gulp/Grunt cài đặt thêm các package như (httpd, live-server,...) theo dõi các thay đổi trong source code (sự thay đổi của các file javascript, css)
* [XCode] - Nếu sử dụng máy MAC để chạy React Native thì cài thằng này vào thông qua AppStore của Apple thôi.
* Tiếp đến là cấu hình Command Line Tools trong Xcode để chạy.

### 1. Khởi tạo Project với React Native

```
react-native init project01
```

cd project01 và chạy lệnh sau để chạy và test thử trên IOS
```
react-native run-ios
```

Chỉnh sử file `index.ios.js` để test và thay đổi cho code cho app chạy trên IOS nhé.

`Hit ⌘R in your iOS Simulator to reload the app and see your changes!`

* Ngoài ra có thể cấu hình Live-reload cho app để nó tự auto Reload nhé 

### 2. Tìm hiểu các tính năng:

* React => sử dụng Web Component
* React Native => sử dụng Native Component

Các concepts thì tương tự như React:

* Component
* Props
* State
* JSX

### 3. Ví dụ tạo 1 HelloWord Component

HelloWorldApp Component

```
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

Chú ý chỗ này do lúc ban đầu đạt tên project01 nó khởi tạo với tên đó nên nếu mình khai báo tên Project HelloWorldApp nó sẽ báo lỗi.

```
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

Chính vì thế cần xóa các project trong folder android/ios đã tạo với iOS (khi mình chạy lệnh run-ios nó đã generate cho chúng ta)

* Đầu tiên cd vào project và xóa các folder liên quan này.
```
rm -rf ios/build  
rm -rf ios/OldProjectName  
rm -rf ios/OldProjectNameTests  
rm -rf ios/OldProjectName.xcodeproj  

```

* Đặt tên lại các package và kiểm tra trong AppRegistry có xuất ra tên mới chưa => đúng rồi thì Ok.

* Tiếp theo chạy lệnh `react-native upgrade` để có thể generate lại các file và folder project của thư mục iOS

```
* Xóa cache trong Xcode để đảm bảo => nhấn Options rồi chọn trên thanh menu (máy MAC)

```
Product > Clean Build Folder
```

## Một số lỗi và cách fix

* Ví dụ lỡ xóa tất cả files và folder trong folder `ios` => sẽ báo lỗi ko tìm file Xcode Project 

```
* Đầu tiên là đặt tên lại các package và kiểm tra trong AppRegistry có xuất ra tên mới chưa => đúng rồi thì Ok.
* Tiếp theo chạy lệnh `react-native upgrade` để có thể generate lại các file và folder project của thư mục iOS
```

## CÁC BÀI THAM KHẢO

* [Getting Started with React Native](http://facebook.github.io/react-native/docs/getting-started.html)


