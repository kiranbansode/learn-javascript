"use strict";

const oneWord = function (str) {
	return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
	const [first, ...other] = str.split(" ");
	return [first.toUpperCase(), ...other].join(" ");
};

// Higher-Order function
const transFormer = function (str, fn) {
	console.log(str);
	console.log(`Transformed string: ${fn(str)}`);

	console.log(`Transformed by ${fn.name}`);
};

transFormer("JavaScript is the best!", upperFirstWord);

transFormer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
	console.log("👋🏻");
};

document.body.addEventListener("click", high5);

["Kiran", "Meera", "KL"].forEach(high5);
