/* Coding Challenge 1 */
const markHeight = 1.69;
const johnHeight = 1.88;
const markWeight = 78;
const johnWeight = 95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

/* Coding Challenge 2 */

if (markBMI > johnBMI) {
	console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
	console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

/* Coding Challenge 3 */

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;

// console.log(dolphinsScore, koalasScore);

// if (dolphinsScore > koalasScore) {
// 	console.log("Dolphins win the trophy 🏆");
// } else if (koalasScore > dolphinsScore) {
// 	console.log("Koalas win the trophy 🏆");
// } else if (koalasScore === dolphinsScore) {
// 	console.log("Both win the trophy");
// }

// Bonus 1
const dolphinsScore = (97 + 112 + 80) / 3;
const koalasScore = (109 + 95 + 50) / 3;

console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
	console.log("Dolphins win the trophy 🏆");
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
	console.log("Koalas win the trophy 🏆");
} else if (koalasScore === dolphinsScore && koalasScore >= 100) {
	console.log("Both win the trophy");
} else {
	console.log("No one wins the trophy 😭");
}
