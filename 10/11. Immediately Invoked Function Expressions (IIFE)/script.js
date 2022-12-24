"use strict";

const runOnce = function () {
	console.log("This will never run again");
};
runOnce();

// Immediately Invoked Function Expression with function declaration
(function () {
	console.log("This will never run again");
	const isPrivate = 23;
})();

// console.log(isPrivate);

// Immediately Invoked Function Expression with Arrow function
(() => {
	console.log("This will never run again");
})();

// Block Scope
{
	const isPrivate = 23;
	var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
