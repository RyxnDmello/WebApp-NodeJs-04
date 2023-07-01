const AccountModel = require("../models/ModelManager.js");

module.exports.DatabaseCreateAccount = async (account, request, response) => {
  const databaseAccount = await AccountModel.findOne({ email: account.email });

  if (databaseAccount !== null) {
    response.render("/error/account-present");
    return;
  }

  const clientAccount = new AccountModel({
    username: account.username,
    email: account.email,
    password: account.password,
    locations: [],
  });

  const error = await clientAccount.save();

  if (error.email !== account.email) {
    response.render("/error/database-down");
    return;
  }

  request.session.username = account.username;
  request.session.email = account.email;
  response.redirect("/");
};

module.exports.DatabaseLoginAccount = async (account, request, response) => {
  const databaseAccount = await AccountModel.findOne({ email: account.email });

  if (databaseAccount === null) {
    response.render("/error/account-absent");
    return;
  }

  if (databaseAccount.password !== account.password) {
    response.render("/error/account-invalid-password");
    return;
  }

  request.session.username = databaseAccount.username;
  request.session.email = account.email;
  response.redirect("/");
};
