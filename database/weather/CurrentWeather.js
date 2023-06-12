const { DateTime } = require("luxon");

const Home = require("../../json/home.json");

module.exports.CurrentWeather = async (API, response) => {
  const weather = await GetWeatherData(API);
  if (weather !== null) SetWeatherData(weather);
  response.render("home", { current: Home.current });
};

const GetWeatherData = async (API) => {
  const response = await fetch(API);
  const weather = await response.json();
  return weather;
};

const SetWeatherData = (weather) => {
  Home.current.header[0].value = weather.resolvedAddress;
  Home.current.header[1].value = DateTime.fromISO(
    weather.days[0].datetime
  ).toFormat("MMMM dd, yyyy");

  Home.current.cards[0].main.value = `${weather.days[0].temp}°C`;
  Home.current.cards[0].details[0].value = `${weather.days[0].tempmin}°C`;
  Home.current.cards[0].details[1].value = `${weather.days[0].tempmax}°C`;
  Home.current.cards[0].details[2].value = `${weather.days[0].feelslike}°C`;

  Home.current.cards[1].main.value = `${weather.days[0].precip}mm`;
  Home.current.cards[1].details[0].value = `${weather.days[0].precipprob}%`;
  Home.current.cards[1].details[1].value = `${weather.days[0].precipcover}%`;
  Home.current.cards[1].details[2].value = `${weather.days[0].snow}cm`;

  Home.current.points[0].value = `${weather.days[0].humidity}%`;
  Home.current.points[1].value = `${weather.days[0].pressure}hPa`;
  Home.current.points[2].value = `${weather.days[0].windspeed}kmh`;
  Home.current.points[3].value = `${weather.days[0].cloudcover}%`;
};
