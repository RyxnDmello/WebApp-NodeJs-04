require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

const { ConnectDatabase } = require("./database/DatabaseManager.js");

const homeRoute = require("./routes/Home.js");
const accountRoute = require("./routes/Account.js");
const weatherRoute = require("./routes/Weather.js");
const errorRoute = require("./routes/Error.js");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./json"));
app.use(express.static("./css"));

app.use(
  session({
    secret: "CloudSense",
    cookie: { secure: false },
    saveUninitialized: false,
    resave: false,
  })
);

app.set("view engine", "ejs");

ConnectDatabase();

app.use("/", homeRoute);
app.use("/account", accountRoute);
app.use("/weather", weatherRoute);
app.use("/error", errorRoute);

app.listen(process.env.DEVELOPMENT_PORT || process.env.PORT, () => {
  console.log(`PORT: ${process.env.DEVELOPMENT_PORT} | ACTIVE`);
});
