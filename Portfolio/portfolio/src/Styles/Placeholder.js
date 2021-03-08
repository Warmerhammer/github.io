import React from 'react';
import { Placeholder } from 'semantic-ui-react';

export default function PlaceholderComponent() {
  return (
    <div style={{ height: '30vh', margin: '2vh' }}>
      <Placeholder style={{ margin: '2vh 10vw', height: '30vh' }} fluid>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
      <div>
        Loading...
      </div>
    </div>
  );
}
