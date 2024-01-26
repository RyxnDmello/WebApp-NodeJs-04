const accountModel = require("../models/AccountModel.js");

module.exports.DatabaseGetLocations = async (email) => {
  const databaseAccount = await accountModel.findOne({ email: email });
  
  return databaseAccount.locations !== undefined
    ? databaseAccount.locations
    : [];
};
