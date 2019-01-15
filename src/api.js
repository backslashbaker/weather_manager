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

		return londonData

	}

}