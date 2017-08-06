// @flow

/* eslint-disable no-console */

// animation example
function runAnimation(step) {
  console.log(step)
}

function delay(interval) {
  return new Promise(function(resolve) {
    setTimeout(resolve, interval)
  })
}

runAnimation(0)
delay(1000)
.then(function() {
  runAnimation(1)
  return delay(1000)
})
.then(function() {
  runAnimation(2)
})
