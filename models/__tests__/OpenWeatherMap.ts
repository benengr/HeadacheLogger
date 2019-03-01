import OpenWeatherMap from '../OpenWeatherMap';

describe('instantiation', () => {
    const key = "9ea5ce67b441f9a90603802e832a41df";
    const api = new OpenWeatherMap(key);

    it('should have correct key', () => {
        expect(api.apiKey).toEqual(key);
    })
});