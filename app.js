
//Get api call

function getLatLong(){
    // debugger;
    var queryURL = "https://weathersync.herokuapp.com/ip"
    console.log(queryURL);

    //not using jquery?
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // })
    var request = new XMLHttpRequest();
    request.open('GET', queryURL, true)
    request.onload = function(){
        //get lat and long from json
        console.log(this.response);
        //{"latitude":34.0915,"longitude":-118.1307}
        var data = JSON.parse(this.response);

        //get lat and long from data and do new query
        var lat = data.latitude;
        var long = data.longitude;
        var weatherQuery = "https://weathersync.herokuapp.com/weather/" + lat + "," + long;
        console.log(weatherQuery);
        var weatherReq = new XMLHttpRequest();
        weatherReq.open('GET', weatherQuery, true);
        weatherReq.onload = function(){
            //take data from new query
            console.log(this.response);
            var weatherData = JSON.parse(this.response);
            // {"coord":{"lon":-118.13,"lat":34.09},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":289.3,"pressure":1021,"humidity":39,"temp_min":287.04,"temp_max":291.15},"visibility":16093,"wind":{"speed":3.1,"deg":150},"clouds":{"all":1},"dt":1553825456,"sys":{"type":1,"id":3514,"message":0.009,"country":"US","sunrise":1553780719,"sunset":1553825379},"id":5323060,"name":"Alhambra","cod":200}
            var city = weatherData.name;
            var temp = weatherData.main.temp ;
            var description = weatherData.weather[0].main;
            var icon = weatherData.weather[0].icon;
            console.log(city + "|" + temp + "|" + description + "|" + icon);

            temp = (((temp - 273.15) * 9/5) + 32).toFixed(1);

            
            var cityHeader = document.createElement("h2");
            cityHeader.textContent = city;
            var tempHeader = document.createElement("h2");
            tempHeader.textContent= temp + ' °F';
            var descHeader = document.createElement("h2");
            descHeader.textContent = description;
            var image = document.createElement("img");
            image.src = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("content").append(cityHeader);
            document.getElementById("content").append(tempHeader);
            document.getElementById("content").append(image);
            document.getElementById("content").append(descHeader);
        }
        weatherReq.send();

        // var div = document.createElement("p");
        // div.append(document.createTextNode(response));
    }

    request.send();
};

getLatLong();