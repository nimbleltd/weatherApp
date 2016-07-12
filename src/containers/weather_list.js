import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
// import {bindActionCreators} from 'redux';
// import {fetchWeather} from '../actions/index';

class WeatherList extends Component {
	renderWeather(cityData){
		const cityName = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp)
		// const pressure = cityData.list.map(weather => weather.main.temp)
		console.log(temps);

		return (
			<tr key={cityName}>
				<td>{cityName}</td>
				<td>
					<Sparklines data ={temps} height={120} width={180}>
						<SparklinesLine color='red' style={{ fill: "none" }}/>
					</Sparklines>
				</td>
			</tr>
		);
	}

	render () {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temp</th>
						<th>Pressure</th>
						<th>Humidity</th>
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