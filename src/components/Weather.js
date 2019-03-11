import React from 'react';
import { kToFahrenheitStr, getDescriptor } from '../util';

const Weather = ({ weatherData }) => {
  let { name: city } = weatherData;
  // occasionally, api will return data but not a specific city name
  if (city === '') city = 'Your detected location';
  const {
    main: { humidity, temp: kelvin },
  } = weatherData;
  const { icon, main: condition, description } = weatherData.weather[0];
  const fahrenheit = kToFahrenheitStr(kelvin);
  const descriptor = getDescriptor(fahrenheit);
  return (
    <React.Fragment>
      <div id="city">{`${city}`}</div>
      <div id="temperature">{`${fahrenheit}\u00b0 F`}</div>
      <img id="icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
      <div id="main-conditions">{`${condition}`}</div>
      <p id="blurb">
        <strong>{` ${city} `}</strong>
        {'is currently experiencing'}
        <strong>{` ${description}`}</strong>
        {`. It is a ${descriptor} ${fahrenheit} degrees, with a humidity of ${humidity}.`}
      </p>
    </React.Fragment>
  );
};

export default Weather;
