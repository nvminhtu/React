// @flow

class Calculator {

  // pass array argument with rest
  static sum(...input) {
    return input.reduce((sum, value) => sum + value, 0)
  }

  // tn: ehancement for reduce
  static 
}

export default Calculator


function sumOnlyNumbers() {  
  var args = arguments;
  var numbers = filterNumbers();
  return numbers.reduce((sum, element) => sum + element);
  function filterNumbers() {
     return Array.prototype.filter.call(args, 
       element => typeof element === 'number'
     );
  }
}
sumOnlyNumbers(1, 'Hello', 5, false); // => 6  