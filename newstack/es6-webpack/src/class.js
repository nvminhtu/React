// how to export class

export class KidsGame {
  constructor(name,founder,year) {
    this.name = name;
    this.founder = founder;
    this.year = year;
  }
  information() {
    return this.name + `developer by` + this.founder + `in` + this.year;
  }
}
