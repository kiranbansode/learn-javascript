"use strict";

const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	booking: [],

	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(239, "Kiran Bansode");
lufthansa.book(635, "Meera");

const eurowings = {
	airline: "Eurowings",
	iataCode: "EW",
	booking: [],
};

const book = lufthansa.book;

// Does not work
// book(23, "Sarah Williams");
book.call(eurowings, 23, "Komal");
console.log(eurowings);

// Call Method
book.call(lufthansa, 239, "Harry Potter");
console.log(lufthansa);

const swiss = {
	airline: "Swiss Air Lines",
	iataCode: "SAL",
	booking: [],
};

book.call(swiss, 425, "Marley Moore");

// Apply Method
const flightData = [583, "George Kant"];
book.apply(swiss, flightData);

// Call method is preferred
book.call(swiss, ...flightData);
console.log(swiss);

// Bind method
// book.call(eurowings, 23, "Komal");

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSAL = book.bind(swiss);

bookEW(23, "Steven McGill");

// Partial Application = 23
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Kiran Bansode");
bookEW23("Manish malhotra");

//  With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
	console.log(this);

	this.planes++;
	console.log(this.planes);
};
// lufthansa.buyPlane();

document
	.querySelector(".buy")
	.addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
	return function (value) {
		return value + value * rate;
	};
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
