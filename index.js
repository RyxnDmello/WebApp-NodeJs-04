require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const CurrentWeather = require("./database/CurrentWeather.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./json"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  CurrentWeather.CurrentWeather(res);
});

app.listen(process.env.PORT, () => {
  console.log(`PORT: ${process.env.PORT} | ACTIVE`);
});
