import React from 'react';

const SearchEngine = props => {
  return (
    <div>
      <input value={props.result} onChange={props.click} />
      <p>{props.result}</p>
    </div>
  );
};

export default SearchEngine;
