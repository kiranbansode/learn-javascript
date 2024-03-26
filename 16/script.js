"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderError = function (msg) {
	countriesContainer.insertAdjacentText("beforeend", msg);
	countriesContainer.style.opacity = "1";
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
	countriesContainer.style.opacity = "1";
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

const getJSON = function (url, errorMsg = "Something went wrong!") {
	return fetch(url).then((response) => {
		if (!response.ok) {
			throw new Error(`${errorMsg} (${response.status})`);
		}

		return response.json();
	});
};

// const getCountryData = function (country) {
// 	// Country 1
// 	const response = fetch(`https://restcountries.com/v2/name/${country}`)
// 		.then((response) => {
// 			console.log(response);
// 			return response;
// 		})
// 		.then((data) => {
// 			renderCountry(data[0]);
// 			// const neighbour = data[0]?.borders[0];
// 			const neighbour = "daafgdg";

// 			if (!neighbour) return;

// 			// Country 2
// 			return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// 		})
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw new Error(`Country not found (${response.status})`);
// 			}

// 			response.json();
// 		})
// 		.then((data) => renderCountry(data, "neighbour"))
// 		.catch((error) => {
// 			console.error(`${error} 🔥🔥🔥`);
// 			renderError(`Something went wrong 🔥🔥🔥 ${error.message}. Try Again!`);
// 		})
// 		.finally(() => {
// 			countriesContainer.style.opacity = "1";
// 		});
// };

// const getCountryData = function (country) {
// 	// Country 1
// 	getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
// 		.then((data) => {
// 			renderCountry(data[0]);
// 			const neighbour = data[0]?.borders[0];
// 			// const neighbour = "dsgafdgfg";

// 			if (!neighbour) throw new Error("No neighbour found!");

// 			// Country 2
// 			return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, "Country not found");
// 		})
// 		.then((data) => renderCountry(data, "neighbour"))
// 		.catch((err) => {
// 			console.error(`${err} 🔥🔥🔥`);
// 			renderError(`Something went wrong 🔥🔥🔥 ${err.message}. Try again!`);
// 		})
// 		.finally(() => {
// 			countriesContainer.style.opacity = 1;
// 		});
// };

// btn.addEventListener("click", () => {
// 	getCountryData("bharat");
// });

// getCountryData("australia");

// # Coding Challenge 1

// https://geocode.xyz/51.50354,-0.12768?geoit=xml

// const whereAmI = function (lat, lng) {
// 	fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// 		.then((res) => {
// 			console.log(res);
// 			if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// 			return res.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			console.log(`You are in ${data.city}, ${data.country}`);

// 			return fetch(`https://restcountries.com/v2/name/${data.country}`);
// 		})
// 		.then((res) => {
// 			if (!res.ok) throw new Error(`Country not found ${res.status}`);

// 			return res.json();
// 		})
// 		.then((data) => renderCountry(data[0]))
// 		.catch((err) => console.error(`${err.message}`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log("Test Start");

// setTimeout(() => {
// 	console.log("0 sec timer.");
// }, 0);
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));
// Promise.resolve("Resolved Promise 2").then((res) => {
// 	for (let i = 0; i < 10000000000; i++) {}
// 	console.log(res);
// });

// console.log("Test end");

// const lotteryPromise = new Promise(function (resolve, reject) {
// 	console.log("Lottery draw is happening ");

// 	setTimeout(() => {
// 		if (Math.random() >= 0.5) {
// 			resolve(`You WIN 🏆`);
// 		} else {
// 			reject(new Error(`You lost your money 😭`));
// 		}
// 	}, 2000);
// });

// lotteryPromise.then((res) => console.log(res)).catch((err) => console.error(err));

// // Promisifying setTimeout
// const wait = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

// wait(2)
// 	.then(() => {
// 		console.log(`I waited for 2 seonds`);

// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log(`I waited for 1 seconds`);
// 	})
// 	.then(() => {
// 		console.log(`I waited for 2 seconds`);
// 	})
// 	.then(() => {
// 		console.log(`I waited for 3 seconds`);
// 	})
// 	.then(() => {
// 		console.log(`I waited for 4 seconds`);
// 	});

// Promise.resolve("abc").then((x) => console.log(x));
// Promise.reject(new Error("xyz")).catch((x) => console.error(x));

// const getPosition = function () {
// 	return new Promise(function (resolve, reject) {
// 		// navigator.geolocation.getCurrentPosition(
// 		// 	(position) => resolve(position),
// 		// 	(err) => reject(err)
// 		// );

// 		navigator.geolocation.getCurrentPosition(resolve, reject);
// 	});
// };

// // getPosition().then((pos) => console.log(pos));

// const whereAmI = function () {
// 	getPosition()
// 		.then((pos) => {
// 			const { latitude: lat, longitude: lng } = pos.coords;
// 			return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// 		})
// 		.then((res) => {
// 			console.log(res);
// 			if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
// 			return res.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			console.log(`You are in ${data.city}, ${data.country}`);

