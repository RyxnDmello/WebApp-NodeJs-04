const city = document.querySelector(".current-city");
const latitude = document.querySelector(".current-latitude");
const longitude = document.querySelector(".current-longitude");
const button = document.querySelector(".current-button");

const location = document.querySelector(".current-location");
const coordinates = document.querySelector(".current-coordinates");

const temperature = document.querySelector(".current-temp");
const minimumTemperature = document.querySelector(".current-temp-min");
const maximumTemperature = document.querySelector(".current-temp-max");
const feelsTemperature = document.querySelector(".current-temp-feels");

const precipitation = document.querySelector(".current-precip");
const precipitationProb = document.querySelector(".current-precip-chance");
const precipitationCover = document.querySelector(".current-precip-cover");
const precipitationSnow = document.querySelector(".current-precip-snow");

const humidity = document.querySelector(".current-humidity");
const pressure = document.querySelector(".current-pressure");
const winds = document.querySelector(".current-winds");
const clouds = document.querySelector(".current-clouds");

const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
const PARAMS =
  "unitGroup=metric&contentType=json&key=QNPWJA4NCCPXKMWTSB7L97DLX";

export default function CurrentStation() {
  button.addEventListener("click", async () => {
    if (city.value.trim().length === 0) return;
    const weather = await GetWeatherData();
    if (weather === null) return;
    SetWeatherData(weather);
  });
}

async function GetWeatherData() {
  const API = `${URL}/${city.value}?${PARAMS}`;
  const response = await fetch(API);
  const weather = await response.json();
  return weather;
}

function SetWeatherData(weather) {
  location.textContent = weather.resolvedAddress;
  coordinates.textContent = `${weather.latitude} : ${weather.longitude}`;

  temperature.textContent = `${weather.days[0].temp}°C`;
  minimumTemperature.textContent = `${weather.days[0].tempmin}°C`;
  maximumTemperature.textContent = `${weather.days[0].tempmax}°C`;
  feelsTemperature.textContent = `${weather.days[0].feelslike}°C`;

  precipitation.textContent = `${weather.days[0].precip}mm`;
  precipitationProb.textContent = `${weather.days[0].precipprob}%`;
  precipitationCover.textContent = `${weather.days[0].precipcover}%`;
  precipitationSnow.textContent = `${weather.days[0].snow}cm`;

  humidity.textContent = `${weather.days[0].humidity}%`;
  pressure.textContent = `${weather.days[0].pressure}hpa`;
  winds.textContent = `${weather.days[0].windspeed}kmh`;
  clouds.textContent = `${weather.days[0].cloudcover}%`;
}
