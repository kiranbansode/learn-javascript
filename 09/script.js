"use strict";

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	order: function (starterInderx, mainIndex) {
		return [this.starterMenu[starterInderx], this.mainMenu[mainIndex]];
	},

	// Destructuring with default values
	orderDelivery: function ({
		starterIndex = 1,
		mainIndex = 0,
		time = "20:00",
		address,
	}) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	orderPasta: function (ing1, ing2, ing3) {
		console.log(
			`Here is your delicious past with ${ing1}, ${ing2} and ${ing3}`
		);
	},

	orderPizza: function (mainIng, ...otherIng) {
		console.log(mainIng);
		console.log(otherIng);
	},
};

console.log("-------OR---------");

// Use any data types, return any data type, short-circuting
console.log(3 || "Kiran");
console.log("" || "Kiran");
console.log(true || 0);
console.log(0 || true);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("-------AND---------");

console.log(0 && "Kiran");
console.log(7 && "Kiran");
console.log("Hello" && 23 && null && "Kiran");

if (restaurant.orderPizza) {
	restaurant.orderPizza("mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");

/* --------------------------- Rest Operator (...) -------------------------- */

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
	...restaurant.mainMenu,
	...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions

const add = function (...numbers) {
	let sum = 0;
	numbers.map((num) => {
		sum += num;
	});
	console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [22, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives");
restaurant.orderPizza("mushrooms");

/* ------------------------ The Spread Operator (...) ----------------------- */

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables are arrays, strings, maps, sets. But objects are not

// const str = "Kiran";
// const letters = [...str, "", "B."];
// console.log(letters);
// console.log(...str);

// // Real world example
// const ingredients = [
// 	// prompt("Lets make pasta! Ingredient 1 ?"),
// 	// prompt("Lets make pasta! Ingredient 2 ?"),
// 	// prompt("Lets make pasta! Ingredient 3 ?"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // Copying Objects
// const newRestaurant = { foundIn: 1996, ...restaurant, founder: "Meera" };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Shourya Wada";
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

/* -------------------------- Destructuring Objects ------------------------- */

// restaurant.orderDelivery({
// 	time: "22:30",
// 	address: "Not Real Address",
// 	mainIndex: 2,
// 	starterIndex: 2,
// });

// restaurant.orderDelivery({
// 	address: "Not Real Address",
// 	starterIndex: 1,
// });

// const { name, categories, openingHours } = restaurant;
// console.log(name, openingHours, categories);

// // Renaming destructured properties
// const {
// 	name: restaurantName,
// 	openingHours: hours,
// 	categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default Values
// const { newMenu, menu = [], starterMenu: starters = [] } = restaurant;
// console.log(newMenu, menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // Need to wrap inside () brackets
// ({ a, b } = obj);
// console.log(a, b);

// // destructuring nested objects
// const {
// 	fri: { open, close: c },
// } = openingHours;

// console.log(open, c);

/* -------------------------- Destructuring Arrays -------------------------- */

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching Variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
