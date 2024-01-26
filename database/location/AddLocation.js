const accountModel = require("../models/AccountModel.js");

module.exports.DatabaseAddLocation = async (email, location) => {
  await accountModel.findOneAndUpdate(
    { email: email },
    {
      $push: {
        locations: location,
      },
    }
  );
};
