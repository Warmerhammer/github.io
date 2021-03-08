import React, { useEffect, useState } from 'react';
import _ from 'lodash';
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

import DynamicModule from '../DynamicModule/index';
import Project1 from './project1';
import Project2 from './project2';

import './projects.css';

import BurgerGif from '../../Styles/BurgerProjectGif.gif';

function Projects(props) {
  const [active, setActive] = useState(false);
  const [postIndex, setPostIndex] = useState(0);
  const [postList, setPostList] = useState([]);

  
  const handleProjectTransition = () => {
    // console.log(this.state.postList);

    var posti = postIndex;
    var postLi = postList;

    console.log(postLi);

    //finds the index of the most recent postList.route
    var index = _.findIndex(projects, function (o) {
      return o === projects[posti];
    });

    var newIndex = index;

    if (postLi.length <= projects.length && projects[newIndex]) {
      const newList = postLi.concat([projects[newIndex]]);
      setPostIndex(index + 1);
      setPostList(newList);
    }
  };

  useEffect(() => {
    handleProjectTransition();
  }, []);

  const projects = [
    {
      path: './project1',
      key: '01',
      name: 'Project1',
      Component: <Project1 />,
      Import: () => import('./project1'),
    },
    {
      path:'./project2',
      key: '02',
      name: 'Project2',
      Component: <Project2 />,
      Import: () => import('./project2'),
    }
  ];


  const handleHide = () => {
    setActive(false);
  };

  const handleShow = () => {
    console.log(props);
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
      <p className="projectsSpecialColor">03. Projects</p>
      <br />
      <p className="projectsgreytext">Burger Builder App</p>
      <Segment raised>
        <Grid columns={2} style={{ height: '20vh', margin: '0 0 0 0' }}>
          <Grid.Column
            style={{ padding: '.3vh 0 0 0', margin: '0 2em 0 0' }}
            width={5}
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
            />
          </Grid.Column>
          <Grid.Column
            fluid
            stretched
            style={{ padding: '1vh 0 0 0', width: '30vw' }}
          >
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
                    <li style={{ listStyle: 'none' }}>
                      <br />
                    </li>
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
                    <li style={{ listStyle: 'none' }}>
                      <br />
                    </li>
                    <li style={{ listStyle: 'none' }}>
                      <br />
                    </li>
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
      {postList.map((project, index) => {
        return (
          <DynamicModule
            key={index}
            placeholder={project.Component}
            component={project.Import}
            transition={() => handleProjectTransition()}
          />
        );
      })}
    </Container>
  );
}

export default Projects;
