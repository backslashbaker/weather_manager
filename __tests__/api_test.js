import { Api } from '../src/api';

describe('Weather', () => {

	it('gets 5 day data and returns the value of "cnt"',  async () => {
		const londonWeather5Days = await weather.londonWeather5Days();
	expect(londonWeather5Days.cnt).toEqual(40);
	});

});