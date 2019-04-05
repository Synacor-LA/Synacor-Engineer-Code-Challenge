(function(exports) {
  ("use strict");
  function Proto(state) {
    this.state = state;
  }

  exports.Proto = Proto;

  Proto.prototype = {
    fetchData: function getWeather() {
      const fetchPromise = new Promise(function(resolve, reject) {
        fetch("https://weathersync.herokuapp.com/ip")
          .then(response => response.json())
          .then(data =>
            fetch(
              `https://weathersync.herokuapp.com/weather/${data.latitude},${
                data.longitude
              }`
            )
          )
          .then(locationData => resolve(locationData.json()))
          .then(err => reject(err));
      });

      fetchPromise
        .then(location => {
          return location;
        })
        .catch(error => console.warn(error));
      return fetchPromise;
    }
  };
})(this);
