"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (msg) {
	countriesContainer.insertAdjacentText("beforeend", msg);
};

const renderCountry = function (data, className = "") {
	const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

	countriesContainer.insertAdjacentHTML("beforeend", html);
};

// const getCountryAndNeighbour = function (country) {
// 	const request = new XMLHttpRequest();
// 	request.open("GET", `https://restcountries.com/v2/name/${country}`);
// 	request.send();

// 	request.addEventListener("load", function () {
// 		const [data] = JSON.parse(this.responseText);
// 		console.log(data);

// 		// Rendere Country 1
// 		renderCountry(data);

// 		// Get neighbour country (2)
// 		const neighbour = data.borders?.[0];

// 		if (!neighbour) return;

// 		const request2 = new XMLHttpRequest();
// 		request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
// 		request2.send();

// 		request2.addEventListener("load", function () {
// 			const data2 = JSON.parse(this.responseText);
// 			console.log(data2);
// 			renderCountry(data2, "neighbour");
// 		});
// 	});
// };

// // getCountryAndNeighbour("portugal");
// getCountryAndNeighbour("bharat");
// // getCountryAndNeighbour("usa");

// setTimeout(() => {
// 	console.log(`1 second passed`);
// 	setTimeout(() => {
// 		console.log(`2 second passed`);
// 		setTimeout(() => {
// 			console.log(`3 second passed`);
// 			setTimeout(() => {
// 				console.log(`4 second passed`);
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

// const getCountryData = function (country) {
// 	const response = fetch(`https://restcountries.com/v2/name/${country}`)
// 		.then((response) => {
// 			console.log(response);
// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			renderCountry(data[0]);
// 		});
// };

const getCountryData = function (country) {
	// Country 1
	const response = fetch(`https://restcountries.com/v2/name/${country}`)
		.then((response) => response.json())
		.then((data) => {
			renderCountry(data[0]);

			const neighbour = data[0]?.borders[0];

			if (!neighbour) return;

			// Country 2
			return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
		})
		.then((response) => response.json())
		.then((data) => renderCountry(data, "neighbour"))
		.catch((error) => {
			console.error(`${error} 🔥🔥🔥`);
			renderError(`Something went wrong 🔥🔥🔥 ${error.message}. Try Again!`);
		})
		.finally(() => {
			countriesContainer.style.opacity = "1";
		});
};

btn.addEventListener("click", () => {
	getCountryData("bharat");
});

getCountryData("yeloowo");
