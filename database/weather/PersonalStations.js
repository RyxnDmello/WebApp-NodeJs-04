require("dotenv").config();
const { WeatherData } = require("./StationTemplate");

module.exports.CreatePersonalStations = async (stations) => {
  let personalStations = [];

  for (let i = 0; i < stations.length; i++) {
    let weather = await GetWeatherData(
      stations[i].latitude,
      stations[i].longitude
    );

    if (weather !== null) personalStations.push(WeatherData(weather));
  }

  return personalStations;
};

const GetWeatherData = async (latitude, longitude) => {
  const API = `${process.env.WEATHER_API_URL}/${latitude},${longitude}?${process.env.WEATHER_API_PARAMS}&key=${process.env.WEATHER_API_KEY}`;
  const response = await fetch(API);
  const weather = await response.json();
  return weather;
};
