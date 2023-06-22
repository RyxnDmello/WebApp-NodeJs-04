const { DatabaseCreateAccount } = require("./account/AccountManager.js");
const { DatabaseAddLocation } = require("./account/LocationManager.js");

module.exports.CreateAccount = (account) => {
  DatabaseCreateAccount(account);
};

module.exports.AddLocation = (account, location) => {
  DatabaseAddLocation(account, location);
};
