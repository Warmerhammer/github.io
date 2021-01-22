import React from 'react';
import {Container, Divider} from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Container>
      <br />
      <Router>

      <Divider /> 

      <div className="App">
        <p>Hello</p>
      </div>
      </Router>
    </Container>
  );
}

export default App;
