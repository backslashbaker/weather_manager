import {Weather} from './weather.js'
const weather = new Weather();

async function oneDayLondon() {
	const temp = document.getElementById('temp');
	const description = document.getElementById('description');
	const allLondonWeather = await weather.londonWeather();

	temp.innerHTML = allLondonWeather[0] + '&deg;C';
	description.innerHTML = allLondonWeather[1];

};

oneDayLondon();
