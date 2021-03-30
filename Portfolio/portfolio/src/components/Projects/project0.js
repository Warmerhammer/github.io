import React, { useState } from 'react';
import {
  Image,
  Dimmer,
  Button,
  Header,
  Segment,
  Grid,
  Transition,
  Container,
} from 'semantic-ui-react';

import './projects.css';

import BurgerGif from '../../Styles/BurgerProjectGif.gif';

function Projects(props) {
  const [active, setActive] = useState(false);
  const [raised, setRaised] = useState(false);

  const handleHide = () => {
    setActive(false);
    setRaised(false);
    props.dHandleProjectVisible(null);
  };

  const handleShow = () => {
    setActive(true);
    setRaised(true);
    props.dHandleProjectVisible('Project0');
  };

  const content = (
    <div>
      <Header as="h2" inverted>
        Burger Builder
      </Header>

      <Button
        onClick={() =>
          window.open(
            'https://react-my-burger-7d0c9.web.app/',
            '_blank'
          )
        }
      >
        View
      </Button>
    </div>
  );

  return (
    <Segment className="project1Container">
      <Grid as={Container} columns={2} className="Project1Grid">
        <Grid.Column stretched width={6} className="Project1GifContainer">
          <Transition
            visible={
              props.dProjectVisible === null ||
              props.dProjectVisible === 'Project0'
            }
            duration={500}
            animation="fade"
            style={{ flex: 'auto' }}
            unmountOnHide={false}
            mountOnShow={false}
          >
            <Dimmer.Dimmable
              as={Image}
              dimmed={active}
              dimmer={{ active, content }}
              onMouseEnter={() => handleShow()}
              onMouseLeave={() => handleHide()}
              src={BurgerGif}
              className="project1Dimmable"
              size="large"
              style={{ border: '1px grey solid', margin: 'auto' }}
            />
          </Transition>
        </Grid.Column>
        <Segment raised={raised} className="Project1TextSegment">
          <Transition
            visible={
              props.dProjectVisible === null ||
              props.dProjectVisible === 'Project0'
            }
            duration={500}
            animation="fade"
            style={{ margin: 'auto' }}
            unmountOnHide={false}
          >
            <Grid.Column
              style={{
                padding: '1vh 0 0 0',
              }}
              width={5}
              verticalAlign={'top'}
            >
              <Container style={{ margin: '0' }}>
                <p className="projectsSpecialColor">03. Projects</p>
                <p className="Project0GreyText">Burger Builder App</p>
                <p>
                  A single page web application that allows the user to build a
                  custom burger, add it to a shopping cart, and pay for it.
                </p>
                <ul
                  className="burgerLanguages"
                  style={{
                    margin: '0',
                    display: 'flex',
                    width: '100%',
                  }}
                >
                  <li
                    className="subBurger"
                    style={{
                      display: 'block',
                      justifyContent: 'space-around',
                    }}
                  >
                    <ul style={{ justifyContent: 'space-around' }}>
                      <li>JavaScript</li>
                      <li>HTML5</li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                    </ul>
                  </li>

                  <li className="subBurger" style={{ display: 'inline-block' }}>
                    <ul>
                      <li>Redux</li>
                      <li>CSS3</li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                    </ul>
                  </li>

                  <li className="subBurger" style={{ display: 'inline-block' }}>
                    <ul>
                      <li>Modern React</li>
                      <li>Hooks</li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                    </ul>
                  </li>

                  <li className="subBurger" style={{ display: 'inline-block' }}>
                    <ul>
                      <li>Firebase</li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                    </ul>
                  </li>
                </ul>
              </Container>
            </Grid.Column>
          </Transition>
        </Segment>
      </Grid>
    </Segment>
  );
}

export default Projects;
