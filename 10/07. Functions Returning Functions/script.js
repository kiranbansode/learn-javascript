"use strict";

const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

// Challenge
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet("Hey");
greeterHey("Kiran");
greeterHey("Meera");

greet("Hello")("Kiran");
greet2("Hello")("Kiran");
