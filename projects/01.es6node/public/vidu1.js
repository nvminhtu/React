ReactDOM.render(<h1>ReactJS Khoa Pham</h1>,
    document.getElementById('root'));


/// old way
function Person(name, age) {
    this.age = age;
    this.name = name;
}
var per1 = new Person('Tu',30);
console.log(per1); 

// new way
class Member {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    welcomeMember(){
        return 'Xin chào, Tôi là ' + this.name + ', năm nay ' + this.age + ' tuổi';
    }
}

var mem1 = new Member('Tu',29);
console.log(mem1);
console.log(mem1.welcomeMember())