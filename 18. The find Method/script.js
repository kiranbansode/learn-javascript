"use strict";

// BANKIST APP

// Data
const account1 = {
	owner: "Kiran Bansode",
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
	containerMovements.innerHTML = "";
	// .textContent = 0

	movements.forEach(function (mov, i) {
		const type = mov > 0 ? "deposit" : "withdrawal";

		const html = `<div class="movements__row">
		<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
		<div class="movements__value">${mov}€</div>
	  </div>`;

		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
	const balance = movements.reduce((acc, curr) => acc + curr, 0);

	labelBalance.textContent = `€ ${balance}`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
	const incomes = movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	const out = movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	const interest = movements
		.filter((mov) => mov > 0)
		.map((deposit) => (deposit * 1.2) / 100)
		.filter((int, i, arr) => {
			console.log(arr);
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);

	labelSumIn.textContent = `${incomes}€`;
	labelSumOut.textContent = `${Math.abs(out)}€`;
	labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
	accs.forEach(function (acc) {
		acc.username = acc.owner
			.toLowerCase()
			.split(" ")
			.map((name) => name[0])
			.join("");
	});
};
createUsernames(accounts);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> SNOWBALL
// const balance = movements.reduce((acc, curr, i, arr) => {
// 	console.log(`Iteration ${i} : ${acc}`);
// 	return acc + curr;
// }, 100);

const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
	if (acc > mov) {
		return acc;
	} else {
		return mov;
	}
}, movements[0]);

console.log(max);

const euroToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
	.filter((mov, i, arr) => mov > 0)
	.map((mov, i, arr) => mov * euroToUsd)
	.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// find() method
const firstWithdrawal = movements.find((mov) => mov < 0);

console.log(movements);
console.log(firstWithdrawal);
console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Kiran Bansode");
console.log(account);

// Challenge
for (const acc of accounts) {
	if (acc.owner === "Kiran Bansode") {
		console.log(acc);
		break;
	}
}
