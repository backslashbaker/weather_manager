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

   it('converts unix time, and formats it as a string', () => {
     expect(weather.convertDate(1546970400)).toEqual('2019-01-08');
   });

});

