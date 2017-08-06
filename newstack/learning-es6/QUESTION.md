* Why you don't use `Map ES6` function instead of `reduce`?
  - Map ES6 return new array with each element being the result of the callback function
    For example: [1, 4, 9].map(Math.sqrt); //result is [1, 2, 3]

* What is the difference between them?
  - The difference is map return array and reduce return value(number, string)

* What's the difference between Promise and AJAX?
  - Promises are a tool for managing asynchronous operations. They keep track of when asynchronous operations complete and return results of async.
  - An Ajax call is a specific asynchronous operation that can be used with with a traditional callback interface or wrapped in a promise interface.
