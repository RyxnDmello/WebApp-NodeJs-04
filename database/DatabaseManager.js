const AccountManager = require("./account/AccountManager.js");
const LocationManager = require("./account/LocationManager.js");

module.exports.CreateAccount = (account, request, response) => {
  AccountManager.DatabaseCreateAccount(account, request, response);
};

module.exports.LoginAccount = (account, request, response) => {
  AccountManager.DatabaseLoginAccount(account, request, response);
};

module.exports.GetLocations = async (email) => {
  return LocationManager.DatabaseGetLocations(email);
};

module.exports.AddLocation = (email, location) => {
  LocationManager.DatabaseAddLocation(email, location);
};
