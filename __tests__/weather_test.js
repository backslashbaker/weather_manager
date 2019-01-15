const fetch = require('node-fetch');
import { Weather } from '../src/weather';
import { Api } from '../src/api';
jest.mock('../src/api');

describe('Weather', () => {
  beforeEach(() => {
    Api.mockClear();
  })

  let weather = new Weather();

  it('creates an instance of weather class', () => {
    expect(weather instanceof Weather).toEqual(true);
  })

  it('returns an array of 16 dates as strings in an array',  async () => {
    console.log(weather.getforecast())
   expect(weather.getDates().length).toEqual(16);
 });

  it('returns the temperature and the description of a selected date and time', async () => {
    const data = await weather.getforecast();
    expect(typeof data).toEqual('object');
  });

});