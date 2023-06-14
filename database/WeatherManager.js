const { CreateCurrentStation } = require("./weather/CurrentStation.js");
const { CreatePersonalStations } = require("./weather/PersonalStations.js");

module.exports.CurrentStation = (response) => {
  CreateCurrentStation(response);
};

module.exports.PersonalStations = async (stations, response) => {
  return await CreatePersonalStations(stations, response);
};
