import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({term: event.target.value})

	}

	onFromSubmit(event) {
		event.preventDefault();
		//connect our search bar container and bind 'fetch_weather' to this container

	}

	render() {
		return(
			<form onSubmit={this.onFromSubmit} className="input-group">
				<input 
					placeholder="Get a Five Day forcast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}