"use strict";

const flight = "LH234";
const kiran = {
	name: "Kiran Bansode",
	passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
	flightNum = "LH999";
	passenger.name = "Mr. " + passenger.name;

	if (passenger.passport === 24739479284) {
		alert("Checked In");
	} else {
		alert("Wrong passport");
	}
};

// checkIn(flight, kiran);
// console.log(flight);
// console.log(kiran);

// // Is the same as doing...
// const flightNum = flight;
// const passenger = kiran;

const newPassport = function (person) {
	person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(kiran);
checkIn(flight, kiran);
