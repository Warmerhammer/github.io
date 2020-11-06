import React from 'react';

const CharComponent = props => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <div style={props.style} onClick={props.click}>{props.char}</div>
    </li>
  );
};

export default CharComponent;
