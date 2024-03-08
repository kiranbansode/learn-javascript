// "use strict";

// const Person = function (firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;

// 	// Never do this
// 	// this.calcAge = function () {
// 	// 	console.log(2037 - this.birthYear);
// 	// };
// };

// const kiran = new Person("Kiran", 1995);
// console.log(kiran);

// // 1. {} => New Empty Object is created
// // 2. function is called, 'this' gets assign to => {} Newly created empty object
// // 3. {} object is linked to prototype
// // 4. function automatically return {}

// const meera = new Person("Meera", 2000);
// const jack = new Person("Jack", 1975);
// console.log(meera, jack);

// console.log(kiran instanceof Person);

// console.log(Person.prototype);

// Person.hey = function () {
// 	console.log("Hey there 👋🏻");
// 	console.log(this);
// };

// Person.hey();

// // Prototypes
// Person.prototype.calcAge = function () {
// 	console.log(2024 - this.birthYear);
// };

// kiran.calcAge();
// meera.calcAge();

// console.log(kiran.__proto__);
// console.log(kiran.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(kiran));
// console.log(Person.prototype.isPrototypeOf(meera));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = "Homo Sapiens";
// console.log(kiran.species, meera);

// console.log(kiran.hasOwnProperty("firstName"));
// console.log(kiran.hasOwnProperty("species"));

// console.log(kiran.__proto__);
// console.log(kiran.__proto__.__proto__);
// console.log(kiran.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// const arr = [3, 5, 6, 7, 4, 5, 9, 3, 3]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// // Not recommended
// // may be in future JavaScript relese new method with same name
// Array.prototype.unique = function () {
// 	return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector("h1");
// // Prototype Chain
// // Object => EventTarget => Node => Element => HTMLElement => HTMLHeadingElement

// console.dir((x) => x + 1);

/* --------------------------- Coding Challenge #1 -------------------------- */

// const Car = function (make, speed) {
// 	this.make = make;
// 	this.speed = speed;
// };

// Car.prototype.accelerate = function () {
// 	this.speed += 10;
// 	console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
// 	this.speed -= 5;
// 	console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

/* -------------------------- Coding Challenge End -------------------------- */

// class expession
// const PersonCl = class {};

// // class declaration
// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}

// 	// Methods will be added to .prototype property
// 	// Also called Instance methods
// 	calcAge() {
// 		console.log(2024 - this.birthYear);
// 	}

// 	greet() {
// 		console.log(`Hey ${this.fullName}`);
// 	}

// 	get age() {
// 		return 2024 - this.birthYear;
// 	}

// 	// Set a property that already exists
// 	set fullName(name) {
// 		console.log(name);
// 		if (name.includes(" ")) this._fullName = name;
// 		else alert(`${name} is not a full name!`);
// 	}

// 	get fullName() {
// 		return this._fullName;
// 	}

// 	// Static methods
// 	static hey() {
// 		console.log("Hey there 👋🏻");
// 		console.log(this);
// 	}
// }

// const kiranCl = new PersonCl("Kiran Bansode", 1995);
// console.log(kiranCl);
// kiranCl.calcAge();
// console.log(kiranCl.age);
// console.log(kiranCl.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// // 	console.log(`Hey ${this.firstName}`);
// // };

// kiranCl.greet();

// const walt = new PersonCl("Walt Disney", 1995);

// const account = {
// 	owner: "kiran",
// 	movements: [200, 530, 120, 300],
// 	get latest() {
// 		return this.movements.slice(-1).pop();
// 	},

// 	set latest(mov) {
// 		this.movements.push(mov);
// 	},
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);
// console.log(account.latest);

// PersonCl.hey();

// const PersonProto = {
// 	calcAge() {
// 		console.log(2024 - this.birthYear);
// 	},

// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	},
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ == PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1979);
// sarah.calcAge();

/* --------------------------- Coding Challenge #2 -------------------------- */

// class CarCl {
// 	constructor(make, speed) {
// 		this.make = make;
// 		this.speed = speed;
// 	}

// 	accelerate() {
// 		this.speed += 10;
// 		console.log(`${this.make} is going at ${this.speed} km/h`);
// 	}

