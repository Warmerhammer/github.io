import React from 'react';
// import './Person.css'
// import styled from 'styled-comoponents';
import classes from './Person.css';


const person = props => {
  console.log('[Person.js] rendering...')
  const style = {
    '@media (minWidth: 500px)': {
      width: '450px',
    },
  };

  return (
    <div className={classes.Person} style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} style={style} />
    </div>
  );
};

export default person;
