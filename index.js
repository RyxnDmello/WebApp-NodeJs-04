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

app.get("/", (req, res) => {
  WeatherManager.DisplayCurrentWeather(res);
});

app.listen(process.env.PORT, () => {
  console.log(`PORT: ${process.env.PORT} | ACTIVE`);
});
