require('dotenv').config()
const fetch = require('node-fetch');
const moment = require('moment');
export class Api {

	constructor(){

	}

	async londonForecast(){
		const link = 'https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric'
		const response = await fetch(link + '&appid=' + process.env.API_KEY);
		const londonData = await response.json();

		return londonData;

	}

	async londonWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/find?q=London,UK&units=metric'+ '&appid='+process.env.API_KEY)
    const json = await response.json();
    const temperature = json.list[0].main.temp;
    const weatherDescription = json.list[0].weather[0].description;
    const icon = json.list[0].weather[0].icon
    const allLondonData = {icon: icon, temperature: temperature, weatherDescription: weatherDescription};

    return allLondonData;
  };


}