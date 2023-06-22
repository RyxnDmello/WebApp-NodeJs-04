const AccountModel = require("../models/ModelManager.js");

module.exports.DatabaseCreateAccount = (account) => {
  const Account = new AccountModel({
    username: account.username,
    email: account.email,
    password: account.password,
    locations: [],
  });

  Account.save();
};
