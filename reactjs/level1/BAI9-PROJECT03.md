# BÀI 9: PROJECT03 - Đọc dữ liệu từ nhiều Feeds bằng cách gom và ko lặp lại hàm

## Yêu cầu:

* Kế thừa từ Project 02
* Nâng cấp bằng cách tránh lặp và viết lại hàm
* Cấu hình lại các hàm trong `componentWillMount()`
* Thay vì viết lại code fetch data từ nhiều source ta gom lại 1 hàm
* Source: (https://api.github.com/repos/nvminhtu/React/)
* Fetch data (commits hoặc pulls hoặc folks) 
* https://api.github.com/repos/nvminhtu/React/commits
* https://api.github.com/repos/nvminhtu/React/pulls
* https://api.github.com/repos/nvminhtu/React/folks

* Thời lượng: 30 phút

## SOURCE CODE (đã hoàn thiện mẫu)
* [Link source code hoàn thiện](https://github.com/nvminhtu/React/tree/master/reactjs/project03)

## Làm sao để làm?

* Sử dụng các code ES6 (ES6 syntax)
* Áp dụng: `string interpolation` và `computed property names`

* [Xem thêm Template String - String interpolation](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings) - Nhúng biến string trong 1 template String
```
var a = 10;
var b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Crazy haha!`)
```
* [Xem thêm về Computed property names](https://www.eventbrite.com/engineering/learning-es6-enhanced-object-literals/)
```
var foo = 'bar'
var baz = {}
baz[foo] = 'ponyfoo'
console.log(baz)
// <- { bar: 'ponyfoo' }
```
Computed property namese có nhiều cách viết, phía trên là đơn giản nhất, trong project thì ta chỉ xài để truyền tham số `type` vào trong 1 template string


## Viết như thế nào
### Đầu tiên là gom nhóm các hàm Fetch data (ajax.get)

* Xóa hết các hàm ajax.get() trong `ComponentWillMount`
* Tạo 1 hàm fetchFeed(type)

```
fetchFeed(type) {
    ajax.get(`https://api.github.com/repos/nvminhtu/React/${type}`)
        .end((error, response) => {
            if (!error && response) {
                this.setState({ [type]: response.body });
            } else {
                console.log(`Error fetching ${type}`, error);
            }
        }
    );
}
```

* Gọi hàm này trong `ComponentWillMount`
// fetching data
componentWillMount() {
    this.fetchFeed('commits');
    this.fetchFeed('forks');
    this.fetchFeed('pulls');
}

### Tiếp đến là gom nhóm hàm select Mode

* Xóa bỏ các hàm này (đang cần gom các hàm nàys)
```
showCommits() {
    	this.setState({ mode: 'commits' });
	}

	showPulls() {
	    this.setState({ mode: 'pulls' });
	}

	showForks() {

```

* Thay bằng hàm này

```
selectMode(mode) {
		this.setState({ mode });
	}
```

* Các hàm gọi thay đổi Mode ta sửa lại như sau
```
<button onClick={this.selectMode.bind(this,'commits')}>Show Commits</button>
<button onClick={this.selectMode.bind(this,'pulls')}>Show Pulls</button>
<button onClick={this.selectMode.bind(this,'forks')}>Show forks</button>
```	        

### Cách khác để gom nhóm các hàm thay đổi Mode
* Lý do? Do nếu sử dụng code ES6 `computed property name` (đang sử dụng cấu trúc của nó - `{}`) - thì cái này đòi hỏi phải định dạng key-value

* Trong trường hợp này thì có thể viết lại như sau
```
return (<div>
    <button onClick={this.selectMode.bind(this)} data-mode="commits">
        Show Commits
    </button>

    <button onClick={this.selectMode.bind(this)} data-mode="forks">
        Show Forks
    </button>

    <button onClick={this.selectMode.bind(this)} data-mode="pulls">
        Show Pulls
    </button>

    {content}
</div>);
```
Cách trên thì gán hẳn thông tin cần gọi vào 1 kiểu dữ liệu data ( ở đây đặt là data-mode)

* Do vậy để lấy được thông tin trong `data-mode`? cần sửa như nào? Thì nếu click button ta nhận được event click => event  click truyền vào function thì ta có thể lấy thông tin trong event đó ra và thay đổi `State` của chúng ta

```
selectMopde(event) {
	this.setState ({ mode: event.currentTarget.dataset.mode });
}

=> Xong/
```
