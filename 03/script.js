"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;

// function logger() {
// 	console.log("My name is Kiran");
// }

// // Invoking, Calling or Running function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// 	return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// const num = Number("23");

// // Function Declaration
// function calcAge1(birthYear) {
// 	// const age = 2037 - birthYear;
// 	return 2022 - birthYear;
// }
// const age1 = calcAge1(1995);

// // Function Expression
// const calcAge2 = function (birthYear) {
// 	return 2022 - birthYear;
// };
// const age2 = calcAge2(1995);

// console.log(age1, age2);

// Arrow Function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2022 - birthYear;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "Kiran"));
console.log(yearsUntilRetirement(1989, "Mahi"));
