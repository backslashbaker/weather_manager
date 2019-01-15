import { Api } from '../src/api';

describe('Api', () => {

	const api = new Api();

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