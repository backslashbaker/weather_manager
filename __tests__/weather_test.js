// const fetch = require('node-fetch');
import { Weather } from '../src/weather';
import { Api } from '../src/api';
jest.mock('../src/api');

describe('Weather', () => {
  beforeEach(() => {
    Api.mockClear();
  });

  let weather = new Weather();

  it('checks if weather class creates a new instance of api call class', () => {
    const weather = new Weather();
    expect(Api).toHaveBeenCalledTimes(1);
  });

  it('checks for a new instance of an api request', () => {
    expect(Api).not.toHaveBeenCalled();
  });

  it('checks whether getForecast makes an API call', async () => {
    const weather = new Weather();
    expect(Api).toHaveBeenCalledTimes(1);

    weather.getforecast();

    const mockApiRequestInstance = Api.mock.instances[0];
    const mockFiveDayApiCall = mockApiRequestInstance.londonForecast;

    expect(mockFiveDayApiCall).toHaveBeenCalledTimes(1);
  });

  it('checks whether currentWeather makes an API call', async () => {
    const weather = new Weather();
    expect(Api).toHaveBeenCalledTimes(1);

    weather.currentWeather();

    const mockApiRequestInstance = Api.mock.instances[0];
    const mockOneDayApiCall = mockApiRequestInstance.londonWeather;

    expect(mockOneDayApiCall).toHaveBeenCalledTimes(1);
  });


});