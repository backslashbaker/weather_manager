export class Api {

	constructor(url, response){
		this.url = 'https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric'
		this.response = await fetch(url + '&appid=' + process.env.API_KEY);
		const londonData = await response.json();

  return londonData

	}
}