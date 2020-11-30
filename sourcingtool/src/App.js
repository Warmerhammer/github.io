import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Switch, Router, Route } from 'react-router-dom';

import Header from './Navigation/Header';
import Search from './containers/Search';
import SavedSearches from './containers/SavedSearches';
import Projects from './containers/Projects';
import history from './history';

const App = () => {
  return (
    <Container>
      <br />
      <Router history={history}>

      <Header />

      <Divider />
      
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>

          <Route exact path="/SavedSearches">
            <SavedSearches />
          </Route>

          <Route exact path="/Projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
