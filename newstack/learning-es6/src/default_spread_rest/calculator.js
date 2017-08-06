// @flow

class Calculator {

  // pass array argument with rest
  static sum(...args) {
    return args.reduce((sum, value) => sum + value, 0)
  }

  // tn: ehancement for reduce
  static sumUpgraded(...args) {
  	function filterNumbers() {
  		return Array.prototype.filter.call(args, element => typeof element === 'number');
  	}
  	var numbers = fulterNumbers();

	   return numbers.reduce((sum, value) => sum + value, 0)
  }
}

export default Calculator;