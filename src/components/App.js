import React from 'react';
import Weather from './Weather';

/** Fetches the user's latitude and longitude from the weather API
 * @returns { Promise } Promise which resolves to an object like { latitude: #, longitude: # }
 */
const getLatLong = () => {
  return new Promise(resolve => {
    fetch('https://weathersync.herokuapp.com/ip')
      .then(resp => resp.json())
      .then(latLong => resolve(latLong))
      .catch(reason => {
        console.error(reason);
        resolve({ latitude: 34, longitude: -118 });
      });
  });
};

/** Fetches the realtime weather information from the weather API
 * @param { object } object An object with 2 properties: latitude and longitude, both numbers
 * @returns { Promise } Promise which resolves to a weatherData object, see test/dummy.js for example
 */
const getWeatherData = ({ latitude, longitude }) => {
  return new Promise(resolve => {
    fetch(`https://weathersync.herokuapp.com/weather/${latitude},${longitude}`)
      .then(resp => resp.json())
      .then(data => resolve(data))
      .catch(reason => console.error(reason));
  });
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
    };
  }

  componentDidMount() {
    getLatLong()
      .then(getWeatherData)
      .then(weatherData => {
        this.setState({ weatherData });
      })
      .catch(reason => console.error(reason));
  }

  render() {
    const { weatherData } = this.state;
    if (!weatherData) return <div id="content">Loading...</div>;
    return (
      <div id="content">
        <h1>CURRENT CONDITIONS FOR</h1>
        <Weather weatherData={weatherData} />
      </div>
    );
  }
}

export default App;
