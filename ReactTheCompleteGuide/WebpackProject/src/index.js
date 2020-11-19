import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import classes from './index.css';

const app = {
  <BrowserRouter>
    <App />
  </BrowserRouter>
}

ReactDOM.render(app, document.getElementById('root'))