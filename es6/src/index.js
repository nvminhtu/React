/* import _ from 'lodash';
function component() {
     var element = document.createElement('div');
// Lodash, now imported by this script
     element.innerHTML =  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     return element;
}

document.body.appendChild(component()); */

// ------ Coding ES6 here
function f() {
    let x = "data";
    console.log(x);
    
}
console.log(f());


// 1-  Let & Const
let a = 5;
let b = 100;
if(true) {
    let a = 60;
    var c = 10;
    console.log(a/c);
}