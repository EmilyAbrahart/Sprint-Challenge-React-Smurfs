import React from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div`
width: 500px;
height: 200px;
margin: 2rem;
color: white;
border-radius: 2rem;
border: 4px solid white;
background: rgba(255,255,255,0.2);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Smurf = props => {
  return (
    <SmurfDiv>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

