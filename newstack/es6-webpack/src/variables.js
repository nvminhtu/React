// 0 -- global function --------------------------------

export const PI = 3.14;
export const value = 42;
export const table = { foo: 'bar' };

// const
const score = 0; // valid declaration
//const end; // invalid - missing initialization

// null function
export function hello() {};

// 1 -- test export --------------------------------
// animal data functions
export function speak () {
  return 'moo';
}

export function eat () {
  return 'cow eats';
}

export function drink () {
  return 'cow drinks';
}
// -- end test export

// 2 -- Let --------------------------------
export function letVariables() {
  let x;
  if(true) {
    let x = 1;
    console.log(x); // show ket quả ra 1
  }
  return x;  // show ket qua ra undefined vì let chỉ mang giá trị trong block {} if
}

// 2.1 Let & var
// Phân biệt function Scope và Block Scope
export function funcScope() {
  if(true) {
    var color = 'red';
  }
  if(true) {
    console.log('color is' + color); // red
  }
}

export function blockScope() {
  if(true) {
    let color = 'blue';
  }
  if(true) {
    console.log('color is' + color); // undefined
  }
}
