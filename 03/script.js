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

// // Arrow Function
// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2022 - birthYear;
// 	const retirement = 65 - age;
// 	// return retirement;
// 	return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1995, "Kiran"));
// console.log(yearsUntilRetirement(1989, "Mahi"));

// function cutFruitPieces(fruit) {
// 	return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples);
// 	const orangePieces = cutFruitPieces(oranges);

// 	const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
// 	return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
// 	return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
// 	const age = calcAge(birthYear);
// 	const retirement = 65 - age;

// 	if (retirement > 0) {
// 		console.log(`${firstName} retires in ${retirement} years`);
// 		return retirement;
// 	} else {
// 		console.log(`${firstName} has already retired 🏖️`);
// 		return -1;
// 	}

// 	// return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1995, "Kiran"));
// console.log(yearsUntilRetirement(1949, "Mahi"));

// const friend1 = "Meera";
// const friend2 = "Heera";
// const friend3 = "Jeera";

// const friends = ["Meera", "Heera", "Jeera"];
// console.log(friends);

// const years = new Array(1991, 1994, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Kabira";
// console.log(friends);
// // friends = ["Bob", "Alice"];

// const firstName = "Jonas";
// const kiran = [firstName, "Bansode", 2022 - 1995, "teacher", friends];
// console.log(kiran.length);

// // Exercise

// const calcAge = function (birthYear) {
// 	return 2022 - birthYear;
// };

// const birthYears = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(birthYears[0]);
// const age2 = calcAge(birthYears[1]);
// const age3 = calcAge(birthYears[birthYears.length - 1]);

// console.log(age1, age2, age3);

// const ages = new Array(age1, age2, age3);

// const ages2 = [
// 	calcAge(birthYears[0]),
// 	calcAge(birthYears[1]),
// 	calcAge(birthYears[birthYears.length - 1]),
// ];

// console.log(ages, ages2);

// const friends = ["Meera", "Heera", "Jeera"];

// // Add Elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// console.log(friends.unshift("John"));
// console.log(friends);

// // Remove elements
// console.log(friends.pop());
// friends.pop();
// console.log(friends);

// console.log(friends.shift());
// console.log(friends);

// console.log(friends.indexOf("Meera"));
// console.log(friends.indexOf("Heera"));

// friends.push(23);
// console.log(friends.includes("Meera"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// if (friends.includes("Meera")) {
// 	console.log("You have a friend called Meera");
// }

const kiran = {
	firstName: "Kiran",
	lastName: "Bansode",
	age: 2022 - 1995,
	job: "teacher",
	friends: ["Meera", "Heera", "Jeera"],
};

console.log(kiran);
// Dot Notation
console.log(kiran.lastName);

// Bracket Notation
console.log(kiran["lastName"]);

// Computer Property
const lastName = "Name";
console.log(kiran["first" + lastName]);
console.log(kiran["last" + lastName]);

const interestedIn = prompt(
	"What do you want to know about Kiran ? Choose between firstName, lastName, age, job or friends"
);

if (kiran[interestedIn]) {
	console.log(kiran[interestedIn]);
} else {
	console.log(
		"Wrong request! Choose between firstName, lastName, age, job or friends "
	);
}

kiran.location = "India";
kiran["instagram"] = "_kiran.bansode_";
console.log(kiran);

// Challenge
// Kiran has 3 friends, and his best friend is called 'Meera'

const kiran2 = {
	firstName: "Kiran",
	friends: ["Meera", "Heera", "Jeera"],
};

console.log(
	`${kiran2.firstName} has ${kiran2.friends.length} friends, and his best friend is called ${kiran.friends[0]}`
);
