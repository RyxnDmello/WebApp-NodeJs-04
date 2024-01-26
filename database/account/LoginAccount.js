const accountModel = require("../models/AccountModel.js");
const bcrypt = require("bcrypt");

module.exports.DatabaseLoginAccount = async (credentials, request) => {
  const databaseAccount = await accountModel.findOne({
    email: credentials.email,
  });

  if (databaseAccount === null) return "account-absent";

  const isValid = await bcrypt.compare(
    credentials.password,
    databaseAccount.password
  );

  if (!isValid) return "invalid-password";

  request.session.username = databaseAccount.username;
  request.session.email = databaseAccount.email;
  return true;
};
