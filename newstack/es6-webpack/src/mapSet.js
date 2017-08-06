//The Map data structure in ECMAScript 6 lets you use arbitrary values as keys and is highly welcome.
export function CustomMap() {
  let map = new Map();
  map.set('age', 30);
  map.set('firstname', 'Tu');
  map.set('lastname', 'Nguyen');

  let age = map.get('age');
  console.log('My age: ' + age);

  // check map has key
  if(map.has('age')) { console.log('co key age'); }

  // xoa key
  // map.delete('age');

  // Ngoài ra có thể kiềm tra được size của 1 map
  map.size; // return size of map
  // xóa tất cả key của map đã khởi tạo bên trên
  map.clear();
}

// khởi tạo 1 map với các mảng 2 chiều
export function KeyMap() {
  let map = new Map([
    ['sword','Knight'],
    ['hammer','Babarian'],
    ['gun','Cowboy']
  ]); // khởi tạo 1 map

  console.log(map.get('sword'));

  // thử cách khai báo khác
  let map2 = new Map();
  map2.set('ca','Captain America')
      .set('th','Thor')
      .set('iron','Iron Man')
  console.log(map2.get('ca'));

  // bất kỳ giá trị nào cũng có thể là 1 key, thậm chí là 1 object
  // const KEY1 = {};
  // map.set(KEY1, 'Hello');
  // console.log(map.get(KEY1));

  // duyệt trong MAP
  for (let key of map.keys()) {
    console.log(key);
  }

  for (let value of map.values()) {
    console.log(value);
  }
  for(let entry of map.entries()){
    console.log(entry[0] + ' is presented for ' + entry[1]);
  }

  // chuyển map data sang 1 array
  let map3 = new Map([
    ['1','one'],
    ['2','two'],
    ['3','three'],
  ]);
  let arr = [...map3.key()]; //vd: lay cac gia tri cua map3 và gán cho array
  console.log(arr);
}

export function MappingFiltering(){
  let map = new Map([
    [1,'a'],
    [2,'b'],
    [3,'c']
  ]);
  map.forEach((value,key)=> {
    console.log(key,value);
  });

  // do data tu map vao map 1
  let map1 = new Map(
    [...map].filter(([k,v])=> k < 3) // return 1,2
  );
  console.log(map1);

  let map2 = new Map(
    [...map].map(([k,v]) => [k * 2, '_' + v])
  );
  console.log(map2);
}

// demo SET
export function CustomSet() {
  let set1 = new Set();
  set1.add('baseball')
     .add('football');
  //set.delete('baseball');
  //set.has('baseball');
  //set.size
  //set.clear();
  // Khởi tạo 1 set - ví dụ ta setup 1 mảng bỏ vào Set
  let set2 = new Set(['red','green','blue']);
  // alternatively we can do like this.
  let set3 = new Set().add('red').add('green').add('blue');

  for(let i of set3) {
    console.log(i);
  }

  //Filtering và mapping - ví dụ ta gán các giá trị của set3 vào 1 biến mới như sau
  let set = new Set([1, 2, 3]);
  set = new Set([...set].map(x => x * 2));
  for(let x of set) {
    console.log(x);
  }
  // Resulting set: {2, 4, 6}

  // Filtering
  let setnew = new Set([1, 2, 3, 4, 5]);
  setnew = new Set([...setnew].filter(x => (x % 2) == 0)); // show even number

  for(let i of setnew) {
    console.log(i);
  }
}
