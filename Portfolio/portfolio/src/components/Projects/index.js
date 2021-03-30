import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import {
  Container,
} from 'semantic-ui-react';

import DynamicModule from '../DynamicModule/index';
import Project0 from './project0';
import Project1 from './project1';
import Project2 from './project2';

import './projects.css';


function Projects(props) {
  const [postIndex, setPostIndex] = useState(0);
  const [postList, setPostList] = useState([]);

  const handleProjectTransition = () => {
    // console.log(this.state.postList);

    var posti = postIndex;
    var postLi = postList;

    // console.log(postLi);

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
      path: './project0',
      key: '00',
      name: 'Project0',
      Component: <Project0 />,
      Import: () => import('./project0'),
    },
    {
      path: './project1',
      key: '01',
      name: 'Project1',
      Component: <Project1 />,
      Import: () => import('./project1'),
    },
    {
      path: './project2',
      key: '02',
      name: 'Project2',
      Component: <Project2 />,
      Import: () => import('./project2'),
    },
  ];

  return (
    <Container
      className="projectsContainer"
      style={{ margin: '0 0 0 0', padding: '0 0 0 0' }}
    >
      {postList.map((project, index) => {
        return (
          <DynamicModule
            key={index}
            placeholder={project.Component}
            component={project.Import}
            transition={() => handleProjectTransition()}
            pComponent={project.name}
          />
        );
      })}
    </Container>
  );
}

export default Projects;
