import { getIP } from "./utils";

const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temperature");
const iconEl = document.querySelector(".icon");
const adjectiveEl = document.querySelector(".adjective");

export const URL = "https://weathersync.herokuapp.com/ip";
export const WEATHERURL = "https://weathersync.herokuapp.com/weather";
const ICONURL = "http://openweathermap.org/img/w/";

getIP(URL).then(data => {
  console.log("data:", data);
});
