const { DateTime } = require("luxon");

const WeatherTemplate = require("../../json/weather.json");

module.exports.StationTemplate = (weather) => {
  return {
    header: [
      {
        value: weather.resolvedAddress,
        image: WeatherTemplate.header[0].image,
        class: WeatherTemplate.header[0].class,
      },
      {
        value: GetDate(weather.days[0].date),
        image: WeatherTemplate.header[1].image,
        class: WeatherTemplate.header[1].class,
      },
    ],
    cards: [
      {
        main: {
          value: `${weather.days[0].temp}°C`,
          title: WeatherTemplate.cards[0].main.title,
          image: WeatherTemplate.cards[0].main.image,
          class: WeatherTemplate.cards[0].main.class,
        },
        details: [
          {
            value: `${weather.days[0].feelslike}°C`,
            title: WeatherTemplate.cards[0].details[0].title,
            image: WeatherTemplate.cards[0].details[0].image,
            class: WeatherTemplate.cards[0].details[0].class,
          },
          {
            value: `${weather.days[0].tempmax}°C`,
            title: WeatherTemplate.cards[0].details[1].title,
            image: WeatherTemplate.cards[0].details[1].image,
            class: WeatherTemplate.cards[0].details[1].class,
          },
          {
            value: `${weather.days[0].tempmin}°C`,
            title: WeatherTemplate.cards[0].details[2].title,
            image: WeatherTemplate.cards[0].details[2].image,
            class: WeatherTemplate.cards[0].details[2].class,
          },
        ],
      },
      {
        main: {
          value: `${weather.days[0].precip}mm`,
          title: WeatherTemplate.cards[1].main.title,
          image: WeatherTemplate.cards[1].main.image,
          class: WeatherTemplate.cards[1].main.class,
        },
        details: [
          {
            value: `${weather.days[0].precipprob}%`,
            title: WeatherTemplate.cards[1].details[0].title,
            image: WeatherTemplate.cards[1].details[0].image,
            class: WeatherTemplate.cards[1].details[0].class,
          },
          {
            value: `${weather.days[0].precipcover}%`,
            title: WeatherTemplate.cards[1].details[1].title,
            image: WeatherTemplate.cards[1].details[1].image,
            class: WeatherTemplate.cards[1].details[1].class,
          },
          {
            value: `${weather.days[0].snow}cm`,
            title: WeatherTemplate.cards[1].details[2].title,
            image: WeatherTemplate.cards[1].details[2].image,
            class: WeatherTemplate.cards[1].details[2].class,
          },
        ],
      },
    ],
    points: [
      {
        value: `${weather.days[0].humidity}%`,
        title: WeatherTemplate.points[0].title,
        image: WeatherTemplate.points[0].image,
        class: WeatherTemplate.points[0].class,
      },
      {
        value: `${weather.days[0].pressure}hPa`,
        title: WeatherTemplate.points[1].title,
        image: WeatherTemplate.points[1].image,
        class: WeatherTemplate.points[1].class,
      },
      {
        value: `${weather.days[0].windspeed}kmh`,
        title: WeatherTemplate.points[2].title,
        image: WeatherTemplate.points[2].image,
        class: WeatherTemplate.points[2].class,
      },
      {
        value: `${weather.days[0].cloudcover}%`,
        title: WeatherTemplate.points[3].title,
        image: WeatherTemplate.points[3].image,
        class: WeatherTemplate.points[3].class,
      },
    ],
  };
};

const GetDate = (date) => {
  return DateTime.fromISO(date).toFormat("MMMM dd, yyyy");
};
