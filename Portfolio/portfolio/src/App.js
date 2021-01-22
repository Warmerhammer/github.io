import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/home';

function App() {
  return (
    <Container>
      <br />
      <Router>
        <Divider />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
  
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
