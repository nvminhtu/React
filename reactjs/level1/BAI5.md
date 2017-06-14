# BÀI 5: JSX - nâng cao, các lệnh hay sử dụng trong JSX.

## Cách viết lệnh `if/else` trong JSX
Cũng đơn giản, ta tạo if else như sau - kiểm tra nếu tên ko phải John

* Trong file `src/pages/Detail.js`
```
{if (chance.first() === 'John') { console.log('Got John');
} else { console.log('Got someone else'); } }
```

hoặc viết theo kiểu như này cũng OK

```
{
    chance.first() == 'John'
    ? console.log('Got John')
    : console.log('Got someone else')
}
```

* Hàm render hoàn chỉnh
```
render() {
	return <p>
	{
		chance.first() == 'John' 
		? 'Hello, John!'
		: 'Hello, world!'
	}
	</p>;
}
```

## Sử dụng JSX để render ra nhiều Elements 1 lúc

* Giả sử thêm code chance trong source
```
chance.country({ full: true });
```

* Trong file `src/pages/Detail.js`, ta thêm code như sau
```
render() {
	return <p> Hello, {chance.first()}.</p>
	<p>You're from {chance.country({full: true})}.</p>;
}
```

## Xử lý sự kiện với JSX (ví dụ onClick)


## Một số template, component, cách viết JSX khác

* [Advanced JSX - Using Variable Attribute in a component, Use If else condition](http://blog.dssoft32.com/2017/05/react-components-advanced-jsx/)

