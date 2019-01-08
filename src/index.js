import {Weather} from './weather.js'
const weather = new Weather();

async function temperature() {
	const temp = document.getElementById('temp');
	temp.innerHTML = await weather.apiCall() + '&deg;C';
	return temp;
}

async function description() {
	const describe = document.getElementById('description');
	describe.innerHTML = await weather.londonDescription()
	
	return describe;

}

temperature();
description();
