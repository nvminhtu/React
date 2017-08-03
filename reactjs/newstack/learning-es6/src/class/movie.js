// @flow
// class syntax
class Media {}
class Movie extends Media {

  constructor(price, name) {
    super(price)
    this.name = name
  }

  show() {
    return `Begin ${this.name}`
  }
}

export default Movie
