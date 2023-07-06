const AccountModel = require("../models/ModelManager.js");

module.exports.DatabaseGetLocations = async (email) => {
  const account = await AccountModel.findOne({ email: email });
  if (account === null) return [];
  return account.locations;
};

module.exports.DatabaseAddLocation = async (email, location) => {
  await AccountModel.findOneAndUpdate(
    { email: email },
    { $push: { locations: location } }
  );
};

module.exports.DatabaseDeleteLocation = async (email, location) => {
  await AccountModel.findOneAndUpdate(
    { email: email },
    { $pull: { locations: location } }
  );
};
