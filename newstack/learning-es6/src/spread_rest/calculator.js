// @flow

class Calculator {

  // pass argument as array with rest
  sum(...args) {
    // reduce function return value from array
    return args.reduce((sum, value) => sum + value, 0)
  }
}

export default Calculator
