'use strict';

// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never create method insade Constructor
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {} (1.)
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('jack', 1975);

// console.log(jonas instanceof Person);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();

// Person.prototype.species = 'Homo Sapiens';

// console.log(jonas, matilda);

// console.log(jonas.__proto__.__proto__);

// const arr = [3, 6, 6, 9, 4, 5, 6, 9, 3]; // new Array === []
// console.log(arr.__proto__ === Array.prototype); //true
// //arr.__proto__ includes all methods for example map(), reduce, filter, at, concat, fill, find etc.
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(`${this.make} going at ${this.speed}km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.brake();
// mercedes.brake();

//class expression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);

    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.fullName);
console.log(jessica._fullName);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes(We can pass them in functions and also return)
// 3. Classes are executed in strict mode

const account = {
  owner: 'Jonas',
  movements: [200, 530, 12, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
