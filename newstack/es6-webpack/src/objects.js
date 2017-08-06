
export function Destructuring() {
  let object = { first: 'Tu', last: 'Nguyen'};
  let { first: t, last: f} = object
  console.log( f + ' ' + t); // Tu Nguyen s
  // * Steps to do in this function.
  // Declare variables
  // Assignments
  // Parameter Definition
}

// oject destruction assginement
export function DestructuringAssign() {
  const obj = {};
  // You can only change object's attribute
  obj.name = 'Web ES6 Development';

  const { name } = obj;
  console.log(name);
}
// the same to write: const name = this.object.name;
