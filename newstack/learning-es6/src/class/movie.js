// @flow
// class syntax
export class Movie {

  constructor(price, name) {
    this.price = price
    this.name = name
  }

  show() {
    return `Begin ${this.name}`
  }
}
