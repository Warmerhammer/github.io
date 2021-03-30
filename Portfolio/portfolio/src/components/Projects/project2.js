import React, { useState } from 'react';
import {
  Image,
  Dimmer,
  Button,
  Header,
  Segment,
  Grid,
  Container,
  Transition,
} from 'semantic-ui-react';

import './projects.css';

import MonsterKiller from '../../Styles/MonsterKiller.gif';

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
    props.dHandleProjectVisible('Project2');
  };

  const content = (
    <div>
      <Header as="h2" inverted>
        Monster Killer
      </Header>

      <Button
        onClick={() =>
          window.open(
            'https://warmerhammer.github.io/monsterKillerStartingProject/',
            '_blank'
          )
        }
      >
        View
      </Button>
    </div>
  );

  return (
    <Segment className="project3Container">
      <Grid as={Container} divided columns={2} className="Project3Grid">
        <Grid.Column
          style={{ padding: '0 .6vw 0 0', margin: 'auto', flex: 'auto' }}
          width={6}
          verticalAlign="middle"
        >
          <Transition
            animation="fade"
            duration={500}
            visible={
              props.dProjectVisible === null ||
              props.dProjectVisible === 'Project2'
            }
            unmountOnHide={false}
            mountOnShow={false}
          >
            <Dimmer.Dimmable
              onMouseEnter={() => handleShow()}
              onMouseLeave={() => handleHide()}
              dimmed={active}
              dimmer={{ active, content }}
              as={Image}
              src={MonsterKiller}
              className="project1Dimmable"
              size="large"
              style={{
                margin: 'auto',
                border: '1px solid grey',
              }}
            />
          </Transition>
        </Grid.Column>
        <Segment as={Segment} raised={raised} className="Project3TextSegment">
          <Transition
            animation="fade"
            duration={500}
            visible={
              props.dProjectVisible === null ||
              props.dProjectVisible === 'Project2'
            }
            style={{ margin: 'auto' }}
            unmountOnHide={false}
            mountOnShow={false}
          >
            <Grid.Column
              style={{
                margin: 'auto',
                padding: '1vh 0 0 0',
              }}
              width={5}
            >
              <Container style={{ margin: 'auto' }}>
                <p className="Project3GreyText">Monster Killer Game</p>
                <p>
                  A game built mainly using JavaScript where the user battles an
                  imaginary monster.
                </p>
                <ul className="burgerLanguages">
                  <li className="subBurger" style={{ display: 'inline-block' }}>
                    <ul>
                      <li>JavaScript</li>
                      <li>HTML5</li>
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

                  <li className="subBurger" style={{ display: 'inline-block' }}>
                    <ul>
                      <li>CSS3</li>
                      <li>Redux</li>
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

                  <li className="subBurger" style={{ display: 'inline-block' }}>
                    <ul>
                      <li>Hooks</li>
                      <li>Modern React</li>
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
