const accountModel = require("../models/AccountModel.js");

module.exports.DatabaseRemoveLocation = async (email, location) => {
  await accountModel.findOneAndUpdate(
    { email: email },
    {
      $pull: {
        locations: location,
      },
    }
  );
};
