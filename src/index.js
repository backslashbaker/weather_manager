import {Weather} from './weather.js'
const weather = new Weather()

async function temperature() {
  const temp = document.getElementById('temp');
	temp.innerHTML = await weather.apiCall() + 'ºC';
	return temp;
}

temperature();

