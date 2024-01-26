const {
  CurrentStation,
  PersonalStations,
} = require("../database/StationManager.js");

const HomeData = require("../json/home.json");
const formData = require("../json/register.json");

const home = async (req, res) => {
  const personalStations = await PersonalStations(req.session.email);
  const currentStation = await CurrentStation();

  res.render("home", {
    username: req.session.username,
    personal: personalStations,
    current: currentStation,
    ...HomeData,
  });
};

const register = (req, res) => {
  res.render("register", { forms: formData });
};

module.exports = {
  home,
  register,
};
