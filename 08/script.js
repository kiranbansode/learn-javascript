"use strict";

function calcAge(birthYear) {
	const age = 2037 - birthYear;

	function printAge() {
		let output = `${firstName}, you are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;
			// Creating New Variable with same name as outer scope's variable
			const firstName = "Meera";

			// Reassigning outer scope's variable
			output = "New Output";

			const str = `Oh, and you'are a millenial, ${firstName}`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
		}
		// console.log(str);
		console.log(millenial);
		// console.log(add(2, 3));
		console.log(output);
	}

	printAge();

	return age;
}

const firstName = "Kiran";
calcAge(1991);
// console.log(age);
// printAge();
