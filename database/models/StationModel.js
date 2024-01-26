const weatherData = require("../../json/weather.json");
const { DateTime } = require("luxon");

module.exports = stationModel = (weather) => {
  const week = [];

  for (let day = 0; day < 7; day++) {
    week.push(DailyWeather(weather, day));
  }

  return week;
};

const DailyWeather = (weather, day) => {
  return {
    header: [
      {
        value: weather.resolvedAddress,
        image: weatherData.header[0].image,
        class: weatherData.header[0].class,
      },
      {
        value: `${weather.latitude} : ${weather.longitude}`,
        image: weatherData.header[1].image,
        class: weatherData.header[1].class,
      },
    ],
    cards: [
      {
        main: {
          value: `${weather.days[day].temp}°C`,
          title: weatherData.cards[0].main.title,
          image: weatherData.cards[0].main.image,
          class: weatherData.cards[0].main.class,
        },
        details: [
          {
            value: `${weather.days[day].feelslike}°C`,
            title: weatherData.cards[0].details[0].title,
            image: weatherData.cards[0].details[0].image,
            class: weatherData.cards[0].details[0].class,
          },
          {
            value: `${weather.days[day].tempmax}°C`,
            title: weatherData.cards[0].details[1].title,
            image: weatherData.cards[0].details[1].image,
            class: weatherData.cards[0].details[1].class,
          },
          {
            value: `${weather.days[day].tempmin}°C`,
            title: weatherData.cards[0].details[2].title,
            image: weatherData.cards[0].details[2].image,
            class: weatherData.cards[0].details[2].class,
          },
        ],
      },
      {
        main: {
          value: `${weather.days[day].precip}mm`,
          title: weatherData.cards[1].main.title,
          image: weatherData.cards[1].main.image,
          class: weatherData.cards[1].main.class,
        },
        details: [
          {
            value: `${weather.days[day].precipprob}%`,
            title: weatherData.cards[1].details[0].title,
            image: weatherData.cards[1].details[0].image,
            class: weatherData.cards[1].details[0].class,
          },
          {
            value: `${weather.days[day].precipcover}%`,
            title: weatherData.cards[1].details[1].title,
            image: weatherData.cards[1].details[1].image,
            class: weatherData.cards[1].details[1].class,
          },
          {
            value: `${weather.days[day].snow}cm`,
            title: weatherData.cards[1].details[2].title,
            image: weatherData.cards[1].details[2].image,
            class: weatherData.cards[1].details[2].class,
          },
        ],
      },
    ],
    points: [
      {
        value: `${weather.days[day].humidity}%`,
        title: weatherData.points[0].title,
        image: weatherData.points[0].image,
        class: weatherData.points[0].class,
      },
      {
        value: `${weather.days[day].pressure}hPa`,
        title: weatherData.points[1].title,
        image: weatherData.points[1].image,
        class: weatherData.points[1].class,
      },
      {
        value: `${weather.days[day].windspeed}kmh`,
        title: weatherData.points[2].title,
        image: weatherData.points[2].image,
        class: weatherData.points[2].class,
      },
      {
        value: `${weather.days[day].cloudcover}%`,
        title: weatherData.points[3].title,
        image: weatherData.points[3].image,
        class: weatherData.points[3].class,
      },
    ],
    day: formattedDate(weather.days[day].datetime),
  };
};

const formattedDate = (date) => {
  return DateTime.fromISO(date).toFormat("dd MMM").toString();
};
