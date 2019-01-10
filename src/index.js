import {Weather} from './weather.js'
const weather = new Weather();

async function oneDayLondon() {
	const temp = document.getElementById('temp');
	const description = document.getElementById('description');
	const allLondonWeather = await weather.londonWeather();

	temp.innerHTML = allLondonWeather[0] + '&deg;';
	description.innerHTML = allLondonWeather[1];

};



async function displayForecast() {
	const forecast = await weather.getforecast();
	const displayForecast = document.getElementById('display-forecast');

	forecast.forEach((obj) => {
    let info = document.createElement("div")
    info.classList.add("entry")

    let icon = document.createElement("img")
    icon.src = `http://openweathermap.org/img/w/${obj.icon}.png`
    info.appendChild(icon)

    let date = document.createElement("p")
    date.innerHTML = obj.date
    info.appendChild(date);

    let time = document.createElement("p")
    time.innerHTML = obj.time
    info.appendChild(time);

    let temp = document.createElement("p")
    temp.innerHTML = obj.temp
    info.appendChild(temp);

    let desc = document.createElement("p")
    desc.innerHTML = obj.description
    info.appendChild(desc)

    displayForecast.appendChild(info)
  })

};

displayForecast();
oneDayLondon();
