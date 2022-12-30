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

// Array Methods Practice

// 1.
const bankDepositsSum = accounts
	.flatMap((acc) => acc.movements)
	.filter((mov) => mov > 0)
	.reduce((sum, curr) => sum + curr, 0);

console.log(bankDepositsSum);

// 2.
const numDeposits1000 = accounts
	.flatMap((acc) => acc.movements)
	.reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log(++a);
// console.log(a++);
console.log(a);

// 3.
const { deposits, withdrawals } = accounts
	.flatMap((acc) => acc.movements)
	.reduce(
		(sums, curr) => {
			// curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
			sums[curr > 0 ? "deposits" : "withdrawals"] += curr;

			return sums;
		},
		{ deposits: 0, withdrawals: 0 }
	);

console.log(deposits, withdrawals);

// 4.
const convertTitleCase = function (title) {
	const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

	const exceptions = ["a", "an", "and", "the", "but", "or", "in", "with"];

	const titleCase = title
		.toLowerCase()
		.split(" ")
		.map((word) =>
			exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
		)
		.join(" ");
	return capitalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
