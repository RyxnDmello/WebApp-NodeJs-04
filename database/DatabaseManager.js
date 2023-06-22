const { DatabaseCreateAccount } = require("./account/AccountManager.js");
const LocationManager = require("./account/LocationManager.js");

module.exports.CreateAccount = (account) => {
  DatabaseCreateAccount(account);
};

module.exports.GetLocations = async (email) => {
  return LocationManager.DatabaseGetLocations(email);
};

module.exports.AddLocation = (email, location) => {
  LocationManager.DatabaseAddLocation(email, location);
};
