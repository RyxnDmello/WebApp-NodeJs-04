const city = document.querySelector(".current-input");
const button = document.querySelector(".current-button");

const temp = document.querySelector(".current-feature-card-value.temp");
const tempMin = document.querySelector(".current-feature-card-block-value.temp-min");
const tempMax = document.querySelector(".current-feature-card-block-value.temp-max");
const tempFeels = document.querySelector(
  ".current-feature-card-block-value.temp-feels"
);

const specificHumidity = document.querySelector(
  ".current-feature-point-value.humidity"
);
const specificPressure = document.querySelector(
  ".current-feature-point-value.pressure"
);
const specificWinds = document.querySelector(
  ".current-feature-point-value.winds"
);
const specificClouds = document.querySelector(
  ".current-feature-point-value.clouds"
);

const currentWeather = {
  temperature: {
    temp: "",
    min: "",
    max: "",
    feels: "",
  },
  specific: {
    humidity: "",
    pressure: "",
    winds: "",
    clouds: "",
  },
};

export default function CurrentStation() {
  button.addEventListener("click", () => {
    let cityName = city.value;

    if (cityName.length === 0) {
      console.log("INVALID INPUT");
      return;
    }

    const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/next7days?unitGroup=metric&include=days%2Chours%2Ccurrent&key=QNPWJA4NCCPXKMWTSB7L97DLX&contentType=json`;

    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        currentWeather.temperature.temp = data.days[0].temp;
        currentWeather.temperature.min = data.days[0].tempmin;
        currentWeather.temperature.max = data.days[0].tempmax;
        currentWeather.temperature.feels = data.days[0].feelslike;

        currentWeather.specific.humidity = data.days[0].humidity;
        currentWeather.specific.pressure = data.days[0].pressure;
        currentWeather.specific.winds = data.days[0].windspeed;
        currentWeather.specific.clouds = data.days[0].cloudcover;

        DisplayInformation(currentWeather);
      })
      .catch((err) => console.log(err));
  });
}

function DisplayInformation(currentWeather) {
  temp.textContent = `${currentWeather.temperature.temp}`;
  tempMin.innerHTML = `${currentWeather.temperature.min}`;
  tempMax.innerHTML = `${currentWeather.temperature.max}`;
  tempFeels.innerHTML = `${currentWeather.temperature.feels}`;

  specificHumidity.innerHTML = `${currentWeather.specific.humidity}`;
  specificPressure.innerHTML = `${currentWeather.specific.pressure}`;
  specificWinds.innerHTML = `${currentWeather.specific.winds}`;
  specificClouds.innerHTML = `${currentWeather.specific.clouds}`;
}
