import React, { Component } from 'react';
import Smurf from './Smurf';
import styled from 'styled-components';

const SmurfHeading = styled.h1`
	font-size: 3rem;
`;

class Smurfs extends Component {
	render() {
		return (
			<div className="Smurfs">
				<SmurfHeading>Smurf Village</SmurfHeading>
				<ul>
					{this.props.smurfs.map(smurf => {
						return (
							<Smurf
								name={smurf.name}
								id={smurf.id}
								age={smurf.age}
								height={smurf.height}
								key={smurf.id}
								deleteSmurf={this.props.deleteSmurf}
								isUpdating={this.props.isUpdating}
								updateSmurf={this.props.updateSmurf}
								putSmurf={this.props.putSmurf}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

Smurf.defaultProps = {
	smurfs: []
};

export default Smurfs;
