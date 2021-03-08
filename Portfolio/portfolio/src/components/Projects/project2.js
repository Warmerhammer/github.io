import React, { useState } from 'react';
import {
  Image,
  Dimmer,
  Button,
  Header,
  Segment,
  Grid,
  Ref,
  Sticky,
  Container,
} from 'semantic-ui-react';

import './projects.css';

import YouTubeLite from '../../Styles/YouTubeLite.gif';

function Projects() {
  const [active, setActive] = useState(false);

  const handleHide = () => {
    setActive(false);
  };

  const handleShow = () => {
    setActive(true);
  };

  const content = (
    <div>
      <Header as="h2" inverted>
        Burger Builder
      </Header>

      <Button>View</Button>
    </div>
  );

  const contextRef = React.useRef(null);

  return (
    <Container className="project1Container" style={{ margin: '0' }}>
      <Segment raised >
        <Grid columns={2} style={{ height: '20vh', margin: '0 0 0 0' }}>
          <Grid.Column style={{ padding: '.3vh 0 0 0', margin: '0 2em 0 0' }} width={5}>
            <Dimmer.Dimmable
              as={Image}
              dimmed={active}
              dimmer={{ active, content }}
              onMouseEnter={() => handleShow()}
              onMouseLeave={() => handleHide()}
              src={YouTubeLite}
              className="project1Dimmable"
              size="large"
            />
          </Grid.Column>
          <Grid.Column fluid stretched style={{ padding: '1vh 0 0 0', width: '30vw' }}>
            <Ref innerRef={contextRef}>
              <Sticky context={contextRef}>
                <p>
                  A single page web application that allows the user to build a
                  custom burger, add it to a shopping cart, and pay for it.
                </p>
                <ul className="burgerLanguages">
                  <li className="subBurger">
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li style={{ listStyle: 'none' }}><br/></li>
                  </li>

                  <li className="subBurger">
                    <li>Redux</li>
                    <li>Hooks</li>
                    <li>Firebase</li>
                    <li style={{ listStyle: 'none' }}>
                      <br />
                    </li>
                  </li>

                  <li className="subBurger">
                    <li>Modern React</li>
                    <li style={{ listStyle: 'none' }}><br/></li>
                    <li style={{ listStyle: 'none' }}><br/></li>
                    <li style={{ listStyle: 'none' }}>
                      <br />
                    </li>
                  </li>
                </ul>
              </Sticky>
            </Ref>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
}

export default Projects;
