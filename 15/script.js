"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

let map;
let mapEvent;

if (navigator.geolocation)
	navigator.geolocation.getCurrentPosition(
		(position) => {
			const { latitude, longitude } = position.coords;
			console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

			map = L.map("map").setView([latitude, longitude], 13);
			// console.log(map);

			L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
			}).addTo(map);

			// Handling clicks on map
			map.on("click", (mapE) => {
				mapEvent = mapE;
				form.classList.remove("hidden");
				inputDistance.focus();
			});
		},
		() => {
			alert("Could not get your position");
		}
	);

form.addEventListener("submit", (e) => {
	e.preventDefault();

	//Clear Input Fields
	inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";

	// Display marker
	console.log(mapEvent);
	const { lat, lng } = mapEvent.latlng;

	L.marker([lat, lng])
		.addTo(map)
		.bindPopup(
			L.popup({
				maxWidth: 250,
				minWidth: 100,
				autoClose: false,
				closeOnClick: false,
				className: "running-popup",
			})
		)
		.setPopupContent("Workout")
		.openPopup();
});

inputType.addEventListener("change", () => {
	inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
	inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
});
