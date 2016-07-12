import axios from 'axios';

const API_KEY='139b1d9ee3931be2a7767e39f61934ad';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	// console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}