const { WeatherCityModel } = require("../weather/City.js");

module.exports.CreateCurrentStation = () => {
  return WeatherCityModel("Panaji");
};
