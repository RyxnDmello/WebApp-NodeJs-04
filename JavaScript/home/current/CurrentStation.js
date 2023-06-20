const city = document.querySelector(".current-city");
const latitude = document.querySelector(".current-latitude");
const longitude = document.querySelector(".current-longitude");
const button = document.querySelector(".current-button");

const location = document.querySelectorAll(".current-location");
const coordinates = document.querySelectorAll(".current-coordinates");

const temperature = document.querySelectorAll(".current-temp");
const minimumTemperature = document.querySelectorAll(".current-temp-min");
const maximumTemperature = document.querySelectorAll(".current-temp-max");
const feelsTemperature = document.querySelectorAll(".current-temp-feels");

const precipitation = document.querySelectorAll(".current-precip");
const precipitationProb = document.querySelectorAll(".current-precip-chance");
const precipitationCover = document.querySelectorAll(".current-precip-cover");
const precipitationSnow = document.querySelectorAll(".current-precip-snow");

const humidity = document.querySelectorAll(".current-humidity");
const pressure = document.querySelectorAll(".current-pressure");
const winds = document.querySelectorAll(".current-winds");
const clouds = document.querySelectorAll(".current-clouds");

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
  for (let i = 0; i < 7; i++) {
    location[i].textContent = weather.resolvedAddress;
    coordinates[i].textContent = `${weather.latitude} : ${weather.longitude}`;

    temperature[i].textContent = `${weather.days[i].temp}°C`;
    minimumTemperature[i].textContent = `${weather.days[i].tempmin}°C`;
    maximumTemperature[i].textContent = `${weather.days[i].tempmax}°C`;
    feelsTemperature[i].textContent = `${weather.days[i].feelslike}°C`;
    precipitation[i].textContent = `${weather.days[i].precip}mm`;

    precipitationProb[i].textContent = `${weather.days[i].precipprob}%`;
    precipitationCover[i].textContent = `${weather.days[i].precipcover}%`;
    precipitationSnow[i].textContent = `${weather.days[i].snow}cm`;

    humidity[i].textContent = `${weather.days[i].humidity}%`;
    pressure[i].textContent = `${weather.days[i].pressure}hpa`;
    winds[i].textContent = `${weather.days[i].windspeed}kmh`;
    clouds[i].textContent = `${weather.days[i].cloudcover}%`;
  }
}
