// This file exports the render() method and its two helper functions

async function getCoordinates() {
  try {
    // fetch heroku coordinate endpoint
    const response = await fetch('https://weathersync.herokuapp.com/ip');
    // return await parsed body
    return await response.json();
  } catch (error) {
    // catch all errors and log to console
    return console.error('Unable to fetch geolocation.', error);
  }
}

async function getWeatherData(coordinates) {
  try {
    // destructure location data from arguments
    const { longitude, latitude } = coordinates;
    // fetch weather information for geolocation specified
    const response = await fetch(`https://weathersync.herokuapp.com/weather/${latitude},${longitude}`);
    // return await parsed body
    return await response.json();
  } catch (error) {
    // catch all errors and log to console
    return console.error('Unable to fetch weather data.', error);
  }
}

async function render() {
  try {
    // use helper promise to obtain coordinates of client ip
    const coordinates = await getCoordinates();
    // use helper promise to weather information object
    const weatherData = await getWeatherData(coordinates);
    // Object shape returned by API is abbreviated as follows:
    // {
    // main: { temperatureProperties }
    // name: cityName
    // weather: [ { weatherProperties } ]
    // }
    // destructure properties to be used on DOM
    const { main: { temp }, name, weather: [{ icon, main }] } = weatherData;
    // image url is created from format provided in instructions
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
    // select city, temperature, and conditions tags, setting innerHTML to variables retrieved
    document.querySelector('#city').innerHTML = name;
    document.querySelector('#conditions').innerHTML = main;
    // Temperature is converted to fahrenheit from kelvin in API
    // Temperature is rounded before being inserted into DOM
    document.querySelector('#degrees').innerHTML = Math.round(((temp - 273.15) * 9 / 5) + 32);
    // select icon image tag, setting src property to iconUrl defined above
    document.querySelector('#icon').src = iconUrl;
    // restore visibility of content once HTML has been inserted
    document.querySelector('body').style.visibility = 'visible';
    return 'Successfully rendered fetched API data to DOM';
  } catch (error) {
    // catch all errors and log to console
    return console.error('Unable to render API data to DOM.', error);
  }
}

render();
