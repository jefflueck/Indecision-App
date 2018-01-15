class Person  {
  constructor(name = 'Anonymous', age = 0) {
      this.name = name;
      this.age = age;
  }
  getGreeting() {
    return `Hi my name is ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old. `
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` There major is ${this.major}.` ;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }
  hasLocation() {
    return !!this.home;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if(this.hasLocation()) {
      greeting += ` I am from ${this.home}.`;
    }

    return greeting;
  }
}

const me = new Traveler('Jeff Lueck', 41, 'Green Bay');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
