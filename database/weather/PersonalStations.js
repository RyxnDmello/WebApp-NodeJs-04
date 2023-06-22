require("dotenv").config();
const { WeatherData } = require("./StationTemplate");

module.exports.CreatePersonalStations = async (stations) => {
  const personalStations = [];

  for (let i = 0; i < stations.length; i++) {
    let weather = await GetWeatherData(
      stations[i].city,
      stations[i].latitude,
      stations[i].longitude
    );

    if (weather !== null) personalStations.push(WeatherData(weather));
  }

  return personalStations;
};

const GetWeatherData = async (city, latitude, longitude) => {
  let API = `${process.env.WEATHER_API_URL}/${latitude},${longitude}?${process.env.WEATHER_API_PARAMS}&key=${process.env.WEATHER_API_KEY}`;

  if (latitude.length === 0 || longitude.length === 0) {
    API = `${process.env.WEATHER_API_URL}/${city}?${process.env.WEATHER_API_PARAMS}&key=${process.env.WEATHER_API_KEY}`;
  }

  const response = await fetch(API);
  if(response.status !== 200) return null;
  
  const weather = await response.json();
  return weather;
};
