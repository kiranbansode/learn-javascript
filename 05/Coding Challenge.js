/* ---------------------------- Coding Challenge ---------------------------- */

/* 
    1) Understanding the problem
    -   Array transformed to string, separated by ...
    -   What is the X days ? -> index + 1
    2) Breaking up into sub-problems
    -   Transform array into string
    -   Transform each element to string with C
    -   Strings need to contain day (index + 1)
    -   Add ... between element and start and end of string
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (data) {
  const prefix = '...';
  let printMssg = prefix;

  for (i = 0; i < data.length; i++) {
    printMssg += ` ${data[i]}°C in ${i + 1} days ...`;
  }
  return printMssg;
};

console.log(printForecast(data1));
console.log(printForecast(data2));
