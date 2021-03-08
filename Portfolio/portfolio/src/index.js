import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-less/semantic.less';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <BrowserRouter forceRefresh={false} basename="/">
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
