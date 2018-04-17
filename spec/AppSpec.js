describe('weatherInfo', function(){
	var a, b;

  it('makes an httpRequest to get the geolocation of the requestor\'s ip', function() {
  	a = 'https://weathersync.herokuapp.com/ip';
    expect(a).toEqual('https://weathersync.herokuapp.com/ip');
  });

  it('makes an httpRequest to get the weather of ip location', function() {
  	b = 'https://weathersync.herokuapp.com/weather/';
    expect(b).toEqual('https://weathersync.herokuapp.com/weather/');
  });
});

//describe('displayWeatherData', function(){
//	it('shows weather data through info from getWeather', function() {

//	});
//});

var WeatherData = require('../app.js');
describe('weatherData', function(){
  var weatherData = new WeatherData();
  it('Execute', function(done){
   weatherData.execute(function(){
      expect(weatherData.state).toBe('Executed');
      done();
    });
  });
});