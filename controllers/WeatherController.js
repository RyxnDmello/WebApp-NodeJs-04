const {
  AddLocation,
  RemoveLocation,
} = require("../database/LocationManager.js");

const add = async (req, res) => {
  await AddLocation(req.session.email, req.body);
  res.redirect("/#personal");
};

const remove = async (req, res) => {
  await RemoveLocation(req.session.email, req.body);
  res.redirect("/#personal");
};

module.exports = {
  add,
  remove,
};
