require("dotenv").config();

const { CurrentWeather } = require("./weather/CurrentWeather.js");

const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
const PARAMS = `unitGroup=metric&contentType=json&key=${process.env.WEATHER_API_KEY}`;

module.exports.DisplayCurrentWeather = (response) => {
  const API = `${URL}/panjim?${PARAMS}`;
  CurrentWeather(API, response);
};
