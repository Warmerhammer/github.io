import React from 'react';
import { Container } from 'semantic-ui-react';

export default function PlaceholderComponent() {
  return (
    <div style={{ height: '30vh', margin: '2vh' }}>
      <Container style={{ margin: '2vh 10vw', height: '30vh' }} fluid>
      </Container>
      <div>
        Loading...
      </div>
    </div>
  );
}
