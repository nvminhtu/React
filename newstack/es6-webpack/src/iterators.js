export function makeIterators(array) {
  var nextIndex = 0;

  return {
    next: function() {
      return nextIndex < array.length ?
      { value: array[nextIndex++] , done: false }: {done: true};
    }
  }
}

export function showTestIterators() {
  var it = makeIterators(['alpha','beta']); // initialized
  console.log(it.next().value); // 'alpha'
  console.log(it.next().value); // 'beta'
  console.log(it.next().done); // return true
}
