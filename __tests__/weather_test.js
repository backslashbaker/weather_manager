const fetch = require('node-fetch');
import { Weather } from '../src/weather';

describe('Weather', () => {

  const weather = new Weather();

    it('can access the weather API for London temperature', async () => {
       const data = await weather.londonWeather();
      expect(typeof data[0]).toEqual('number');
    });

    it('can access the weather API for London weather description', async () => {
      const data = await weather.londonWeather();
     expect(typeof data[1]).toEqual('string');
   });

   it('gets 5 day data and returns the value of "cnt"',  async () => {
     const londonWeather5Days = await weather.londonWeather5Days();
    expect(londonWeather5Days.cnt).toEqual(40);
  });

  it('returns an array of 16 dates as strings in an array',  async () => {
    console.log(weather.getforecast())
   expect(weather.getDates().length).toEqual(16);
 });

  // it('returns the temperature and the description of a selected date and time', async () => {
  //   const data = await weather.getforecast();
  //   expect(typeof data[0]).toEqual('number');
  // });




});