// Looking at mockup vars are:

var location = document.getElementById("location");
var temp = document.getElementById("temp");
var icon = document.getElementById("icon");
var currentCondition = document.getElementById("currentCondition");

// Use weathersync API to get geolocation

function getWeather(){
	httpRequest('https://weathersync.herokuapp.com/ip', function(data){
		var cityInfo = JSON.parse(data)
		httpRequest('https://weathersync.herokuapp.com/weather/' + cityInfo.location.latitude + ',' + cityInfo.location.longitude, displayWeatherData(weather));
		})
	};
	return weatherInfo;
}

function displayWeatherData(data, lat, lng){
	var weatherData = JSON.parse(data)
	var city = weatherData.name;
	var temp = Math.floor((weatherData.main.temp - 273.15) * (9/5) + 32); //kelvin to F
	var condition = weatherData.weather[0].main;
	var icon = weatherData.weather[0].icon;

	location.innerHTML = city;
	temp.innerHTML = temp + '&deg;' + "F";
	icon.innerHTML = "<img src='http://openweathermap.org/img/w/" + icon + ".png''>"
	currentCondition.innerHTML = condition;
}

// GET request

function httpRequest(url, callback) { //W3 schools on XML HTTPRequest
	var weatherData = new XMLHttpRequest();
	weatherData.onreadystatechange = function() {
		if(weatherData.readyState == 4 && weatherData.status == 200) {
			callback(weatherData.responseText);
		}
	}
	weatherData.open("GET", url, true);
	weatherData.send(null);
}

getWeather();