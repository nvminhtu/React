// @flow

/* eslint-disable no-console */

// calculator example
function initialRequestA() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({a: 2})
    }, 20)
  });
}

function initialRequestB() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({b: 5})
    }, 50)
  });
}

function getOptionsFromInitialData(a, b) {
  return {c: a.a * b.b}
}

function finalRequest(options, cb) {
  if (options.c == 10) {
    cb(null, 'You win!')
  } else {
    cb('Access denied.')
  }
}

function finalRequestPromise(options) {
  return new Promise(function(resolve, reject) {
    finalRequest(options, function(error, data) {
        if (error) {
          reject(error)
        }
        else {
          resolve(data)
        }
    })
  })
}

// Promise.all([promise1, promise2, …]) return array of success or fail
Promise
.all([initialRequestA(), initialRequestB()])
.then(function(results) {
  var options = getOptionsFromInitialData(results[0], results[1])
  return finalRequestPromise(options)
})
.then(
  function(file) {
    console.log(file)
  },
  function(error) {
    console.log('ERROR: '+error)
  }
)