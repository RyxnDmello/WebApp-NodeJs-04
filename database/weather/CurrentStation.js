require("dotenv").config();
const { WeatherData } = require("./StationTemplate.js");

module.exports.CreateCurrentStation = async () => {
  const weather = await GetWeatherData();
  if (weather !== null) return WeatherData(weather);
};

const GetWeatherData = async () => {
  const API = `${process.env.WEATHER_API_URL}/panjim?${process.env.WEATHER_API_PARAMS}&key=${process.env.WEATHER_API_KEY}`;
  const response = await fetch(API);
  const weather = await response.json();
  return weather;
};
