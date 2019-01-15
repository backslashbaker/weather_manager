import { Api } from '../src/api';

describe('Api', () => {

let api = new Api();

	it('creates an instance of Api class', () => {
    expect(api instanceof Api).toEqual(true);
  })

	it('can access the weather API for London temperature', async () => {
		const data = await api.londonWeather();
	 expect(typeof data.temperature).toEqual('number');
 });

 it('can access the weather API for London weather description', async () => {
	 const data = await api.londonWeather();
	expect(typeof data.weatherDescription).toEqual('string');
});

	it('gets 5 day data and returns the value of "cnt"',  async () => {
		const londonForecast = await api.londonForecast();
	expect(londonForecast.cnt).toEqual(40);
	});


});