const { CreateCurrentStation } = require("./weather/CurrentStation.js");
const { CreatePersonalStations } = require("./weather/PersonalStations.js");

module.exports.CurrentStation = async () => {
  return await CreateCurrentStation();
};

module.exports.PersonalStations = async (locations) => {
  return await CreatePersonalStations(locations);
};
