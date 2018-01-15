// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  return a + b;
};

console.log(add (55,1));

// this keyword - no longer bound

const user = {
  name: 'Jeff',
  cities: ['Green Bay', 'Howard', 'New Mexico', 'Germany'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  multiplyBy: 2,
  numbers: [1, 2, 4],
  multiply() {
    return this.numbers.map((result) => result * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
