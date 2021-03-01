const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=19efcf39fd7818dafc453b5113a0af8a&query=' + latitude + ',' + longitude;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather services...', undefined);
		} else if (body.error) {
			callback('Unable to find location...', undefined);
		} else {
			callback(
				undefined,
				`${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degress out.`
			);
		}
	});
};

module.exports = forecast;
