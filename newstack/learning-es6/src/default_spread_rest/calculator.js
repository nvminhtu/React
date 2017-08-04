// @flow

class Calculator {

  // pass array argument with rest
  static sum(...input) {
    return input.reduce((sum, value) => sum + value, 0)
  }
}

export default Calculator
