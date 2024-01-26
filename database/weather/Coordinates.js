require("dotenv").config();

const stationModel = require("../models/StationModel.js");

module.exports.WeatherCoordinatesModel = async (latitude, longitude) => {
  const weather = await weatherAPI(latitude, longitude);
  return stationModel(weather);
};

const weatherAPI = async (latitude, longitude) => {
  const API = `${process.env.WEATHER_API_URI}/${latitude},${longitude}?${process.env.WEATHER_API_PARAMS}&key=${process.env.WEATHER_API_KEY}`;
  const response = await fetch(API);
  return await response.json();
};