// 			return fetch(`https://restcountries.com/v2/name/${data.country}`);
// 		})
// 		.then((res) => {
// 			if (!res.ok) throw new Error(`Country not found ${res.status}`);

// 			return res.json();
// 		})
// 		.then((data) => renderCountry(data[0]))
// 		.catch((err) => console.error(`${err.message}`));
// };

// btn.addEventListener("click", whereAmI);

// const imgContainer = document.querySelector(".images");

// const createImage = function (imgPath) {
// 	return new Promise(function (resolve, reject) {
// 		const img = document.createElement("img");
// 		img.src = imgPath;

// 		img.addEventListener("load", function () {
// 			imgContainer.append(img);
// 			resolve(img);
// 		});

// 		img.addEventListener("error", function () {
// 			reject(new Error("Image not found"));
// 		});
// 	});
// };

// let currentImg;

// createImage("img/img-1.jpg")
// 	.then((img) => {
// 		currentImg = img;
// 		console.log("Image 1 loaded");
// 		return wait(2);
// 	})
// 	.then(() => {
// 		currentImg.style.display = "none";
// 		return createImage("img/img-2.jpg");
// 	})
// 	.then((img) => {
// 		currentImg = img;
// 		console.log("Image 2 loaded");
// 		return wait(2);
// 	})
// 	.then(() => {
// 		currentImg.style.display = "none";
// 	})
// 	.catch((err) => console.error(err));

// const getPosition = function () {
// 	return new Promise(function (resolve, reject) {
// 		navigator.geolocation.getCurrentPosition(resolve, reject);
// 	});
// };

// // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));

// const whereAmI = async function () {
// 	try {
// 		// Geolocation
// 		const pos = await getPosition();
// 		const { latitude: lat, longitude: lng } = pos.coords;

// 		// Reverce Geocoding
// 		const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
// 		if (!resGeo.ok) {
// 			throw new Error("Problem getting location data");
// 		}

// 		const dataGeo = await resGeo.json();
// 		// console.log(dataGeo);

// 		// Country Data

// 		const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.country}`);

// 		if (!res.ok) {
// 			throw new Error("Problem getting country");
// 		}
// 		const data = await res.json();

// 		// console.log(data);
// 		renderCountry(data[0]);

// 		return `You are in ${dataGeo.city}, ${dataGeo.country}`;
// 	} catch (error) {
// 		// console.error(`${error} 😭`);
// 		renderError(`${error.message}`);

// 		// Reject promise returned from async function
// 		throw error;
// 	}
// };

// console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);

// whereAmI()
// 	.then((city) => {
// 		console.log(`2: ${city}`);
// 	})
// 	.catch((err) => {
// 		console.error(`2: ${err.message}`);
// 	})
// 	.finally(() => {
// 		console.log("3: Finished getting location");
// 	});

// (async function () {
// 	try {
// 		const city = await whereAmI();
// 		console.log(`2: ${city}`);
// 	} catch (error) {
// 		console.error(`2: ${error.message}`);
// 	}

// 	console.log("3: Finished getting location");
// })();

// const getCountries = async function (c1, c2, c3) {
// 	try {
// 		// const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
// 		// const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
// 		// const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

// 		const data = await Promise.all([
// 			getJSON(`https://restcountries.com/v2/name/${c1}`),
// 			getJSON(`https://restcountries.com/v2/name/${c2}`),
// 			getJSON(`https://restcountries.com/v2/name/${c3}`),
// 		]);

// 		console.log(data.map((d) => d[0].capital));
// 	} catch (error) {
// 		console.error(err);
// 	}
// };

// getCountries("russia", "bharat", "japan");

// Promise.race
(async function () {
	const res = await Promise.race([
		getJSON(`https://restcountries.com/v2/name/italy`),
		getJSON(`https://restcountries.com/v2/name/bharat`),
		getJSON(`https://restcountries.com/v2/name/japan`),
	]);

	console.log(res[0]);
})();

const timeout = function (sec) {
	return new Promise(function (_, reject) {
		setTimeout(() => {
			reject(new Error("Request took too"));
		}, sec * 1000);
	});
};

Promise.race([getJSON(`https://restcountries.com/v2/name/japan`), timeout(5)])
	.then((res) => console.log(res[0]))
	.catch((err) => err);

// Promise.allSettled
Promise.allSettled([Promise.resolve("Success"), Promise.reject("Error"), Promise.resolve("Another Success")])
	.then((res) => console.log(res))
	.catch((err) => err);

// Promise.any[ES2021]
Promise.any([Promise.resolve("Success"), Promise.reject("Error"), Promise.resolve("Another Success")])
	.then((res) => console.log(res))
	.catch((err) => err);
