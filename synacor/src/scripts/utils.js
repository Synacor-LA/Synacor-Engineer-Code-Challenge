const title = document.querySelector(".title");
const temp = document.querySelector(".temp-wrapper");

export const getIP = url => {
  const body = fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.log("error in getIP: ", err);
      title.textContent = "oh snap theres been an error!";
      title.classList.add("error");
      temp.classList.add("error");
    });
  return body;
};

export const getWeather = (url, data = {}) => {
  const { latitude, longitude } = data;
  const body = fetch(`${url}/${latitude},${longitude}`)
    .then(res => res.json())
    .catch(error => {
      console.log("error in getWeather: ", error);
      title.textContent = "oh snap theres been an error!";
      title.classList.add("error");
      temp.classList.add("error");
    });
  return body;
};

export const convertToDegrees = kelvin => {
  const temp = Math.round(((kelvin - 273.15) * 9) / 5 + 32);
  // console.log("temp: ", temp);
  return temp;
  // return `${temp} '\u00B0'F`;
};
