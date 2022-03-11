/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Kiran");
console.log(23); */

// Declaring a variable name firstName with the help of `let`
// let firstName = "Meera";

//to access stored value in variable just use variable name
/* console.log(firstName);
console.log(firstName);
console.log(firstName); */

// Variable name conventions
/* let kiran_bansode = "KB";
let $function = 27;

let person = "kiran";
let PI = 3.1415;

let myFirstJob = "Teacher";
let myFutureJob = "Software Engineer";

let job1 = "techer";
let job2 = "programmer";

console.log(myFutureJob); */

// Single Line Comment

/* 
    Multi Line Comment
*/

/* let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Kiran");

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
 */

/* let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1998;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Bansode";
console.log(lastName); */

// maths operator
// const now = 2037;
// const ageKiran = now - 1995;
// const ageMeera = now - 2018;
// console.log(ageKiran, ageMeera);

// console.log(ageKiran * 2, ageKiran / 10, 2 ** 3);
// // 2 ** 3 means to the power of 3  = 2 * 2 * 2

// const firstName = "Kiran";
// const lastName = "Bansode";
// console.log(firstName + " " + lastName);

// assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + x = 101
// x--; // x = x - x = 100
// x--; // x = x - x = 99
// console.log(x);

// // comparison operators
// console.log(ageKiran > ageMeera); // >, <, =>, <=
// console.log(ageMeera >= 18);

// const isFullAge = ageMeera >= 18;
// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageKiran = now - 1995;
// const ageMeera = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10,x = 10
// console.log(x, y);

// const averageAge = (ageKiran + ageMeera) / 2;
// console.log(ageKiran, ageMeera, averageAge);

// const firstName = "Kiran";
// const job = "teacher";
// const birthYear = 1995;
// const year = 2037;

// const kiran =
// 	"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(kiran);

// // Template literals (Template strings)
// const kiranNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// console.log(kiranNew);

// // Template literals can be used to create regular strings
// console.log(`Just a regular string...`);

// // using Escape Characters
// console.log("String with \n\
// multiple \n\
// lines");

// // using Template Literals
// console.log(`String
// multiple
// lines`);

// const age = 15;

// // control structure
// if (age >= 18) {
// 	console.log(`Sarah can start driving license 🚗`);
// } else {
// 	const yearsLeft = 18 - age;
// 	console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
// 	century = 20;
// } else {
// 	century = 21;
// }

// console.log(century);

// Type Conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Kiran"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Type Coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log(3 + "23" + "10");

// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1; //'11'
// n = n - 1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Kiran"));
// console.log(Boolean(""));
// console.log(Boolean({}));
// console.log(Boolean([]));

// const money = 1000;
// if (money) {
// 	console.log("Don't spend it all");
// } else {
// 	console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
// 	console.log("YAY! Height is defined");
// } else {
// 	console.log("Height is UNDEFINED");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult :D");

// if (age == 18) console.log("You just became an adult :D (loosly)");

// const favourite = Number(prompt("What's your favourite number ?"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
// 	console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
// 	console.log("7 is also a cool number");
// } else if (favourite === 9) {
// 	console.log("9 is also a cool number");
// } else {
// 	console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("Why not 23 ?");

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// // 	console.log("Sarah is able to drive");
// // } else {
// // 	console.log("Someone else should drive");
// // }

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
// 	console.log("Sarah is able to drive");
// } else {
// 	console.log("Someone else should drive");
// }

// const day = "tuesday";

// switch (day) {
// 	case "monday":
// 		console.log("Plan course structure");
// 		console.log("Go to coding meetup");
// 		break;
// 	case "tuesday":
// 		console.log("Prepare theory videos");
// 		break;
// 	case "wednesday":
// 	case "thursday":
// 		console.log("Write code examples");
// 		break;
// 	case "friday":
// 		console.log("Record videos");
// 		break;
// 	case "saturday":
// 	case "sunday":
// 		console.log("Enjoy the weekend");
// 	default:
// 		console.log("Not a valid day");
// 		break;
// }

// if (day === "monday") {
// 	console.log("Plan course structure");
// 	console.log("Go to coding meetup");
// } else if (day === "tuesday") {
// 	console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thurday") {
// 	console.log("Write code examples");
// } else if (day === "friday") {
// 	console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
// 	console.log("Enjoy the weekend");
// } else {
// 	console.log("Not a valid day");
// }

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
	const str = "23 is bigger";
}

const me = "kiran";
console.log(`I'm ${2037 - 1991} years old ${me}`);
