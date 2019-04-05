import { URL, WEATHER_URL } from "./api.js";
const currentCity = document.getElementById("location");
const currentTemperature = document.getElementById("temperature");
const weatherIcon = document.getElementById("icon");
const currentConditions = document.getElementById("currentCondition");

export const fetchPromise = new Promise(function(resolve, reject) {
  fetch(URL)
    .then(response => response.json())
    .then(data => fetch(`${WEATHER_URL}/${data.latitude},${data.longitude}`))
    .then(locationData => resolve(locationData.json()))
    .then(err => reject(err));
});

fetchPromise
  .then(location => {
    let kelvin = location.main.temp;
    let kelvinToFarenheit = Math.floor((kelvin - 273.15) * (9 / 5) + 32);
    currentCity.innerHTML = location.name;
    currentTemperature.innerHTML = kelvinToFarenheit + " &degF";
    currentConditions.innerHTML = location.weather[0].description;
    weatherIcon.src = `http://openweathermap.org/img/w/${
      location.weather[0].icon
    }.png`;
  })
  .catch(error => console.warn(error));
