const bcrypt = require("bcrypt");

const AccountModel = require("../models/ModelManager.js");

module.exports.DatabaseCreateAccount = async (account, request, response) => {
  const databaseAccount = await AccountModel.findOne({ email: account.email });

  if (databaseAccount !== null) {
    response.redirect("/error/account-present");
    return;
  }

  const encryptedPassword = await bcrypt.hash(account.password, 10);

  const clientAccount = new AccountModel({
    username: account.username,
    email: account.email,
    password: encryptedPassword,
    locations: [],
  });

  const error = await clientAccount.save();

  if (error.email !== account.email) {
    response.redirect("/error/server-down");
    return;
  }

  request.session.username = account.username;
  request.session.email = account.email;
  response.redirect("/");
};

module.exports.DatabaseLoginAccount = async (account, request, response) => {
  const databaseAccount = await AccountModel.findOne({ email: account.email });

  if (databaseAccount === null) {
    response.redirect("/error/account-absent");
    return;
  }

  const isValidPassword = bcrypt.compare(
    account.password,
    databaseAccount.password
  );

  if (!isValidPassword) {
    response.redirect("/error/account-invalid-password");
    return;
  }

  request.session.username = databaseAccount.username;
  request.session.email = account.email;
  response.redirect("/");
};
