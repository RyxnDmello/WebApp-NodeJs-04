const Home = require("../json/home.json");

const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Panjim/next7days?unitGroup=metric&include=days%2Chours%2Ccurrent&key=QNPWJA4NCCPXKMWTSB7L97DLX&contentType=json`;

module.exports.CurrentWeather = async (response) => {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      Home.current.header[0].value = data.resolvedAddress;
      Home.current.header[1].value = "12th June, 2023";

      Home.current.cards[0].main.value = `${data.days[0].temp}°C`;
      Home.current.cards[0].details[0].value = `${data.days[0].tempmin}`;
      Home.current.cards[0].details[1].value = `${data.days[0].tempmax}`;
      Home.current.cards[0].details[2].value = `${data.days[0].feelslike}`;

      Home.current.cards[1].main.value = `${data.days[0].precip}cm`;
      Home.current.cards[1].details[0].value = `${data.days[0].precipprob}`;
      Home.current.cards[1].details[1].value = `${data.days[0].precipvover}`;
      Home.current.cards[1].details[2].value = `${data.days[0].dew}`;

      Home.current.points[0].value = `${data.days[0].humidity}%`;
      Home.current.points[1].value = `${data.days[0].pressure}hPa`;
      Home.current.points[2].value = `${data.days[0].windspeed}m/s`;
      Home.current.points[3].value = `${data.days[0].cloudcover}%`;

      response.render("home", { current: Home.current });
    })
    .catch((err) => console.log(err));
};
