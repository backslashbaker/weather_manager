require('dotenv').config()

export class Weather {
  // Exporting is important, otherwise our tests or index filel won't have access to it



 async apiCall() {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London'+ '&appid='+process.env.API_KEY)
  const jsonTOFIGUREOUTWHATISGOINGON = await response.json();
  const tempInKelvin = jsonTOFIGUREOUTWHATISGOINGON.main.temp
  // console.log(tempInKelvin)
  //return tempInKelvin
  this.celsius = this.convert(tempInKelvin)
  // console.log("CELSIUS", this.celsius)
  return  this.celsius;


}
  convert(temp) {
    let converted = temp - 273.15
    return converted.toFixed(1)
  }
}
