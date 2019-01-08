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

async londonWeather5Days(){
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric'
  const response = await fetch(url + '&appid=' + process.env.API_KEY);
  const londonData = await response.json();

  return londonData
}

getDates(){
  const oneDay = 1000 * 60 * 60 * 24;
  const today = new Date();
  const todayPlus1 = new Date(today.getTime() + (oneDay));
  const todayPlus2 = new Date(today.getTime() + (oneDay * 2));
  const todayPlus3 = new Date(today.getTime() + (oneDay * 3));
  const todayPlus4 = new Date(today.getTime() + (oneDay * 4));

  const nextFiveDays = [today, todayPlus1, todayPlus2, todayPlus3, todayPlus4];
  let dateStrings = [];

  nextFiveDays.forEach(function(date) {
   const dateToString = JSON.stringify(date)
   dateStrings.push(dateToString.substring(1,11))
  });

  return dateStrings
}

};

