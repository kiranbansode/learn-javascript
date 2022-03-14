/* --------------------------- Coding Challenge #1 -------------------------- */
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
