// @flow

class Movie {
  name: string

  constructor(name: string) {
    this.name = name
  }

  show() {
    return `Begin ${this.name}`
  }
}

export default Movie
