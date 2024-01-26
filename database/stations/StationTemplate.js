const { DateTime } = require("luxon");

const WeatherTemplate = require("../../json/weather.json");

module.exports.WeatherData = (weather) => {
  return [
    DailyWeatherTemplate(weather, 0),
    DailyWeatherTemplate(weather, 1),
    DailyWeatherTemplate(weather, 2),
    DailyWeatherTemplate(weather, 3),
    DailyWeatherTemplate(weather, 4),
    DailyWeatherTemplate(weather, 5),
    DailyWeatherTemplate(weather, 6),
  ];
};

const DailyWeatherTemplate = (weather, day) => {
  return {
    day: GetDate(weather.days[day].datetime),
    header: [
      {
        value: weather.resolvedAddress,
        image: WeatherTemplate.header[0].image,
        class: WeatherTemplate.header[0].class,
      },
      {
        value: `${weather.latitude} : ${weather.longitude}`,
        image: WeatherTemplate.header[1].image,
        class: WeatherTemplate.header[1].class,
      },
    ],
    cards: [
      {
        main: {
          value: `${weather.days[day].temp}°C`,
          title: WeatherTemplate.cards[0].main.title,
          image: WeatherTemplate.cards[0].main.image,
          class: WeatherTemplate.cards[0].main.class,
        },
        details: [
          {
            value: `${weather.days[day].feelslike}°C`,
            title: WeatherTemplate.cards[0].details[0].title,
            image: WeatherTemplate.cards[0].details[0].image,
            class: WeatherTemplate.cards[0].details[0].class,
          },
          {
            value: `${weather.days[day].tempmax}°C`,
            title: WeatherTemplate.cards[0].details[1].title,
            image: WeatherTemplate.cards[0].details[1].image,
            class: WeatherTemplate.cards[0].details[1].class,
          },
          {
            value: `${weather.days[day].tempmin}°C`,
            title: WeatherTemplate.cards[0].details[2].title,
            image: WeatherTemplate.cards[0].details[2].image,
            class: WeatherTemplate.cards[0].details[2].class,
          },
        ],
      },
      {
        main: {
          value: `${weather.days[day].precip}mm`,
          title: WeatherTemplate.cards[1].main.title,
          image: WeatherTemplate.cards[1].main.image,
          class: WeatherTemplate.cards[1].main.class,
        },
        details: [
          {
            value: `${weather.days[day].precipprob}%`,
            title: WeatherTemplate.cards[1].details[0].title,
            image: WeatherTemplate.cards[1].details[0].image,
            class: WeatherTemplate.cards[1].details[0].class,
          },
          {
            value: `${weather.days[day].precipcover}%`,
            title: WeatherTemplate.cards[1].details[1].title,
            image: WeatherTemplate.cards[1].details[1].image,
            class: WeatherTemplate.cards[1].details[1].class,
          },
          {
            value: `${weather.days[day].snow}cm`,
            title: WeatherTemplate.cards[1].details[2].title,
            image: WeatherTemplate.cards[1].details[2].image,
            class: WeatherTemplate.cards[1].details[2].class,
          },
        ],
      },
    ],
    points: [
      {
        value: `${weather.days[day].humidity}%`,
        title: WeatherTemplate.points[0].title,
        image: WeatherTemplate.points[0].image,
        class: WeatherTemplate.points[0].class,
      },
      {
        value: `${weather.days[day].pressure}hPa`,
        title: WeatherTemplate.points[1].title,
        image: WeatherTemplate.points[1].image,
        class: WeatherTemplate.points[1].class,
      },
      {
        value: `${weather.days[day].windspeed}kmh`,
        title: WeatherTemplate.points[2].title,
        image: WeatherTemplate.points[2].image,
        class: WeatherTemplate.points[2].class,
      },
      {
        value: `${weather.days[day].cloudcover}%`,
        title: WeatherTemplate.points[3].title,
        image: WeatherTemplate.points[3].image,
        class: WeatherTemplate.points[3].class,
      },
    ],
  };
};

const GetDate = (date) => {
  return DateTime.fromISO(date).toFormat("dd MMMM").toString();
};
