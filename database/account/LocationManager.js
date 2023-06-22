const AccountModel = require("../models/ModelManager.js");

module.exports.DatabaseAddLocation = (account, location) => {
  AccountModel.findOneAndUpdate(
    { email: account.email },
    { $push: { locations: location } }
  );
};
