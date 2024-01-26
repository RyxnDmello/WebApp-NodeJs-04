const accountModel = require("../models/AccountModel.js");
const bcrypt = require("bcrypt");

module.exports.DatabaseCreateAccount = async (credentials, request) => {
  const databaseAccount = await accountModel.findOne({
    email: credentials.email,
  });

  if (databaseAccount !== null) return "account-present";

  const encryptedPassword = await bcrypt.hash(credentials.password, 10);

  const account = new accountModel({
    username: credentials.username,
    email: credentials.email,
    password: encryptedPassword,
    locations: [],
  });

  const createdAccount = await account.save();

  if (createdAccount === null) return "server-down";

  request.session.username = createdAccount.username;
  request.session.email = createdAccount.email;
  return true;
};
