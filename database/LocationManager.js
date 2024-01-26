const { DatabaseGetLocations } = require("./location/GetLocations.js");
const { DatabaseAddLocation } = require("./location/AddLocation.js");
const { DatabaseRemoveLocation } = require("./location/RemoveLocation.js");

module.exports.AddLocation = async (email, location) => {
  await DatabaseAddLocation(email, location);
};

module.exports.RemoveLocation = async (email, location) => {
  await DatabaseRemoveLocation(email, location);
};

module.exports.GetLocations = async (email) => {
  await DatabaseGetLocations(email);
};
