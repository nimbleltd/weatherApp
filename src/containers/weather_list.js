import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from "../components/google_map";
// import {bindActionCreators} from 'redux';
// import {fetchWeather} from '../actions/index';

class WeatherList extends Component {
	renderWeather(cityData){
		const cityName = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp)=>(temp * (9/5))-459.67)
		const pressure = cityData.list.map(weather => weather.main.pressure)
		const humudities = cityData.list.map(weather => weather.main.humidity)
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;
		// combine the above 2 lines into one line
		const { lon, lat} = cityData.city.coord;

		return (
			<tr key={cityName}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="orange" units="F"/></td>
				<td><Chart data={pressure} color="green" units="hPa"/></td>
				<td><Chart data={humudities} color="blue" units="%"/></td>
			</tr>
		);
	}

	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temp (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
					<tbody>
					{this.props.weather.map(this.renderWeather)}
					</tbody>
			</table>	
		)
	}
}

// function mapStateToProps(state) {
// 	return {weather: state.weather};
// }
// the following equals what is above via ES6
function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);