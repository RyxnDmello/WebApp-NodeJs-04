const { CreateCurrentStation } = require("./stations/CurrentStation.js");
const { CreatePersonalStations } = require("./stations/PersonalStations.js");

module.exports.CurrentStation = async () => {
  return await CreateCurrentStation();
};

module.exports.PersonalStations = async (email) => {
  return email === undefined ? [] : await CreatePersonalStations(email);
};
