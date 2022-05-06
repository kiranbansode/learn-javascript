/* Coding Challenge 1 */

const markHeight = 1.69;
const johnHeight = 1.88;
const markWeight = 78;
const johnWeight = 95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
