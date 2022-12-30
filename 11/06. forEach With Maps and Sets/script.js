"use strict";

const currencies = new Map([
	["USD", "United States dollar"],
	["EUR", "Euro"],
	["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
	console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "INR"]);
console.log(currenciesUnique);

// in javascript `_` is used as throw away value - declared but will not be used
currenciesUnique.forEach(function (value, _, map) {
	console.log(`${value}: ${value}`);
});
