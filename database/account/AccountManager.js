const AccountModel = require("../models/ModelManager.js");

module.exports.DatabaseCreateAccount = async (account) => {
  const databaseAccount = await AccountModel.findOne({ email: account.email });

  if (databaseAccount !== null) {
    console.log("ACCOUNT ALREADY CREATED");
    return;
  }

  const clientAccount = new AccountModel({
    username: account.username,
    email: account.email,
    password: account.password,
    locations: [],
  });

  const error = await clientAccount.save();

  console.log(error);
};

module.exports.DatabaseLoginAccount = async (account) => {
  const databaseAccount = await AccountModel.findOne({ email: account.email });

  if (databaseAccount === null) {
    console.log("ACCOUNT DOES NOT EXIST");
    return;
  }

  console.log("LOGGED IN");
};
