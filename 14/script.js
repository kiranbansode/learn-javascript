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

// 1. {} New Empty Object is created
// 2. function is called, 'this' gets assign to => {} Newly created empty object
// 3. {} object is linked to prototype
// 4. function automatically return {}

const meera = new Person("Meera", 2001);
const jack = new Person("Jack", 1975);
console.log(meera, jack);

console.log(kiran instanceof Person);
