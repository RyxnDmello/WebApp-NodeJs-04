require("dotenv").config();
const { WeatherData } = require("./StationTemplate.js");

module.exports.CreatePersonalStations = async (locations) => {
  const stations = [];

  for (let i = 0; i < locations.length; i++) {
    let weather = await GetWeatherData(locations[i]);
    if (weather !== null) stations.push(WeatherData(weather));
  }

  return stations;
};

const GetWeatherData = async (location) => {
  if (location.city.length !== 0) {
    return await GetWeatherDataByCity(location.city);
  }

  return await GetWeatherDataByCoordinates(
    location.latitude,
    location.longitude
  );
};

const GetWeatherDataByCity = async (city) => {
  const API = `${process.env.WEATHER_API_URL}/${city}?${process.env.WEATHER_API_PARAMS}&key=${process.env.WEATHER_API_KEY}`;

  const response = await fetch(API);
  if (response.status !== 200) return null;

  const weather = await response.json();
  return weather;
};

const GetWeatherDataByCoordinates = async (latitude, longitude) => {
  const API = `${process.env.WEATHER_API_URL}/${latitude},${longitude}?${process.env.WEATHER_API_PARAMS}&key=${process.env.WEATHER_API_KEY}`;

  const response = await fetch(API);
  if (response.status !== 200) return null;

  const weather = await response.json();
  return weather;
};
