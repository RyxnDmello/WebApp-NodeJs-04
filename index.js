require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const WeatherManager = require("./database/WeatherManager.js");
const Home = require("./json/home.json");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./json"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  WeatherManager.CurrentStation(res);
});

app.get("/test", async (req, res) => {
  const stations = [
    {
      latitude: 15.4584,
      longitude: 73.8057,
    },
    {
      latitude: 48.8572,
      longitude: 2.34141,
    },
  ];

  WeatherManager.CurrentStation(stations, res);
  const weather = await WeatherManager.PersonalStations(stations, res);

  Home.weather = weather;

  console.log(Home);
});

app.listen(process.env.DEVELOPMENT_PORT, () => {
  console.log(`PORT: ${process.env.DEVELOPMENT_PORT} | ACTIVE`);
});
