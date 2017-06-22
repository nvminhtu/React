# BÀI 6: State vs Props 

## Cơ bản State và Props
Cần biết về 3 thứ:

* constructor()
* super()
* this.state (thuộc tính)

### constructor()
* Được gọi tự động mỗi khi 1 object được gọi,.
* Được gọi 1 lần cho mỗi object và ko cần gọi trực tiếp

### super()
* Hàm này có nghĩa gọi cùng tới phương thức trong class được chỉ định. Ví dụ như:
`class Detail extends React.Component { }`
* Hàm này như là 1 cách kế thừa (OOP) chúng ta đã biết, gọi hàm này giúp kế thừa những gì của class Cha (ở đây là React.Component)

### this.state
* Giá trị mặc định: undefined

=> Áp dụng 3 cái trên như sau.
> Đầu tiên: viết 1 hàm constructor()
> trong đó, gọi hàm super() để mà lớp cha (React.Component) có thể khởi tạo những cái cần thiết.
> Thiết lập `this.state` thành giá trị chứa các dữ liệu của chúng ta.

```
constructor(props) {
    super(props);

    this.state = {
        name: chance.first(),
        country: chance.country({ full: true })
    };
}
```

## Thay đổi state của React Component với setState()

* Ta tạo 1 hàm handle và setState
* Trong hàm contructor ta cần khai báo hàm bind function cho nó ( để có thể gọi `this` trong phần render)

```
constructor(props) {
	    super(props);

	    this.state = {
	        name: chance.first(),
	        country: chance.country({ full: true })
	    };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
	}
	
	handleChangeName(){
        this.state.name = chance.first();
        this.setState(this.state);   
    }

    handleChangeCountry() {
    	this.state.country = chance.country({full: true});
    	this.setState(this.state);
    }

    render(){
        return (<div>
        			<p>Hello, {this.state.name}.</p>
          		 	<p>You're from {this.state.country}.</p>
         			<button onClick={this.handleChangeName}>Click to change name!</button>
         			<button onClick={this.handleChangeCountry}>Click to change country!</button>
         	</div>);
    }
```
## Phân biệt State và Props
Props & State là gì?

* Có hai kiểu của data trong React đó là props và state. Sự khác biệt giữa hai kiểu thì hơi khó khăn để hiểu ngay từ ban đầu, ít nhất là về mặt khái niêm. Nhưng một khi bạn bắt đầu code, bạn sẽ nhanh chóng tách biệt được hai loại.

* Điểm mấu chốt của sự khác nhau là state thì private và chỉ có thể được thay đổi bên trong bản thân component. Props thì mang tính external, và không bị kiểm soát bởi bản thân component. Nó được truyền từ component cao hơn theo phân cấp, hay có thể hiểu đơn giản là truyền từ component cha xuống component con, cái mà điều khiển dữ liệu trước khi truyền xuống.

* Vì thế trong khi một component không thể thay đổi props của nó một cách trức tiếp (điều này có thể làm một cách gián tiếp nhưng hãy để nó vào những phần sau), thì nó có thể tự thay đổi state của bản thân.

Tham khảo thêm bài viết này: [Props và State là gì?](http://teachyourself.vn/react/bai-3-props-state-la-gi.html)

## State và `Single Source of Truth` (nâng cao - tìm hiểu trên mạng)

Theo cách trên thì ta có thể sử dụng FunctionalTest ở bất kỳ vị trí nào trong React Source của chúng ta.

## Render một mảng data (Arry of Data) với map() và JSX

```
	const people = [];		
	// khởi tạo 1 mảng danh sách thành viên
	for (let i = 0; i < 10; i++) {
        people.push({
            name: chance.first(),
            country: chance.country({ full: true })
        });
    }

    this.state = { people };
```

Trong hàm render của Component

```
 render() {
	    return (<div>
	    {this.state.people.map((person, index) => (
	        <p key={person.name}>Hello, {person.name} from {person.country}!</p>
	    ))}
	    </div>);
	}

```
Lưu ý: Mỗi thành phần khi xuất ra cần thiết lập key để nhận dạng

## Các phần nâng cao và bài đọc khác về State và Props
