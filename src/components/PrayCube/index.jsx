import React from 'react';

import { Container } from './styles';

const PrayCube = (props) => {
  return (
    <Container imageSrc={props.image}>
      <h1>{props.title}</h1>
    </Container>
  );
};

export default PrayCube;
