const AccountManager = require("./account/AccountManager.js");
const LocationManager = require("./account/LocationManager.js");

module.exports.CreateAccount = (account) => {
  AccountManager.DatabaseCreateAccount(account);
};

module.exports.LoginAccount = (account) => {
  AccountManager.DatabaseLoginAccount(account);
};

module.exports.GetLocations = async (email) => {
  return LocationManager.DatabaseGetLocations(email);
};

module.exports.AddLocation = (email, location) => {
  LocationManager.DatabaseAddLocation(email, location);
};
