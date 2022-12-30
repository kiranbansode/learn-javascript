"use strict";

const checkDogs = function (dogsJulia, dogsKate) {
	const dogsJuliaCorrected = dogsJulia.slice();
	dogsJuliaCorrected.splice(0, 1);
	dogsJuliaCorrected.splice(-2);

	const dogs = dogsJuliaCorrected.concat(dogsKate);
	console.log(dogs);

	dogs.forEach(function (dog, i) {
		if (dog >= 3) {
			console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
		} else {
			console.log(`Dog number ${i + 1} is still a puppy 🐶`);
		}
	});
};

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const calcAverageHumanAge = function (ages) {
	return ages
		.map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
		.filter((age) => age >= 18)
		.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
