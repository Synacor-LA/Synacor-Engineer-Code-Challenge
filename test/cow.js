(function(exports) {
  ("use strict");
  function Cow(name) {
    this.name = name || "Anon cow";
  }

  exports.Cow = Cow;

  Cow.prototype = {
    greets: function(target) {
      if (!target) throw new Error("missing target");
      return this.name + " greets " + target;
    },

    lateGreets: function(target, cb) {
      setTimeout(
        function(self) {
          try {
            cb(null, self.greets(target));
          } catch (err) {
            cb(err);
          }
        },
        1000,
        this
      );
    },
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
