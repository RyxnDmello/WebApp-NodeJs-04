const errorData = require("../json/error.json");

const error = (req, res) => {
  res.render("error", { error: errorData[req.params.type] });
};

module.exports = {
  error,
};
