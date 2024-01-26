const {
  CreateAccount,
  LoginAccount,
} = require("../database/AccountManager.js");

const create = async (req, res) => {
  const isCreated = await CreateAccount(req.body, req);

  if (isCreated !== true) {
    res.redirect(`/error/${isCreated}`);
    return;
  }

  res.redirect("/");
};

const login = async (req, res) => {
  const isLogin = await LoginAccount(req.body, req);

  if (isLogin !== true) {
    res.redirect(`/error/${isLogin}`);
    return;
  }

  res.redirect("/");
};

module.exports = {
  create,
  login,
};
