require("dotenv").config();

const stationModel = require("../models/StationModel.js");

module.exports.WeatherCityModel = async (city) => {
  const weather = await weatherAPI(city);
  return stationModel(weather);
};

const weatherAPI = async (city) => {
  const API = `${process.env.WEATHER_API_URI}/${city}?${process.env.WEATHER_API_PARAMS}&key=${process.env.WEATHER_API_KEY}`;
  const response = await fetch(API);
  return await response.json();
};
