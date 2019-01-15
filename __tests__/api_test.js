import { Api } from '../src/api';

describe('Api', () => {

	const api = new Api();

	it('gets 5 day data and returns the value of "cnt"',  async () => {
		const londonForecast = await api.londonForecast();
	expect(londonForecast.cnt).toEqual(40);
	});

	it('returns the temperature and the description of a selected date and time', async () => {
    const data = await weather.getforecast();
    expect(typeof data).toEqual('object');
  });

});