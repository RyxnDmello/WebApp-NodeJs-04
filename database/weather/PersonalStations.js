require("dotenv").config();
const { DateTime } = require("luxon");

const Home = require("../../json/home.json");

module.exports.CreatePersonalStations = async (stations) => {
  let personalStations = [];

  for (let i = 0; i < stations.length; i++) {
    let weather = await GetWeatherData(
      stations[i].latitude,
      stations[i].longitude
    );

    if (weather !== null) personalStations.push(SetWeatherData(weather));
  }

  return personalStations;
};

const GetWeatherData = async (latitude, longitude) => {
  const API = `${process.env.WEATHER_API_URL}/${latitude},${longitude}?${process.env.WEATHER_API_PARAMS}&key=${process.env.WEATHER_API_KEY}`;
  const response = await fetch(API);
  const weather = await response.json();
  return weather;
};

const SetWeatherData = (weather) => {
  return {
    header: [
      {
        value: weather.resolvedAddress,
        image: "/home/weather/location.png",
        class: "current-location",
      },
      {
        value: DateTime.fromISO(weather.days[0].datetime).toFormat(
          "MMMM dd, yyyy"
        ),
        image: "/home/weather/date.png",
        class: "current-date",
      },
    ],
    cards: [
      {
        main: {
          title: "Temperature",
          value: `${weather.days[0].temp}°C`,
          class: "current-temp",
        },
        details: [
          {
            title: "Feels Like",
            value: `${weather.days[0].feelslike}°C`,
            image: "/home/weather/temp-feels.png",
            class: "current-temp-feels",
          },
          {
            title: "Maximum",
            value: `${weather.days[0].tempmax}°C`,
            image: "/home/weather/temp-maximum.png",
            class: "current-temp-max",
          },
          {
            title: "Minimum",
            value: `${weather.days[0].tempmin}°C`,
            image: "/home/weather/temp-minimum.png",
            class: "current-temp-min",
          },
        ],
      },
      {
        main: {
          title: "Precipitation",
          value: `${weather.days[0].precip}mm`,
          class: "current-precipitation",
        },
        details: [
          {
            title: "Chance",
            value: `${weather.days[0].precipprob}%`,
            image: "/home/weather/precip-prob.png",
            class: "current-precip-chance",
          },
          {
            title: "Cover",
            value: `${weather.days[0].precipcover}%`,
            image: "/home/weather/precip-cover.png",
            class: "current-precipitation-cover",
          },
          {
            title: "Snow",
            value: `${weather.days[0].snow}cm`,
            image: "/home/weather/precip-snow.png",
            class: "current-precipitation-dew",
          },
        ],
      },
    ],
    points: [
      {
        title: "Humidity",
        value: `${weather.days[0].humidity}%`,
        image: "/home/weather/humidity.png",
        class: "current-humidity",
      },
      {
        title: "Pressure",
        value: `${weather.days[0].pressure}hPa`,
        image: "/home/weather/pressure.png",
        class: "current-pressure",
      },
      {
        title: "Winds",
        value: `${weather.days[0].windspeed}kmh`,
        image: "/home/weather/winds.png",
        class: "current-winds",
      },
      {
        title: "Clouds",
        value: `${weather.days[0].cloudcover}%`,
        image: "/home/weather/clouds.png",
        class: "current-clouds",
      },
    ],
  };
};
