import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import styled from 'styled-components';

const AppDiv = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
`;

const SmurfNav = styled.nav`
	box-sizing: border-box;
	padding: 0 1rem;
	border-radius: 0 0 2rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	left: 0;
	top: 2rem;

	a {
		text-decoration: none;
		color: white;
		padding: 0.5rem 3rem;
		background: #00a9d2;
		border-radius: 1rem;
		margin-bottom: 1rem;
		font-weight: bold;
		border: 2px solid white;

		&.activeNavButton {
			background: white;
			color: #00a9d2;
		}
	}
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smurfs: []
		};
	}

	getSmurfs = () => {
		axios
			.get('http://localhost:3333/smurfs')
			.then(res =>
				this.setState({
					smurfs: res.data
				})
			)
			.catch(err => console.log(err));
	};

	componentDidMount() {
		this.getSmurfs();
	}

	addNewSmurf = props => {
		axios
			.post('http://localhost:3333/smurfs', props)
			.then(res =>
				this.setState({
					smurfs: res.data
				})
			)
			.catch(err => console.log(err));
	};

	deleteSmurf = propID => {
		axios
			.delete(`http://localhost:3333/smurfs/${propID}`)
			.then(res =>
				this.setState({
					smurfs: res.data
				})
			)
			.catch(err => console.log(err));
	};

	putSmurf = (propName, propAge, propHeight, propID) => {
		const smurfObject = {
			name: propName,
			age: propAge,
			height: propHeight,
		}
		axios
			.put(`http://localhost:3333/smurfs/${propID}`, smurfObject)
			.then(res =>
				this.setState({
					smurfs: res.data
				})
			)
			.catch(err => console.log(err));
	};
	// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
	// Notice what your map function is looping over and returning inside of Smurfs.
	// You'll need to make sure you have the right properties on state and pass them down to props.
	render() {
		return (
			<AppDiv>
				<SmurfNav>
					<NavLink exact to="/" activeClassName="activeNavButton">
						Smurf Village
					</NavLink>
					<NavLink to="/smurf-form" activeClassName="activeNavButton">
						Add A Smurf
					</NavLink>
				</SmurfNav>
				<Route
					path="/smurf-form"
					render={props => (
						<SmurfForm {...props} addNewSmurf={this.addNewSmurf} />
					)}
				/>
				<Route
					exact
					path="/"
					render={props => (
						<Smurfs
							{...props}
							smurfs={this.state.smurfs}
							deleteSmurf={this.deleteSmurf}
							putSmurf={this.putSmurf}
						/>
					)}
				/>
			</AppDiv>
		);
	}
}

export default App;
