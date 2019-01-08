const fetch = require('node-fetch');
import { Weather } from '../src/weather';

describe('Weather', () => {

  const weather = new Weather();

  // describe('Conversion', () => {
  //   it('converts from Kelvin to Celcius', () => {
  //     expect(weather.convert(273.15)).toEqual('0.0');
  //   });

  //   it('converts positive temperatures', () => {
  //     expect(weather.convert(303.15)).toEqual('30.0');
  //   });
  
  //   it('converts negative temperatures', () => {
  //     expect(weather.convert(253.15)).toEqual('-20.0');
  //   });

    it('can access the weather API for London', async () => {
       const data = await weather.londonWeather();
      expect(data).toEqual([8.33, "scattered clouds"]);
    });

  });

