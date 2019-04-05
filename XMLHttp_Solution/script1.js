const currentCity = document.getElementById("location");
const currentTemperature = document.getElementById("temperature");
const weatherIcon = document.getElementById("icon");
const currentCondtions = document.getElementById("currentCondition");
import { URL, WEATHER_URL } from "../api";

function request(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      callback(request.responseText);
    } else {
      console.log("Request status", request.statusText);
    }
  };

  request.send(null);
}

function requestWeather() {
  request(URL, data => {
    let coordinates = JSON.parse(data);
    request(
      `${WEATHER_URL}/${coordinates.latitude},${coordinates.longitude}`,
      forecast => {
        let weatherForecast = JSON.parse(forecast);
        let kelvin = weatherForecast.main.temp;
        let kelvinToFarenheit = Math.floor((kelvin - 273.15) * (9 / 5) + 32);
        currentCity.innerHTML = weatherForecast.name;
        currentTemperature.innerHTML = kelvinToFarenheit + " &degF";
        currentCondtions.innerHTML = weatherForecast.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/w/${
          weatherForecast.weather[0].icon
        }.png`;
      }
    );
  });
}

requestWeather();
