require('dotenv').config()
const fetch = require('node-fetch');

export class Weather {
  // Exporting is important, otherwise our tests or index filel won't have access to it



 async apiCall() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London'+ '&appid='+process.env.API_KEY)
  const json = await response.json();
  const tempInKelvin = json.main.temp;
  this.celsius = this.convert(tempInKelvin);

  return  this.celsius;


}
  convert(temp) {
    let converted = temp - 273.15;
    return converted.toFixed(1);
  }
}
