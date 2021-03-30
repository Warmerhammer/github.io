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

import YouTubeLite from '../../Styles/YouTubeLite.gif';

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

    props.dHandleProjectVisible('Project1');
  };

  const content = (
    <div>
      <Header as="h2" inverted>
        YouTube Lite
      </Header>

      <Button
        onClick={() =>
          window.open('https://videos-hooks-dusky-tau.vercel.app/', '_blank')
        }
      >
        View
      </Button>
    </div>
  );

  return (
    <Segment className="project2Container">
      <Grid as={Container} divided columns={2} className="Project2Grid">
        <Grid.Column
          width={6}
          verticalAlign="middle"
          className="Project2GifGridColumn"
        >
          <Transition
            animation="fade"
            duration={500}
            visible={
              props.dProjectVisible === null ||
              props.dProjectVisible === 'Project1'
            }
            style={{ flex: 'auto' }}
            unmountOnHide={false}
            mountOnShow={false}
          >
            <Dimmer.Dimmable
              src={YouTubeLite}
              size="large"
              style={{
                border: '1px solid grey',
                margin: 'auto',
              }}
              onMouseEnter={() => handleShow()}
              onMouseLeave={() => handleHide()}
              as={Image}
              dimmed={active}
              dimmer={{ active, content }}
            />
          </Transition>
        </Grid.Column>
        <Segment raised={raised} className="Project2TextSegment">
          <Transition
            animation="fade"
            duartion={500}
            visible={
              props.dProjectVisible === null ||
              props.dProjectVisible === 'Project1'
            }
            style={{ margin: 'auto' }}
            unmountOnHide={false}
            mountOnShow={false}
          >
            <Grid.Column
              stretched
              style={{
                padding: '1vh 0 0 0',
                margin: 'auto',
              }}
              width={5}
              verticalAlign="middle"
            >
              <Container style={{ margin: '0' }}>
                <p
                  className="YouTubeLiteGreyText"
                  style={{ margin: '-1vh 0 1vh 0' }}
                >
                  YouTube Lite
                </p>
                <p>A single page web application that mimics YouTube.</p>
                <ul
                  className="burgerLanguages"
                  sytle={{ display: 'inline-block' }}
                >
                  <li className="subBurger" style={{ display: 'inline-block' }}>
                    <ul>
                      <li>JavaScript</li>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                    </ul>
                  </li>

                  <li className="subBurger" style={{ display: 'inline-block' }}>
                    <ul>
                      <li>Redux</li>
                      <li>Hooks</li>
                      <li>Firebase</li>
                      <li style={{ listStyle: 'none' }}>
                        <br />
                      </li>
                    </ul>
                  </li>

                  <li className="subBurger" style={{ display: 'inline-block' }}>
                    <ul>
                      <li>Modern React</li>
                      <li>YouTube API</li>
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
