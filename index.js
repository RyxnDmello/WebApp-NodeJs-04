require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const DatabaseManager = require("./database/DatabaseManager.js");
const WeatherManager = require("./database/WeatherManager.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./json"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

const account = {
  username: "RyxnDmello",
  email: "ryan@gmail.com",
  password: "ryan",
};

const stations = [];

app.get("/", async (req, res) => {
  const CurrentStation = await WeatherManager.CurrentStation(stations, res);
  const PersonalStations = await WeatherManager.PersonalStations(stations, res);

  res.render("home", { current: CurrentStation, personal: PersonalStations });
});

app.get("/test", (req, res) => {
  DatabaseManager.CreateAccount(account);
  res.send("ACCOUNT CREATED");
});

app.post("/weather", (req, res) => {
  const location = {
    city: req.body.city,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };

  DatabaseManager.AddLocation(account, location);

  res.redirect("/");
});

app.listen(process.env.DEVELOPMENT_PORT, () => {
  console.log(`PORT: ${process.env.DEVELOPMENT_PORT} | ACTIVE`);
});
