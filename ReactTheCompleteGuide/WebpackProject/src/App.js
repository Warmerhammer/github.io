import React from 'react';

import { Link, Route } from 'react-router-dom';

import Users from './container/Users';
import Pizza from './container/Pizza';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
  return import ('./container/Pizza')
});

class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Link to ="/">Users</Link>
          <Link to ="Pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="Pizza" exact component={AsyncPizza} />
        </div>
      </div>
    );
  }
}

export default App;