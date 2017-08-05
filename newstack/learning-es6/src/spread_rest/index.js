// @flow

/* eslint-disable no-console */

import Calculator from './calculator'

const cal = new Calculator()

// pass array with spread
console.log(cal.sum(...[1, 2, 4, 5]))