// 	brake() {
// 		this.speed -= 5;
// 		console.log(`${this.make} is going at ${this.speed} km/h`);
// 	}

// 	get speedUS() {
// 		return this.speed / 1.6;
// 	}

// 	set speedUS(speed) {
// 		this.speed = speed * 1.6;
// 	}
// }

// const ford = new CarCl("Ford", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford.speedUS);

/* ----------------------------------- End ---------------------------------- */

// const Person = function (firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
// 	console.log(2024 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
// 	Person.call(this, firstName, birthYear);
// 	this.course = course;
// };

// // Linking prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
// 	console.log(`My name is ${this.firstName} nad I study ${this.course}`);
// };

// const mike = new Student("Mike", 2020, "Computer Science");
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

/* --------------------------- Coding Challenge #3 -------------------------- */
// const Car = function (make, speed) {
// 	this.make = make;
// 	this.speed = speed;
// };

// Car.prototype.accelerate = function () {
// 	this.speed += 10;
// 	console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
// 	this.speed -= 5;
// 	console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
// 	Car.call(this, make, speed);
// 	this.charge = charge;
// };

// // Link the prototype
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
// 	this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
// 	this.speed += 20;
// 	this.charge--;
// 	console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
// };

// const tesla = new EV("Tesla", 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

/* ----------------------------------- End ---------------------------------- */

// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}

// 	// Methods will be added to .prototype property
// 	// Also called Instance methods
// 	calcAge() {
// 		console.log(2024 - this.birthYear);
// 	}

// 	greet() {
// 		console.log(`Hey ${this.fullName}`);
// 	}

// 	get age() {
// 		return 2024 - this.birthYear;
// 	}

// 	// Set a property that already exists
// 	set fullName(name) {
// 		console.log(name);
// 		if (name.includes(" ")) this._fullName = name;
// 		else alert(`${name} is not a full name!`);
// 	}

// 	get fullName() {
// 		return this._fullName;
// 	}

// 	// Static methods
// 	static hey() {
// 		console.log("Hey there 👋🏻");
// 		console.log(this);
// 	}
// }

// class studentCl extends PersonCl {
// 	constructor(fullName, birthYear, course) {
// 		// Always need to happen first!!!
// 		super(fullName, birthYear);
// 		this.course = course;
// 	}

// 	introduce() {
// 		console.log(`My name is ${this.firstName} and I study ${this.course}`);
// 	}

// 	calcAge() {
// 		console.log(`I'm ${2024 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear}`);
// 	}
// }

// const kiran = new studentCl("Kiran Bansode", 2012, "Computer Science");

// kiran.introduce();
// kiran.calcAge();

// const PersonProto = {
// 	calcAge() {
// 		console.log(2024 - this.birthYear);
// 	},

// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	},
// };

// const steven = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
// 	PersonProto.init.call(this, firstName, birthYear);
// 	this.course = course;
// };

// StudentProto.introduce = function () {
// 	console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init("Jay", 2010, "Computer Science");
// jay.introduce();
// jay.calcAge();

// 1.Public fields
// 2.Private fields
// 3.Public methods
// 4.Private methods
// (thre is also the static version)

class Account {
	// 1. Public fields (instances)
	locale = navigator.language;

	// 2. Private fields (instances)
	#movements = [];
	#pin;

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		// protected property
		this.#pin = pin;
		// this._movements = [];
		// this.locale = navigator.language;

		console.log(`Thanks for opening an acocunt, ${owner}`);
	}

	// 3. Public methods
	// Public interface
	getMovements() {
		return this.#movements;
	}

	deposit(val) {
		this.#movements.push(val);
	}

	withdraw(val) {
		this.deposit(-val);
	}

	requestLoan(val) {
		if (this.#approveLoan(val)) {
			this.deposit(val);
			console.log("Loan approved");
		}
	}

	static helper() {
		console.log("Helper");
	}

	// 4. Private Methods
	#approveLoan(val) {
		return true;
	}
}

const acc1 = new Account("Jonas", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

// acc1.#approveLoan(1000);
// console.log(acc1.#pin);
// console.log(acc1.#movements);

Account.helper();
// acc1.helper(); // Not Work
