"use strict";

// function calcAge(birthYear) {
// 	const age = 2037 - birthYear;

// 	function printAge() {
// 		let output = `${firstName}, you are ${age}, born in ${birthYear}`;
// 		console.log(output);

// 		if (birthYear >= 1981 && birthYear <= 1996) {
// 			var millennial = true;
// 			// Creating New Variable with same name as outer scope's variable
// 			const firstName = "Meera";

// 			// Reassigning outer scope's variable
// 			output = "New Output";

// 			const str = `Oh, and you'are a millennial, ${firstName}`;
// 			console.log(str);

// 			function add(a, b) {
// 				return a + b;
// 			}
// 		}
// 		// console.log(str);
// 		console.log(millennial);
// 		// console.log(add(2, 3));
// 		console.log(output);
// 	}

// 	printAge();

// 	return age;
// }

// const firstName = "Kiran";
// calcAge(1991);
// console.log(age);
// printAge();

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Kiran";
// let job = "teacher";
// const year = 1995;

// // Functions
// console.log("addDoc1: ", addDoc1(2, 3));
// // console.log("addDoc2: ", addDoc2(2, 3));
// // console.log("addDoc3: ", addDoc3(2, 3));

// function addDoc1(a, b) {
// 	return a + b;
// }

// const addDoc2 = function (a, b) {
// 	return a + b;
// };

// var addDoc3 = (a, b) => {
// 	return a + b;
// };

// // Example
// console.log("numProducts", numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
// 	console.log("All products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this); // window

// const calcAge = function (birthYear) {
// 	console.log(2022 - birthYear);
// 	console.log(this); // undefined in 'strict' mode
// };

// calcAge(1995);

// const calcAgeArrow = (birthYear) => {
// 	console.log(2022 - birthYear);
// 	console.log(this); // window object
// 	// Arrow function will use their parent's scope
// };

// calcAgeArrow(1995);

// const kiran = {
// 	birthYear: 1995,
// 	calcAge: function () {
// 		console.log(this); // object where it is defined
// 		console.log(2022 - this.birthYear);
// 	},
// 	calcAge2: () => {
// 		console.log(this); // it will return window object
// 		console.log(2022 - this.birthYear); // will not work
// 	},
// };

// kiran.calcAge();
// kiran.calcAge2();

// const meera = {
// 	year: 2017,
// };

// meera.calcAge = kiran.calcAge;
// meera.calcAge();

// const f = kiran.calcAge;
// f();

// var firstName = "Meera";

// const kiran = {
// 	firstName: "Kiran",
// 	birthYear: 1995,
// 	calcAge: function () {
// 		console.log(this); // window
// 		console.log(2022 - this.birthYear);

// 		/* ------------------------------- Solution 1 ------------------------------- */
// 		// const self = this; // self or that
// 		// const isMillennial = function () {
// 		// 	console.log(self);
// 		// 	console.log(self.year >= 1981 && self.year <= 1996);
// 		// };
// 		// isMillennial();

// 		/* ------------------------------- Solution 2 ------------------------------- */
// 		const isMillennial = () => {
// 			console.log(this);
// 			console.log(this.year >= 1981 && this.year <= 1996);
// 		};
// 		isMillennial();
// 	},
// 	greet: function () {
// 		console.log(`Hey ${this.firstName}`);
// 	},
// 	//! Never ever use arrow functions for methods
// 	// greet: () => console.log(`Hey ${this.firstName}`),
// };

// kiran.greet();
// kiran.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
// 	// arguments keyword will work in only function created using function keyword not in arrow functions
// 	console.log(arguments);
// 	return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
// 	console.log(arguments);
// 	return a + b;
// };

// addArrow(2, 5, 8);

// let age = 27;
// let oldAge = age;
// age = 28;

// console.log(age);
// console.log(oldAge);

// const me = {
// 	name: "Kiran",
// 	age: 27,
// };

// const friend = me;
// friend.age = 26;
// console.log("Friend", friend);
// console.log("Me", me);

// Primitive Types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);

// marriedJessica = {}

// Copying objects
const jessica2 = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
	family: ["Alice", "Bob"],
};

const marriedJessica2 = Object.assign({}, jessica2);
marriedJessica2.lastName = "Davis";

marriedJessica2.family.push("Mary");
marriedJessica2.family.push("John");

console.log("Before marriage: ", jessica2);
console.log("After marriage: ", marriedJessica2);
