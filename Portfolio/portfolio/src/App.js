import React, { createRef } from 'react';
import _ from 'lodash';
import {
  BrowserRouter as Switch,
  Route,
  Router,
  NavLink,
} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Container, Menu, Button, Ref } from 'semantic-ui-react';
import { createBrowserHistory } from 'history';
import DynamicModule from './components/DynamicModule';


import Home from './components/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects';
import VerticalMenu from './Navigation/VerticalMenu';

import './App.css';

const history = createBrowserHistory();

const routes = [
  {
    path: '/',
    key: '01',
    name: 'Home',
    Component: <Home />,
    Import: () => import('./components/Home'),
  },
  {
    path: '/AboutMe',
    key: '02',
    name: 'AboutMe',
    Component: <AboutMe />,
    Import: () => import('./components/AboutMe/AboutMe'),
  },
  {
    path: '/Projects',
    key: '03',
    name: 'Projects',
    Component: <Projects />,
    Import: () => import('./components/Projects'),
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItemPath: '/',
      buttonColor: 'blue',
      buttonBasic: true,
      postList: [routes[0]],
      posti: 0,
    };

    this.myDivToFocus = React.createRef();
  }

  dynamicModuleRef = createRef();

  handleTransition = () => {
    // console.log(this.state.postList);

    var postIndex = this.state.posti;
    var postLi = this.state.postList;

    //finds the index of the most recent postList.route
    var index = _.findIndex(routes, function (o) {
      return o === postLi[postIndex];
    });
    var newIndex = index + 1;

    if (this.state.postList.length <= routes.length && routes[newIndex]) {
      const newList = this.state.postList.concat([routes[newIndex]]);
      this.setState({
        posti: newIndex,
        postList: newList,
      });
    }
  };


  handleMouseDown = () => {
    this.setState({ buttonColor: 'red' });
    this.setState({ buttonBasic: false });
  };

  handleMouseUp = () => {
    this.setState({ buttonColor: 'red' });
    this.setState({ buttonBasic: true });
  };

  menuClick = route => {
    var index = _.findIndex(routes, function (o) {
      return o.key === route.key;
    });

    let newList = this.state.postList;

    if (!newList[index]) {
      //start at postList index 1 and concat up to new index
      for (let i = 1; i <= index; i++) {
        if (!newList[i]) {
          newList.push(routes[i]);
        }
      }

      this.setState({
        postList: newList,
        posti: index,
      });

      setTimeout(() => {
        Scroll.scroller.scrollTo(route.name, {
          duration: 3000,
          delay: 500,
          smooth: 'easeInOutQuart',
        });
      }, 200)
      }
      
  };

  render() {
    return (
      <Router history={history}>
        <br />
        <Container fluid className="header">
          <Button
            className="AppButton"
            onMouseEnter={() => this.setState({ buttonColor: 'grey' })}
            onMouseLeave={() => this.setState({ buttonColor: 'blue' })}
            onMouseDown={() => this.handleMouseDown()}
            onMouseUp={() => this.handleMouseUp()}
            basic={this.state.buttonBasic}
            floated="right"
            color={this.state.buttonColor}
          >
            {'Resum\xE9'}
          </Button>
          <Menu text color="red" borderless floated="right">
            {routes.map((route, index) => (
              <Scroll.Link
                key={index}
                to={route.name}
                activeClass="active"
                smooth
                onSetActive={() => console.log('setactive')}
                spy={true}
                onClick={() => this.menuClick(route)}
                duration={1000}
              >
                <Menu.Item key={index} link={true} to={route.name}>
                  {route.key}
                  {route.name}
                </Menu.Item>
              </Scroll.Link>
            ))}
          </Menu>
        </Container>
        <div style={{ padding: '2vh 0 10vh 0' }}>
          {this.state.postList.map((post, index) => {
            return (
              <Ref key={index} innerRef={this.dynamicModuleRef}>
                <Scroll.Element name={post.name}>
                  <DynamicModule
                    key={index}
                    placeholder={post.Component}
                    component={post.Import}
                    transition={() => this.handleTransition()}
                    style={{ width: '100%' }}
                  />
                </Scroll.Element>
              </Ref>
            );
          })}
          <VerticalMenu
            routes={routes}
            vNavLink={NavLink}
            vActiveItem={this.state.activeItem}
          />
          {/* <div style={{ height: '30vh' }}>
          <Placeholder style={{ margin: '15vh 10vw', height: '30vh' }} fluid>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </div> */}
        </div>
      </Router>
    );
  }
}
