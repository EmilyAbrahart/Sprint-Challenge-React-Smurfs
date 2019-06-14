import React, { Component } from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div`
	width: 500px;
	height: 250px;
	margin: 2rem;
	color: white;
	border-radius: 2rem;
	border: 4px solid white;
	background: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	box-sizing: border-box;
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
	width: 10rem;

	&:hover {
		background: #00a9d2;
		color: white;
		border: 2px solid white;
	}
`;
const UpdateSmurfFormContainer = styled.div`
	display: ${props => (props.isUpdating ? 'flex' : 'none')};
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: white;
	border-radius: 1.6rem;
	border: 4px solid white;
	box-sizing: border-box;
`;
const UpdateSmurfForm = styled.form`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	input {
		height: 3rem;
		width: 15rem;
		border: none;
		border-radius: 2rem;
		text-align: center;
		margin-bottom: 2rem;
		background: #00a9d2;
		color: white;
		border: 2px solid white;
	}
`;

export default class Smurf extends Component {
	state = {
		name: this.props.name,
		age: this.props.age,
		height: this.props.height,
		isUpdating: false
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	deleteSmurf = () => {
		this.props.deleteSmurf(this.props.id);
	};

	updateSmurf = () => {
		this.setState({
			isUpdating: true
		});
	};

  putSmurf = event => {
    event.preventDefault();
		this.props.putSmurf(this.state.name, this.state.age, this.state.height, this.props.id)
		this.setState({
			isUpdating: false
		})
  }

  cancelUpdate = () => {
    this.setState({
      isUpdating: false
    })
  }

	render() {
		return (
			<SmurfDiv>
				<UpdateSmurfFormContainer isUpdating={this.state.isUpdating}>
					<UpdateSmurfForm onSubmit={this.putSmurf}>
						<input
							onChange={this.handleInputChange}
							placeholder={this.props.name}
							value={this.state.name}
							name="name"
						/>
						<input
							onChange={this.handleInputChange}
							placeholder={this.props.age}
							value={this.state.age}
							name="age"
						/>
						<input
							onChange={this.handleInputChange}
							placeholder={this.props.height}
							value={this.state.height}
							name="height"
						/>
						<div>
							<SmurfButton>Update</SmurfButton>
							<SmurfButton type="button" onClick={this.cancelUpdate}>Cancel</SmurfButton>
						</div>
					</UpdateSmurfForm>
				</UpdateSmurfFormContainer>

				<h3>{this.props.name}</h3>
				<strong>{this.props.height} tall</strong>
				<p>{this.props.age} smurf years old</p>
				<SmurfButtonContainer>
					<SmurfButton onClick={this.updateSmurf}>Update</SmurfButton>
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
