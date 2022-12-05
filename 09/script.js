"use strict";

// Data needed for a later exercise
// const flights =
// 	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const openingHours = {
// 	[weekdays[3]]: {
// 		open: 12,
// 		close: 22,
// 	},
// 	[weekdays[4]]: {
// 		open: 11,
// 		close: 23,
// 	},
// 	[weekdays[5]]: {
// 		open: 0, // Open 24 hours
// 		close: 24,
// 	},
// };

// // Data needed for first part of the section
// const restaurant = {
// 	name: "Classico Italiano",
// 	location: "Via Angelo Tavanti 23, Firenze, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],
// 	// ES6 enhanced object literals
// 	openingHours,
// 	order(starterInderx, mainIndex) {
// 		return [this.starterMenu[starterInderx], this.mainMenu[mainIndex]];
// 	},

// 	// Destructuring with default values
// 	orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
// 		console.log(
// 			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// 		);
// 	},

// 	orderPasta(ing1, ing2, ing3) {
// 		console.log(
// 			`Here is your delicious past with ${ing1}, ${ing2} and ${ing3}`
// 		);
// 	},

// 	orderPizza(mainIng, ...otherIng) {
// 		console.log(mainIng);
// 		console.log(otherIng);
// 	},
// };

// // Properties Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days`;
// for (const day of properties) {
// 	openStr += `${day}, `;
// }
// console.log(openStr);

// // Properties Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entries object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
// 	console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

/* ---------------------------- Optional Chaining --------------------------- */

// if (restaurant.openingHours.mon && restaurant.openingHours.mon)
// 	console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
// 	const open = restaurant.openingHours[day]?.open ?? "closed";
// 	console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exists");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exists");

// // Arrays
// const users = [{ name: "Kiran", email: "kiran5120135@gmail.com" }];
// const users2 = [];

// console.log(users2[0]?.name ?? "User array empty");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
// 	console.log(`${i + 1}: ${el}`);
// }

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
// 	name: "Capri",
// 	// numGuest: 20,
// 	numGuest: 0,
// };

// const rest2 = {
// 	name: "La Piazza",
// 	owner: "Giovanni Roosi",
// };

// // rest1.numberGuest = rest1.numGuest || 10;
// // rest2.numberGuest = rest2.numGuest || 10;

// // OR assignment operator
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// // Nullish assignment operator (null or undefined)
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// // rest1.owner = rest1.owner && "Anonymous";
// // rest2.owner = rest2.owner && "Anonymous";

// // AND assignment operator
// rest1.owner &&= "Anonymous";
// rest2.owner &&= "Anonymous";

// console.log(rest1);
// console.log(rest2);

// console.log("-------OR---------");

// // Use any data types, return any data type, short-circuiting
// console.log(3 || "Kiran");
// console.log("" || "Kiran");
// console.log(true || 0);
// console.log(0 || true);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("-------AND---------");

// console.log(0 && "Kiran");
// console.log(7 && "Kiran");
// console.log("Hello" && 23 && null && "Kiran");

// if (restaurant.orderPizza) {
// 	restaurant.orderPizza("mushroom", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");

// /* --------------------------- Rest Operator (...) -------------------------- */

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because of LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
// 	...restaurant.mainMenu,
// 	...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // Functions

// const add = function (...numbers) {
// 	let sum = 0;
// 	numbers.map((num) => {
// 		sum += num;
// 	});
// 	console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [22, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "olives");
// restaurant.orderPizza("mushrooms");

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

// const ordersSet = new Set([
// 	"Pasta",
// 	"Pizza",
// 	"Pizza",
// 	"Risotto",
// 	"Pasta",
// 	"Pizza",
// ]);
// console.log(ordersSet);

// console.log(new Set("Kiran"));
// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Examples

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
// 	new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
// );

// console.log(new Set("KiranBansode").size);

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));

// rest
// 	.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
// 	.set("open", 11)
// 	.set("close", 23)
// 	.set(true, "We are open :D")
// 	.set(false, "We are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// console.log(rest.delete(2));
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, "test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.get(arr));
// console.log(rest.size);

// const question = new Map([
// 	["question", "What is the best programming language in the world ?"],
// 	[1, "C"],
// 	[2, "C++"],
// 	[3, "Java"],
// 	[4, "JavaScript"],
// 	["correct", 4],
// 	[true, "Correct"],
// 	[false, "Try Again!"],
// ]);

// console.log(question);

// // Convert object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get("question"));

// for (const [key, value] of question) {
// 	if (typeof key === "number") console.log(`Option ${key}: ${value}`);
// }
// const answer = Number(prompt("Your answer"));
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));

// // Convert Map to Array

// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = "kIrAn";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
	passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "kiran@gmail.com";
const loginEmail = "      kiran@gmail.com \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(console.log(trimmedEmail));

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceUS = "288.97$";
const priceINR = priceUS.replace("$", "₹");
console.log(priceINR);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Aib"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
	console.log("Part of the new Airbus family");
}

// Practice exercise

const checkBaggage = function (items) {
	const baggage = items.toLowerCase();

	if (baggage.includes("knife") || baggage.includes("gun")) {
		console.log("You are not allowed on board");
	} else {
		console.log("Welcome aboard!");
	}
};
checkBaggage("I have a laptop, some food and a pocket knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for protection");

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("portugal"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
// 	const s = seat.slice(-1);
// 	if(s==='B' || 'E'){
// 		console.log('You got the middle seat 😑');
// 	}else{
// 		console.log('You got lucky 😎')
// 	}

// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String('kiran'));
// console.log(typeof new String('kiran'));
// console.log(typeof new String('kiran').slice(1));
