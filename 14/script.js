"use strict";

const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Never do this
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// };
};

const kiran = new Person("Kiran", 1995);
console.log(kiran);

// 1. {} => New Empty Object is created
// 2. function is called, 'this' gets assign to => {} Newly created empty object
// 3. {} object is linked to prototype
// 4. function automatically return {}

const meera = new Person("Meera", 2000);
const jack = new Person("Jack", 1975);
console.log(meera, jack);

console.log(kiran instanceof Person);

console.log(Person.prototype);

// Prototypes
Person.prototype.calcAge = function () {
	console.log(2024 - this.birthYear);
};

kiran.calcAge();
meera.calcAge();

console.log(kiran.__proto__);
console.log(kiran.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(kiran));
console.log(Person.prototype.isPrototypeOf(meera));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(kiran.species, meera);

console.log(kiran.hasOwnProperty("firstName"));
console.log(kiran.hasOwnProperty("species"));

console.log(kiran.__proto__);
console.log(kiran.__proto__.__proto__);
console.log(kiran.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 5, 6, 7, 4, 5, 9, 3, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Not recommended
// may be in future JavaScript relese new method with same name
Array.prototype.unique = function () {
	return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
// Prototype Chain
// Object => EventTarget => Node => Element => HTMLElement => HTMLHeadingElement

console.dir((x) => x + 1);
