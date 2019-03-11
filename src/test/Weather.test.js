import React from 'react';
import { mount, shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';

import Weather from '../components/Weather';
import { kToFahrenheitStr, getDescriptor } from '../util';
import weatherData from './dummy';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Weather tests', () => {
  it('renders', () => {
    expect.assertions(1);
    const wrapper = shallow(<Weather weatherData={weatherData} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('matches snapshot based on dummy data', () => {
    expect.assertions(1);
    const wrapper = mount(<Weather weatherData={weatherData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('displays all text required from given weatherData object (string scan)', () => {
    expect.hasAssertions();
    // gather all relevant text from the dummy weatherData object to test for
    const fahrenheit = kToFahrenheitStr(weatherData.main.temp);
    const requiredText = [
      weatherData.name,
      weatherData.weather[0].main,
      weatherData.weather[0].description,
      weatherData.main.humidity,
      fahrenheit,
      getDescriptor(fahrenheit),
    ];
    const wrapper = mount(<Weather weatherData={weatherData} />);
    const allText = wrapper.text();
    requiredText.forEach(text => {
      expect(allText.includes(text)).toBe(true);
    });
  });
});
