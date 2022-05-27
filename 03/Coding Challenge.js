/* --------------------------- Coding Challenge #1 -------------------------- */
console.log("Coding Challenge #1");

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// Game #1
const dolphinsScore1 = calcAverage(44, 23, 71);
const koalasScore1 = calcAverage(65, 54, 49);

// Game #2
const dolphinsScore2 = calcAverage(85, 54, 41);
const koalasScore2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		return `Dolphins win [Dolphin: ${avgDolphins}, Koalas: ${avgKoalas}]`;
	} else if (avgKoalas >= 2 * avgDolphins) {
		return `Koalas win [Dolphin: ${avgDolphins}, Koalas: ${avgKoalas}]`;
	} else {
		return `No teams wins...[Dolphin: ${avgDolphins}, Koalas: ${avgKoalas}]`;
	}
}

// Game #1
console.log("Game 1 :", checkWinner(dolphinsScore1, koalasScore1));

// Game #2
console.log("Game 2 :", checkWinner(dolphinsScore2, koalasScore2));

/* --------------------------- Coding Challenge #2 -------------------------- */

console.log("Coding Challenge #2");

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const calcTotal = (bill, tip) => bill + tip;

const totals = [
	calcTotal(bills[0], tips[0]),
	calcTotal(bills[1], tips[1]),
	calcTotal(bills[2], tips[2]),
];

console.log(totals);

/* --------------------------- Coding Challenge #3 -------------------------- */
console.log("Coding Challenge #3");

const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};
const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

console.log(mark.bmi, john.bmi);

if (markBMI > johnBMI) {
	console.log(
		`${mark.fullName}'s BMI ${markBMI} is higher than ${john.fullName}'s BMI ${johnBMI}`
	);
} else {
	console.log(
		`${john.fullName}'s BMI ${johnBMI} is higher than ${mark.fullName}'s BMI ${markBMI}`
	);
}

/* --------------------------- Coding Challenge #4 -------------------------- */

console.log("Coding Challenge #4");

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips2 = [];
const totals2 = [];

const calcTip2 = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let currentBill = 0; currentBill < bills2.length; currentBill++) {
	const tip = calcTip(bills2[currentBill]);
	tips2.push(tip);
	totals2.push(tip + bills2[currentBill]);
}

console.log(bills2, tips2, totals2);

const calcAverage2 = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum / arr.length;
};

console.log(calcAverage2(totals2));
console.log(calcAverage2(tips2));
