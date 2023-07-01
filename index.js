require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const DatabaseManager = require("./database/DatabaseManager.js");
const WeatherManager = require("./database/WeatherManager.js");

const RegisterTemplate = require("./json/register.json");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./json"));
app.use(express.static("./css"));

app.use(
  session({
    secret: "WebApp-NodeJs-04",
    cookie: { secure: false },
    saveUninitialized: false,
    resave: false,
  })
);

app.set("view engine", "ejs");

/*----------------------------------------*/
/*------------- GET REQUESTS -------------*/
/*----------------------------------------*/

app.get("/", async (req, res) => {
  const locations =
    (await DatabaseManager.GetLocations(req.session.email)) ?? [];

  const CurrentStation = await WeatherManager.CurrentStation();
  const PersonalStations = await WeatherManager.PersonalStations(locations);

  res.render("home", {
    username: req.session.username ?? null,
    current: CurrentStation,
    personal: PersonalStations,
  });
});

app.get("/account", (req, res) => {
  res.render("register", {
    forms: RegisterTemplate.forms,
  });
});

app.get("*", (req, res) => {
  res.send("INVALID ROUTE");
});

/*---------------------------------------*/
/*------------ POST REQUESTS ------------*/
/*---------------------------------------*/

app.post("/account/:type", (req, res) => {
  if (req.params.type === "create") {
    const account = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };

    DatabaseManager.CreateAccount(account, req, res);
    return;
  }

  if (req.params.type === "login") {
    const account = {
      email: req.body.email,
      password: req.body.password,
    };

    DatabaseManager.LoginAccount(account, req, res);
    return;
  }
});

app.post("/weather", (req, res) => {
  const location = {
    city: req.body.city,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  };

  DatabaseManager.AddLocation(req.session.email, location);
  res.redirect("/");
});

app.listen(process.env.DEVELOPMENT_PORT, () => {
  console.log(`PORT: ${process.env.DEVELOPMENT_PORT} | ACTIVE`);
});
