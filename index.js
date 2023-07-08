require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const DatabaseManager = require("./database/DatabaseManager.js");
const WeatherManager = require("./database/WeatherManager.js");

const HomeTemplate = require("./json/home.json");
const RegisterTemplate = require("./json/register.json");
const ErrorTemplate = require("./json/error.json");

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
  const locations = await DatabaseManager.GetLocations(req.session.email);
  const CurrentStation = await WeatherManager.CurrentStation();
  const PersonalStations = await WeatherManager.PersonalStations(locations);

  res.render("home", {
    username: req.session.username ?? null,
    home: HomeTemplate,
    current: CurrentStation,
    personal: PersonalStations,
  });
});

app.get("/account", (req, res) => {
  res.render("register", {
    forms: RegisterTemplate.forms,
  });
});

app.get("/error/:type", (req, res) => {
  if (req.session) req.session.destroy();

  if (req.params.type === "account-absent") {
    res.render("error", { error: ErrorTemplate.accountAbsent });
    return;
  }

  if (req.params.type === "account-present") {
    res.render("error", { error: ErrorTemplate.accountPresent });
    return;
  }

  if (req.params.type === "account-invalid-password") {
    res.render("error", { error: ErrorTemplate.accountInvalidPassword });
    return;
  }

  if (req.params.type === "server-down") {
    res.render("error", { error: ErrorTemplate.serverDown });
    return;
  }

  res.render("error", { error: ErrorTemplate.lost });
});

app.get("*", (req, res) => {
  res.render("error", { error: ErrorTemplate.lost });
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

app.post("/weather/:type", (req, res) => {
  if (req.params.type === "create") {
    const location = {
      city: req.body.city,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };

    DatabaseManager.AddLocation(req.session.email, location);
  }

  if (req.params.type === "delete") {
    const location = {
      city: req.body.city,
      latitude: req.body.latitude.length === 0 ? null : req.body.latitude,
      longitude: req.body.longitude.length === 0 ? null : req.body.longitude,
    };

    DatabaseManager.DeleteLocation(req.session.email, location);
  }

  res.redirect("/#personal");
});

app.listen(process.env.DEVELOPMENT_PORT, () => {
  console.log(`PORT: ${process.env.DEVELOPMENT_PORT} | ACTIVE`);
});
