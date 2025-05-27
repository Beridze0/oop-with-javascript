'use strict';

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never create method insade Constructor
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {} (1.)
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);

console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

Person.prototype.species = 'Homo Sapiens';

console.log(jonas, matilda);

console.log(jonas.__proto__.__proto__);

const arr = [3, 6, 6, 9, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__ === Array.prototype); //true
//arr.__proto__ includes all methods for example map(), reduce, filter, at, concat, fill, find etc.
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
