import { getIP, getWeather, convertToDegrees } from "./utils";
import { URL, WEATHERURL } from "./constants";

const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temperature");
const iconEl = document.querySelector(".icon");
const adjectiveEl = document.querySelector(".adjective");

const ICONURL = "http://openweathermap.org/img/w/";

getIP(URL).then(data => {
  getWeather(WEATHERURL, data).then(res => {
    cityEl.textContent = `${res.name}`;
    tempEl.textContent = convertToDegrees(res.main.temp);
    adjectiveEl.textContent = res.weather[0].description;
    iconEl.innerHTML = `<img src="${ICONURL}${res.weather[0].icon}.png" />`;
  });
});
