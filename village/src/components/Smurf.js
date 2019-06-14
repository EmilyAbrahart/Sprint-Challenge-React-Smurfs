import React, { Component } from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div`
	width: 500px;
	height: 200px;
	margin: 2rem;
	color: white;
	border-radius: 2rem;
	border: 4px solid white;
	background: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const SmurfButtonContainer = styled.div`
	display: flex;
`;
const SmurfButton = styled.button`
	text-decoration: none;
	background: white;
	color: #00a9d2;
	border: 2px solid #00a9d2;
	padding: 0.5rem 2rem;
	border-radius: 1rem;
	margin-bottom: 1rem;
	font-weight: bold;
	border: 2px solid #00a9d2;

	&:hover {
		background: #00a9d2;
		color: white;
		border: 2px solid white;
	}
`;

export default class Smurf extends Component {
	deleteSmurf = () => {
		this.props.deleteSmurf(this.props.id);
	};

	render() {
		return (
			<SmurfDiv>
				<h3>{this.props.name}</h3>
				<strong>{this.props.height} tall</strong>
				<p>{this.props.age} smurf years old</p>
				<SmurfButtonContainer>
					<SmurfButton>Update</SmurfButton>
					<SmurfButton onClick={this.deleteSmurf}>Delete</SmurfButton>
				</SmurfButtonContainer>
			</SmurfDiv>
		);
	}
}

Smurf.defaultProps = {
	name: '',
	height: '',
	age: ''
};
