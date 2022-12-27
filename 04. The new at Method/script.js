"use strict";

// at() method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Traditional ways to extract last value
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

// Modern way
console.log(arr.at(-1));
console.log(arr.at(-2));

// at() method also works on strings
console.log("kiran".at(0));
console.log("kiran".at(-1));
