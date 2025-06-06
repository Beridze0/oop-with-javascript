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

// Person.hey = function () {
//   console.log('Hey There');
// };

// Person.hey();

// // // Prototypes
// // console.log(Person.prototype);

// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };

// // jonas.calcAge();

// // Person.prototype.species = 'Homo Sapiens';

// // console.log(jonas, matilda);

// // console.log(jonas.__proto__.__proto__);

// // const arr = [3, 6, 6, 9, 4, 5, 6, 9, 3]; // new Array === []
// // console.log(arr.__proto__ === Array.prototype); //true
// // //arr.__proto__ includes all methods for example map(), reduce, filter, at, concat, fill, find etc.
// // console.log(arr.__proto__.__proto__);

// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique());

// // const h1 = document.querySelector('h1');
// // console.dir(h1);

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed = this.speed + 10;
// //   console.log(`${this.make} going at ${this.speed}km/h`);
// // };

// // Car.prototype.brake = function () {
// //   this.speed = this.speed - 5;
// //   console.log(`${this.make} going at ${this.speed}km/h`);
// // };

// // const bmw = new Car('BMW', 120);
// // const mercedes = new Car('Mercedes', 95);

// // bmw.accelerate();
// // bmw.brake();
// // mercedes.brake();

// //class expression
// // const PersonCl = class {};

// //class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);

//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey There');
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.fullName);
// console.log(jessica._fullName);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizes(We can pass them in functions and also return)
// // 3. Classes are executed in strict mode

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 12, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;

// steven.calcAge();

// console.log(steven.__proto__);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// Challenge #2

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

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed}km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed}km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const bmw = new Car('Ford', 120);

// console.log(bmw);
// console.log(bmw.accelerate());
// console.log(bmw.brake());
// console.log(bmw.speedUS);
// bmw.speedUS = 50;

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// Student.prototype.constructor = Student;

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

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// //Linking
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed}km/h, with charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);

// tesla.chargeBattery(90);
// tesla.brake();
// tesla.accelerate();

// console.log(tesla.constructor);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);

//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey There');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(`I am ${2037 - this.birthYear}`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.calcAge();

////////////
// Inheritance between classes with Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer science');
// jay.introduce();
// jay.calcAge();

////////////////////////////////////
// Encapsulation: Private Class Fields and Methods

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// STATIC version of there 4

// class Account {
//   // Public fields
//   locale = navigator.language;
//   bank = 'Bankist';

//   #movements = []; // private
//   #pin; // if we are depended on arguments we declare it like const and use in consturctor

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin; // private pin
//     // this.movements = [];
//     // this.locale = navigator.language
//     console.log(`Thanks for opening an account ${owner}`);
//   }

//   // Public interface (API)
//   getMovements() {
//     return this.#movements; // Not chainable
//   }

//   deposit(val) {
//     this.#movements.push(val);

//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   // Private method
//   #approveLoan(val) {
//     // Fake method
//     return true;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// // acc1.deposit(300);
// // acc1.withdraw(100);

// acc1
//   .deposit(300)
//   .withdraw(100)
//   .withdraw(50)
//   .requestLoan(25000)
//   // .getMovements()
//   .withdraw(4000);

// console.log(acc1);

// console.log(acc1.#movements); // cant do it

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed}km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed}km/h, with charge of ${this.#charge}%`
    );
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().chargeBattery(90);
console.log(rivian);
rivian.speedUS = rivian.speed;
console.log(rivian);

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// //Linking
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed}km/h, with charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
