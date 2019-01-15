require('dotenv').config()
const fetch = require('node-fetch');
const moment = require('moment');
import { Api } from '../src/api';

export class Weather {
  // Exporting is important, otherwise our tests or index filel won't have access to it
  constructor() {
    this.apiCall = new Api();
  };

  async currentWeather() {
    const data = await this.apiCall.londonWeather();

    return data;
  }

getDates(){
  const times = ['00:00:00', '06:00:00', '12:00:00', '18:00:00']
  const oneDay = 1000 * 60 * 60 * 24;
  const today = new Date();
  const todayPlus1 = new Date(today.getTime() + (oneDay));
  const todayPlus2 = new Date(today.getTime() + (oneDay * 2));
  const todayPlus3 = new Date(today.getTime() + (oneDay * 3));
  const todayPlus4 = new Date(today.getTime() + (oneDay * 4));

  const nextFiveDays = [todayPlus1, todayPlus2, todayPlus3, todayPlus4];
  let dateStrings = [];

  nextFiveDays.forEach(function(date) {
    const dateToString = JSON.stringify(date)
    dateStrings.push(dateToString.substring(1,11))
  });

  let dateTime = []
  dateStrings.forEach((date) => {
    times.forEach((time) => {
      dateTime.push(date + ' ' + time)
    })
  })

  return dateTime
}

async getforecast(){
  const data = await this.apiCall.londonForecast();
  const dates = this.getDates();
  const dataList = data.list;
  const result = []


  dataList.forEach((apiData) => {
    dates.forEach((dateTimes) => {
        if (dateTimes === apiData.dt_txt) {
          let apiDate = apiData.dt_txt.split(" ");
          result.push({
            date: moment(apiDate[0]).format('dddd'),
            time: apiDate[1].slice(0, 5),
            temp: apiData.main.temp,
            description: apiData.weather[0].description,
          icon: apiData.weather[0].icon});
        };
      });
    });
  
  return result;
};




};

