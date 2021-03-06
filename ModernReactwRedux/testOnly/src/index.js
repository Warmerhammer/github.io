import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './react-redux';
import { WrappedCounter } from './App';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
      <WrappedCounter />
  </Provider>, 
  document.querySelector('#root')
);