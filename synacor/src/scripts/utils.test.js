import { getIP, getWeather, convertToDegrees } from "./utils";
import { URL, WEATHERURL } from "./constants";

const coords = {
  latitude: 37.7558,
  longitude: -121.9527
};
const data = {
  coord: { lon: -121.95, lat: 37.76 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
  base: "stations",
  main: {
    temp: 283.15,
    pressure: 1026,
    humidity: 81,
    temp_min: 280.93,
    temp_max: 285.15
  },
  visibility: 16093,
  wind: { speed: 2.22, deg: 256.003 },
  clouds: { all: 1 },
  dt: 1553926385,
  sys: {
    type: 1,
    id: 4774,
    message: 0.0079,
    country: "US",
    sunrise: 1553867861,
    sunset: 1553912833
  },
  id: 5392593,
  name: "San Ramon",
  cod: 200
};

it("calls api and returns coordinates", () => {
  fetch.mockResponseOnce(JSON.stringify(coords));
  return getIP(URL).then(res => {
    expect(res).toEqual(coords);
  });
});

it("calls api with coords and returns data", () => {
  fetch.mockResponseOnce(JSON.stringify(data));
  return getWeather(
    `${WEATHERURL}/weather/${coords.latitude},${coords.longitude}`
  ).then(response => {
    expect(response).toEqual(data);
  });
});

it("turns kelvin into fahrenheit", () => {
  expect(convertToDegrees(283)).toBe(50);
});
