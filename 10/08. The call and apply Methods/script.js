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
