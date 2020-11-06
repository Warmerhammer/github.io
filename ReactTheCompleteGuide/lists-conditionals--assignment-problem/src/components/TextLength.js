import React from 'react';

const TextLength = props => {
  if (props.textLength <= 5) {
    return (
      <div>
        <p>Text length is a wee under 5 (Count: {props.textLength}) </p>
      </div>
    );
  } else {
    return (<div>
      <p>Text length is greater than 5 (Count: {props.textLength})</p>
      
    </div>)
  }
};

export default TextLength;
