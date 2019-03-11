import React from 'react';
import { shallow, mount } from 'enzyme';
import weatherData from './dummy';
import App from '../components/App';

// mock fetch for custom responses
const fetchMock = require('fetch-mock');

fetchMock.get('begin:https://weathersync.herokuapp.com/ip', { latitude: 32, longitude: 118 });
fetchMock.get('begin:https://weathersync.herokuapp.com/weather', weatherData);

describe('App tests', () => {
  it('renders', () => {
    expect.assertions(2);
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('#content')).toHaveLength(1);
  });

  it('calls componentDidMount', () => {
    expect.assertions(1);
    const cdmSpy = spyOn(App.prototype, 'componentDidMount');
    shallow(<App />);
    expect(cdmSpy).toHaveBeenCalledTimes(1);
  });

  it('matches initial snapshot for "loading..." placeholder', () => {
    expect.assertions(1);
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('makes 2 API calls', done => {
    expect.assertions(1);
    jest.spyOn(global, 'fetch');
    shallow(<App />);
    process.nextTick(() => {
      expect(global.fetch).toHaveBeenCalledTimes(2);
      done();
    });
  });

  it('matches snapshot after API calls', done => {
    expect.assertions(2);
    jest.spyOn(global, 'fetch');
    const wrapper = mount(<App />);
    process.nextTick(() => {
      expect(global.fetch).toHaveBeenCalledTimes(2);
      wrapper.update();
      expect(wrapper).toMatchSnapshot();
      done();
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
