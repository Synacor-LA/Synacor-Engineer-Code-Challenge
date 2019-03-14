/* eslint-disable */
// This Jest suite uses .babelrc to support ES6 modules
import { getCoordinates, getWeatherData, render } from './app/js/modules';

describe('getCoordinates', () => {
  it('Fetches data from the server and returns a parsed response', () => {
    // Tests double promise chain with a fake response
    const mockResponse = {
      latitude: 100,
      longitude: 100,
    };
    // mockJSON resolves to the repsonse object
    const mockJSON = Promise.resolve(mockResponse);
    // mockFetch has a dummy JSON method that returns mockJSON
    const mockFetch = Promise.resolve({
      json: () => mockJSON,
    });
    // global.fetch is mocked using the method above
    global.fetch = jest.fn(() => mockFetch);
    return getCoordinates().then((data) => {
      expect(data).toBe(mockResponse);
    });
  });
  it('Is called with the correct URL', () => {
    expect(global.fetch).toHaveBeenCalledWith('https://weathersync.herokuapp.com/ip');
  });
  it('Only makes one API request per invocation', () => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});

describe('getWeatherData', () => {
  it('Fetches data from the server and returns a parsed response', () => {
    // Tests double promise chain with a fake response
    const mockResponse = {
      main: {
        temp: 283,
      },
      name: 'Orange',
      weather: [
        {
          main: 'Clear',
          icon: '01n',
        },
      ],
    };
    // mockJSON resolves to the repsonse object
    const mockJSON = Promise.resolve(mockResponse);
    // mockFetch has a dummy JSON method that returns mockJSON
    const mockFetch = Promise.resolve({
      json: () => mockJSON,
    });
    const coordinates = {
      latitude: 100,
      longitude: 100,
    };
    global.fetch = jest.fn(() => mockFetch);
    // Similar pattern to above, except arguments are supplied and checked in the URL
    return getWeatherData(coordinates).then((data) => {
      expect(data).toBe(mockResponse);
    });
  });
  it('Is called with the correct URL', () => {
    expect(global.fetch).toHaveBeenLastCalledWith('https://weathersync.herokuapp.com/weather/100,100');
  });
  it('Only makes one API request per invocation', () => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});

// Having difficulty figuring out how to properly test DOM manipulation without using a library
//
// describe('render', () => {
//   it('Properly writes values to the DOM', () => {
//     document.body.innerHTML = `
//       <div id="flex-container">
//         <div id="content">
//           <h3 class="text" id="heading">Current conditions for:</h3>
//           <h2 class="text" id="city"></h2>
//           <h1 class="text" id="temperature">
//             <span id="degrees"></span>
//             <span id="symbol">°F</span>
//           </h1>
//           <img id="icon" alt="weather icon">
//           <h2 class="text" id="conditions"></h2>
//         </div>
//       </div>
//     `;
//     render();
//   });
// });
