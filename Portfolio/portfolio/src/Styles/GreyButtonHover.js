import React, { useState, Component } from 'react';
import { Container, Button } from 'semantic-ui-react';

const GreyButtonHover = () => {
  const [hover, setHover] = useState(false);

  let color;

  const toggleHover = () => {
    setHover(true);

    if (hover === true) {
      color = {
        backgroundColor: 'grey',
      };
    } else {
      color = {
        backgroundColor: 'white',
      }
    }
  };

  return (
    <Container>
      <Button
        style={color}
        onMouseEnter={toggleHover}
        onMouseLeave={!toggleHover}
      ></Button>
    </Container>
  );
};

export default GreyButtonHover;
