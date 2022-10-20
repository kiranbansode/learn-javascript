"use strict";

// function calcAge(birthYear) {
// 	const age = 2037 - birthYear;

// 	function printAge() {
// 		let output = `${firstName}, you are ${age}, born in ${birthYear}`;
// 		console.log(output);

// 		if (birthYear >= 1981 && birthYear <= 1996) {
// 			var millenial = true;
// 			// Creating New Variable with same name as outer scope's variable
// 			const firstName = "Meera";

// 			// Reassigning outer scope's variable
// 			output = "New Output";

// 			const str = `Oh, and you'are a millenial, ${firstName}`;
// 			console.log(str);

// 			function add(a, b) {
// 				return a + b;
// 			}
// 		}
// 		// console.log(str);
// 		console.log(millenial);
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

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Kiran";
let job = "teacher";
const year = 1995;

// Functions
console.log("addDoc1: ", addDoc1(2, 3));
// console.log("addDoc2: ", addDoc2(2, 3));
// console.log("addDoc3: ", addDoc3(2, 3));

function addDoc1(a, b) {
	return a + b;
}

const addDoc2 = function (a, b) {
	return a + b;
};

var addDoc3 = (a, b) => {
	return a + b;
};

// Example
console.log("numProducts", numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
	console.log("All products deleted");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
