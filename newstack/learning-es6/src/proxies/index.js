// @flow

/* eslint-disable no-console */

// create eule to check age when assign
let validator = {
  set (target, key, value) {
    if (key === 'age') {
      if (typeof value !== 'number' || Number.isNaN(value)) {
        console.error('Age must be a number')
      }
      if (value <= 0) {
        console.error('Age must be a positive number')
      }
    }

    target[key] = value
    return true
  }
}

let proxy = new Proxy({}, validator)
proxy.age = 'foo'
proxy.age = NaN
proxy.age = 0
proxy.age = 28
console.info(proxy.age)
