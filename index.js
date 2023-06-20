require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const WeatherManager = require("./database/WeatherManager.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./json"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const stations = [
    {
      latitude: 15.4584,
      longitude: 73.8057,
    },
  ];

  const CurrentStation = await WeatherManager.CurrentStation(stations, res);
  // const PersonalStations = await WeatherManager.PersonalStations(stations, res);

  res.render("home", { current: CurrentStation });
});

app.listen(process.env.DEVELOPMENT_PORT, () => {
  console.log(`PORT: ${process.env.DEVELOPMENT_PORT} | ACTIVE`);
});
