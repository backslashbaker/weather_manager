require('dotenv').config()
const fetch = require('node-fetch');

export class Weather {
  // Exporting is important, otherwise our tests or index filel won't have access to it

  async londonWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/find?q=London,UK&units=metric'+ '&appid='+process.env.API_KEY)
    const json = await response.json();
    const temperature = json.list[0].main.temp;
    const weatherDescription = json.list[0].weather[0].description;
    const allLondonData = [temperature, weatherDescription];

    return allLondonData;
  };

};
