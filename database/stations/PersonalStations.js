const { DatabaseGetLocations } = require("../location/GetLocations.js");
const { WeatherCoordinatesModel } = require("../weather/Coordinates.js");
const { WeatherCityModel } = require("../weather/City.js");

module.exports.CreatePersonalStations = async (email) => {
  const locations = await DatabaseGetLocations(email);

  const cities = [];
  const coordinates = [];

  for (let i = 0; i < locations.length; i++) {
    if (locations[i].city.length === 0) {
      const station = await WeatherCoordinatesModel(
        locations[i].latitude,
        locations[i].longitude
      );

      coordinates.push({
        location: locations[i],
        days: station,
      });

      continue;
    }

    const station = await WeatherCityModel(locations[i].city);

    cities.push({
      location: locations[i],
      days: station,
    });
  }

  return [...cities, ...coordinates];
};
