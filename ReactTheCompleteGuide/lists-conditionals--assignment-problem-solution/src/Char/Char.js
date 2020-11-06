import React from 'react';

const char = (props) => {
  const style = {
    display: 'inline-block',
    padding: '60px',
    margin: '60px',
    border: '1px solid black',
    textAlign: 'center',
  }
  
  return (
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  )
};

export default char;