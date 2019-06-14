import React, { Component } from 'react';
import styled from 'styled-components';

const SmurfFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const SmurfFormHeader = styled.h1`
	font-size: 3rem;
`;
const SmurfInputForm = styled.form`
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	input {
		height: 3rem;
		width: 30rem;
		border: none;
		border-radius: 2rem;
		text-align: center;
		margin-bottom: 2rem;
	}
`;
const FormButton = styled.button`
	text-decoration: none;
	color: white;
	padding: 0.5rem 3rem;
	background: #00a9d2;
	border-radius: 1rem;
	margin-bottom: 1rem;
	font-weight: bold;
	border: 2px solid white;
	font-size: 1.3rem;
`;

class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			height: ''
		};
	}

	addSmurf = event => {
		event.preventDefault();
		// add code to create the smurf using the api

		this.setState({
			name: '',
			age: '',
			height: ''
		});
	};

	addSmurf = event => {
		event.preventDefault();
		// add code to create the smurf using the api
		const smurfObj = {
			name: this.state.name,
			age: this.state.age,
			height: this.state.height
		};
		this.props.addNewSmurf(smurfObj);

		this.setState({
			name: '',
			age: '',
			height: ''
		});
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<SmurfFormContainer>
				<SmurfFormHeader>Add A Smurf</SmurfFormHeader>
				<SmurfInputForm onSubmit={this.addSmurf}>
					<input
						onChange={this.handleInputChange}
						placeholder="Name"
						value={this.state.name}
						name="name"
					/>
					<input
						onChange={this.handleInputChange}
						placeholder="Age"
						value={this.state.age}
						name="age"
					/>
					<input
						onChange={this.handleInputChange}
						placeholder="Height"
						value={this.state.height}
						name="height"
					/>
					<FormButton type="submit">Add to the Village</FormButton>
				</SmurfInputForm>
			</SmurfFormContainer>
		);
	}
}

export default SmurfForm;
