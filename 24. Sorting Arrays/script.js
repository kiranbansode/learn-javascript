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

const displayMovements = function (movements, sort = false) {
	containerMovements.innerHTML = "";

	const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

	movs.forEach(function (mov, i) {
		const type = mov > 0 ? "deposit" : "withdrawal";

		const html = `<div class="movements__row">
		<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
		<div class="movements__value">${mov}€</div>
	  </div>`;

		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};

const calcDisplayBalance = function (acc) {
	acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);

	labelBalance.textContent = `€ ${acc.balance}`;
};

const calcDisplaySummary = function (acc) {
	const incomes = acc.movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	const out = acc.movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	const interest = acc.movements
		.filter((mov) => mov > 0)
		.map((deposit) => (deposit * acc.interest) / 100)
		.filter((int, i, arr) => {
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);

	labelSumIn.textContent = `${incomes}€`;
	labelSumOut.textContent = `${Math.abs(out)}€`;
	labelSumInterest.textContent = `${interest}€`;
};

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

const updateUI = function (acc) {
	// Display movements
	displayMovements(acc.movements);

	// Display balance
	calcDisplayBalance(acc);

	// Display Summary
	calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
	e.preventDefault();
	currentAccount = accounts.find(
		(acc) => acc.username === inputLoginUsername.value
	);
	console.log(currentAccount);

	if (currentAccount?.pin === Number(inputLoginPin.value)) {
		// Display UI and message
		labelWelcome.textContent = `Welcome back, ${
			currentAccount.owner.split(" ")[0]
		}`;
		containerApp.style.opacity = 100;

		// Clear the input fields
		inputLoginPin.value = "";
		inputLoginUsername.value = "";
		inputLoginPin.blur();
		updateUI(currentAccount);
	}
});

btnLoan.addEventListener("click", function (e) {
	e.preventDefault();
	const amount = Number(inputLoanAmount.value);

	if (
		amount > 0 &&
		currentAccount.movements.some((mov) => mov >= amount * 0.1)
	) {
		// Add movement
		currentAccount.movements.push(amount);

		// Update UI
		updateUI(currentAccount);
	}
	inputLoanAmount.value = "";
});

btnTransfer.addEventListener("click", function (e) {
	e.preventDefault();
	const amount = Number(inputTransferAmount.value);
	const receiverAcc = accounts.find(
		(acc) => acc.username === inputTransferTo.value
	);
	inputTransferAmount.value = inputTransferTo.value = "";

	if (
		amount > 0 &&
		receiverAcc &&
		currentAccount.balance >= amount &&
		receiverAcc?.username !== currentAccount.username
	) {
		// Doing the transfer
		currentAccount.movements.push(-amount);
		receiverAcc.movements.push(amount);

		//  Update UI
		updateUI(currentAccount);
	}
});

btnClose.addEventListener("click", function (e) {
	e.preventDefault();

	if (
		inputCloseUsername.value === currentAccount.username &&
		Number(inputClosePin.value) === currentAccount.pin
	) {
		const index = accounts.findIndex(
			(acc) => acc.username === currentAccount.username
		);
		console.log(index);

		// Delete account
		accounts.splice(index, 1);

		// Hide UI
		containerApp.style.opacity = 0;
	}

	inputClosePin.value = inputCloseUsername.value = "";
});

let sorted = false;

btnSort.addEventListener("click", function (e) {
	e.preventDefault();
	displayMovements(currentAccount.movements, !sorted);
	sorted = !sorted;
});

/* -------------------------------- Lectures -------------------------------- */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, curr) => acc + curr, 0);

let balance2 = 0;
for (const mov of movements) balance2 += mov;

// Maximum value
const max = movements.reduce((acc, mov) => {
	if (acc > mov) {
		return acc;
	} else {
		return mov;
	}
}, movements[0]);

const euroToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
	.filter((mov, i, arr) => mov > 0)
	.map((mov, i, arr) => mov * euroToUsd)
	.reduce((acc, mov) => acc + mov, 0);

console.log(movements);

// Checks equality
console.log(movements.includes(-130));

//  Condition
console.log(movements.some((mov) => mov === -130));

// some() method
const anyDeposits = movements.some((mov) => mov > 1500);
console.log(anyDeposits);

// every() method
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// flat() method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const overallBalance2 = accounts
	.map((acc) => acc.movements)
	.flat()
	.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// flatMap() method
const overallBalance3 = accounts
	// .map((acc) => acc.movements)
	// .flat()
	.flatMap((acc) => acc.movements)
	.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// sort() method

// Strings
const owners = ["Kiran", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort());

// return < 0 , A, B (keep order)
// return > 0 , B, A (switch order)

// Ascending
// console.log(
// 	movements.sort((a, b) => {
// 		if (a > b) return 1;
// 		if (a < b) return -1;
// 	})
// );
console.log(movements.sort((a, b) => a - b));

// Descending
// console.log(
// 	movements.sort((a, b) => {
// 		if (a > b) return -1;
// 		if (a < b) return 1;
// 	})
// );
console.log(movements.sort((a, b) => b - a));
