// how to export class

export class Product {
  constructor(name,founder,year) {
    this.name = name;
    this.founder = founder;
    this.year = year;
  }
  information() {
    return this.name + `was developed by` + this.founder + `in` + this.year;
  }
}
