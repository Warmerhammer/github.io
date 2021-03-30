import React, { createRef } from 'react';
import _ from 'lodash';
import {
  Router,
  NavLink,
} from 'react-router-dom';
import * as Scroll from 'react-scroll';
import {
  Container,
  Menu,
  Button,
  Ref,
  Transition,
  Visibility,
  Image,
  Icon,
  Segment,
} from 'semantic-ui-react';
import { createBrowserHistory } from 'history';
import DynamicModule from './components/DynamicModule';
import { pushHeartBeat, getHeartBeat } from './axios-connect.js';

import Home from './components/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Project0 from './components/Projects/project0';
import Project1 from './components/Projects/project1';
import Project2 from './components/Projects/project2';
import ContactForm from './components/Form/ContactForm';
import VerticalMenu from './Navigation/VerticalMenu';
import IconMenu from './components/iconMenu/IconMenu';
import SideBar from './components/SideBar/SideBar';

import RichardLogo from './Styles/BlackHeart.png';
import PaperHeart from './Styles/PaperHeart.jpeg';

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
    path: './components/Projects/project0',
    key: '03',
    name: 'Projects',
    Component: <Project0 />,
    Import: () => import('./components/Projects/project0'),
  },
  {
    path: './components/Form/ContactForm',
    key: '04',
    name: 'Contact',
    Component: <ContactForm />,
    Import: () => import('./components/Form/ContactForm'),
  },
];

const projects = [
  {
    path: './components/Projects/project1',
    key: '05',
    name: 'Project1',
    Component: <Project1 />,
    Import: () => import('./components/Projects/project1'),
  },
  {
    path: './components/Projects/project2',
    key: '06',
    name: 'Project2',
    Component: <Project2 />,
    Import: () => import('./components/Projects/project2'),
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItemPath: '/',
      buttonColor: 'red',
      buttonBasic: true,
      postList: [routes[0]],
      posti: 0,
      aLoaded: false,
      firstComponent: true,
      slidingIndex: 0,
      aProjects: [],
      show: false,
      activeItem: routes[0].name,
      nextActiveItem: routes[1].name,
      cancelTransition: false,
      aFirstUp: true,
      aProjectVisible: null,
      notActiveItem: routes[3].name,
      pulsing: true,
      heartBeat: 0,
      heartBeatVisible: false,
      iconMenuVisibile: false,
      iconActive: true,
    };

    this.myDivToFocus = React.createRef();
  }

  dynamicModuleRef = createRef();
  contextRef = createRef();

  handleUpdate = (e, { calculations }) => {
    if (
      calculations.direction === 'down' &&
      calculations.bottomVisible === true
    ) {
      this.setState({
        show: true,
        iconMenuVisibile: false,
      });
    } else if (
      calculations.direction === 'down' &&
      calculations.topPassed === true
    ) {
      this.setState({
        show: false,
        iconMenuVisibile: true,
      });
    } else if (
      calculations.direction === 'up' &&
      calculations.bottomVisible === true
    ) {
      this.setState({
        show: true,
        iconMenuVisibile: false,
      });
    } else if (
      calculations.direction === 'up' &&
      calculations.bottomVisible === false
    ) {
      this.setState({
        show: false,
        iconMenuVisibile: true,
      });
    }
  };

  handleTransition = aComp => {
    var localcomponent;

    var routesIndex =
      _.findIndex(routes, function (o) {
        return o.name === aComp;
      }) + 1;

    var projectsIndex =
      _.findIndex(projects, function (o) {
        return o.name === aComp;
      }) + 1;

    if (
      routes[routesIndex] === routes[1] ||
      routes[routesIndex] === routes[2]
    ) {
      localcomponent = routes[routesIndex];
    } else if (routes[routesIndex] === routes[3]) {
      localcomponent = projects[0];
    } else if (projects[projectsIndex] === projects[1]) {
      localcomponent = projects[projectsIndex];
    } else if (projects[projectsIndex] === projects[2]) {
      localcomponent = routes[3];
    } else if (aComp === 'switch') {
      this.setState({
        aFirstUp: !this.state.aFirstUp,
      });
    }

    var newList = this.state.postList;

    if (!this.state.cancelTransition) {
      newList = this.state.postList.concat(localcomponent);
    }

    if (this.state.firstComponent) {
      this.setState({
        firstComponent: false,
        postList: newList,
      });
    } else if (localcomponent) {
      this.setState({
        postList: newList,
        firstComponent: false,
      });
    } else if (this.state.cancelTransition) {
      this.setState({
        cancelTransition: false,
      });
    }

    var aProjectsIndex = _.findIndex(this.state.aProjects, function (o) {
      return o === aComp;
    });

    if (aProjectsIndex === -1) {
      var newAProjectsList = this.state.aProjects.concat(aComp);
      this.setState({
        aProjects: newAProjectsList,
      });
    }
  };

  setActiveItem = aComp => {
    var newList = [
      routes[0],
      routes[1],
      routes[2],
      projects[0],
      projects[1],
      routes[3],
    ];

    var localindex = _.findIndex(newList, function (o) {
      return o.name === aComp;
    });

    var nActiveItem = newList[localindex + 1];
    var lNotActiveItem = this.state.notActiveItem;

    if (this.state.activeItem === 'Home') {
      lNotActiveItem = routes[3].name;
    } else if (this.state.activeItem === 'Contact') {
      lNotActiveItem = routes[0].name;
    }

    if (
      newList[localindex] === routes[0] ||
      newList[localindex] === routes[1]
    ) {
      this.setState({
        activeItem: aComp,
        nextActiveItem: nActiveItem.name,
        notActiveItem: lNotActiveItem,
      });
    } else if (newList[localindex] === routes[2]) {
      this.setState({
        activeItem: aComp,
        nextActiveItem: routes[3].name,
        notActiveItem: lNotActiveItem,
      });
    } else if (newList[localindex] === routes[3]) {
      this.setState({
        activeItem: aComp,
        notActiveItem: lNotActiveItem,
      });
    }
  };

  setActiveItemReverse(aComp) {
    var localActiveItem = this.state.activeItem;

    var localindex = _.findIndex(routes, function (o) {
      return o.name === localActiveItem;
    });

    var pActiveItem = routes[localindex - 1];

    if (pActiveItem && aComp === pActiveItem.name) {
      if (pActiveItem.name === 'Home') {
        this.setState({
          activeItem: pActiveItem.name,
          notActiveItem: 'Contact',
        });
      } else {
        this.setState({
          activeItem: pActiveItem.name,
        });
      }
    }
  }

  handleMouseDown = () => {
    this.setState({ buttonColor: 'red' });
    this.setState({ buttonBasic: false });
  };

  handleMouseUp = () => {
    this.setState({ buttonColor: 'red' });
    this.setState({ buttonBasic: true });
  };

  menuClick = route => {
    var newList = [
      routes[0],
      routes[1],
      routes[2],
      projects[0],
      projects[1],
      routes[3],
    ];

    var newListIndex = _.findIndex(newList, function (o) {
      return o.key === route.key;
    });

    if (!this.state.postList[newListIndex]) {
      var pushList = [];

      //start at postList index 1 and concat up to new index
      for (let i = 1; i <= newList.length; i++) {
        var posti = _.findIndex(this.state.postList, function (o) {
          return o === newList[i];
        });

        if (posti === -1 && newList[i]) {
          pushList.push(newList[i]);
        }
      }

      var concatList = this.state.postList.concat(pushList);

      this.setState({
        postList: concatList,
        cancelTransition: true,
      });
    }

    setTimeout(() => {
      Scroll.scroller.scrollTo(route.name, {
        duration: 5000,
        delay: 0,
        smooth: true,
        offset: -240,
      });
    }, 0);
  };

  handleHeartBeat = () => {
    this.setState(prevState => ({ pulsing: !prevState.pulsing }));

    pushHeartBeat();

    async function fetchBeat() {
      let response = await getHeartBeat();

      return response;
    }

    fetchBeat().then(beat =>
      this.setState({
        heartBeat: beat,
        heartBeatVisible: true,
      })
    );
  };

  componentDidMount() {
    async function gatherBeat() {
      let response = await getHeartBeat();
      return response;
    }

    gatherBeat().then(beat =>
      this.setState({
        show: true,
        heartBeat: beat,
      })
    );
  }

  componentWillUnmount() {
    this.setState({
      aFirstComponent: true,
    });
  }

  render() {
    return (
      <Router history={history}>
        <br />
        <Ref innerRef={this.contextRef}>
          <Visibility onUpdate={this.handleUpdate}>
            <Transition
              animation="fade"
              duration={1500}
              visible={this.state.show}
              unmountOnHide={false}
              mountOnShow={false}
            >
              <Segment className="header">
                <Container
                  style={{
                    justifyContent: 'flex-start',
                    flexFlow: 'wrap',
                    flexDirection: 'column',
                    display: 'flex',
                  }}
                >
                  <Transition
                    animation="pulse"
                    duration={1500}
                    visible={this.state.pulsing}
                    unmountOnHide={false}
                    mountOnShow={false}
                    style={{
                      margin: '0',
                      padding: '0',
                    }}
                  >
                    <Image
                      className="RichardLogoImage"
                      src={RichardLogo}
                      alt={'Richard Logo'}
                      size="tiny"
                      onClick={() => this.handleHeartBeat()}
                      style={{
                        width: '15vw',
                        margin: '0',
                        padding: '0 0 0 0',
                      }}
                    />
                  </Transition>
                  <Transition
                    visible={this.state.heartBeatVisible}
                    duration={1500}
                    animation="fade"
                    onStart={() =>
                      setTimeout(() => {
                        this.setState({
                          heartBeatVisible: false,
                        });
                      }, 1000)
                    }
                    style={{
                      margin: '0 0 0 0',
                      padding: '0',
                      width: '10%',
                      display: 'flex',
                    }}
                    unmountOnHide={false}
                    mountOnShow={false}
                    // transitionOnMount={false}
                  >
                    <p
                      style={{
                        display: 'block',
                        margin: '0 0 0 6.5vw',
                        padding: '0',
                        justifySelf: 'center',
                        width: '35%',
                        color: '#1d0503',
                        // // justifySelf: 'flex-start',
                        // textAlign: 'center',
                      }}
                    >
                      {this.state.heartBeat}
                    </p>
                  </Transition>
                </Container>
                <Container className="AppMenuContainer">
                  <Button
                    className="AppButton"
                    onMouseEnter={() =>
                      this.setState({ buttonBasic: true })
                    }
                    onMouseLeave={() =>
                      this.setState({ buttonColor: 'red', buttonBasic: true })
                    }
                    onMouseDown={() => this.handleMouseDown()}
                    onMouseUp={() => this.handleMouseUp()}
                    basic={this.state.buttonBasic}
                    floated="right"
                    color={this.state.buttonColor}
                    style={{
                      justifyContent: 'flex-end',
                      justifySelf: 'flex-end',
                      display: 'flex',
                    }}
                    onClick={() =>
                      window.open(
                        'https://na123.salesforce.com/sfc/p/3t000002kK7m/a/3t000000Dpi9/1MxOfMaCUpF.10cc4Dpyutl7_RJTxhO7PMYwH6lwleA',
                        '_blank'
                      )
                    }
                  >
                    {'Resum\xE9'}
                  </Button>
                  <Menu
                    text
                    color="red"
                    borderless
                    floated="right"
                    style={{ margin: '0 0 0 .5vw' }}
                  >
                    {routes.map((route, index) => (
                      <Menu.Item
                        key={index}
                        onClick={() => this.menuClick(route)}
                        link={false}
                        to={route.name}
                      >
                        {route.key}
                        {route.name}
                      </Menu.Item>
                    ))}
                  </Menu>
                </Container>
              </Segment>
            </Transition>
          </Visibility>
        </Ref>
        <SideBar
          routes={routes}
          vNavLink={NavLink}
          dynamicModuleRef={this.dynamicModuleRef}
          aMenuClick={route => this.menuClick(route)}
          aSetActiveItem={o => this.setActiveItem(o)}
        />
        <div
          className="AppDiv"
          style={{
            padding: '0 0 0 0',
            margin: '0',
            opacity: `${this.state.show}`,
            border: 'none',
            boxShadow: 'none',
            display: 'block',
            width: '100%',
            zIndex: '500000',
          }}
        >
          {this.state.postList.map((post, index) => {
            return (
              <Ref
                key={index}
                innerRef={this.dynamicModuleRef}
                className="AppRef"
              >
                <Scroll.Element name={post.name}>
                  <DynamicModule
                    key={index}
                    placeholder={post.Component}
                    component={post.Import}
                    transition={aComp => this.handleTransition(aComp)}
                    style={{ width: '100%' }}
                    aComponent={post.name}
                    aLoaded={this.state.aLoaded}
                    aFirstComponent={this.state.firstComponent}
                    aProjects={this.state.aProjects}
                    aSetActiveItem={o => this.setActiveItem(o)}
                    aSetActiveItemReverse={o => this.setActiveItemReverse(o)}
                    aFirstUp={this.state.aFirstUp}
                    aSetProjectVisible={pComp =>
                      this.setState({
                        aProjectVisible: pComp,
                      })
                    }
                    aProjectVisible={this.state.aProjectVisible}
                    aActiveItem={this.state.activeItem}
                  />
                </Scroll.Element>
              </Ref>
            );
          })}

          <VerticalMenu
            routes={routes}
            vNavLink={NavLink}
            vActiveItem={this.state.activeItem}
            aMenuClick={route => this.menuClick(route)}
            aSetActiveItem={o => this.setActiveItem(o)}
            aNextActiveItem={this.state.nextActiveItem}
            aNotActiveItem={this.state.notActiveItem}
          />
          <IconMenu
            aActiveItem={this.state.iconActive}
            aVisible={this.state.iconMenuVisibile}
          />
          <Visibility
            once={false}
            onOnScreen={() => this.setState({ iconActive: false })}
            onOffScreen={() => this.setState({ iconActive: true })}
            style={{
              justifyContent: 'center',
              display: 'flex',
              margin: '30vh 0 0 0',
            }}
          >
            <Segment className="paperHeartSegment">
              <Button
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  display: 'inline-block',
                  margin: '0 0 0 0',
                }}
                as={Icon}
                name="linkedin"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/richardo510/',
                    '_blank'
                  )
                }
              />

              <Image
                src={PaperHeart}
                alt="Paper Heart"
                size="small"
                style={{ display: 'inline-block', margin: '0 0 0 5vw' }}
              />

              <Button
                as={Icon}
                name="github"
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  margin: '-10vh 0 0 5vw',
                  display: 'inline-block',
                  position: 'flexible',
                  zIndex: '500',
                }}
                onClick={() =>
                  window.open(
                    'https://github.com/Warmerhammer/github.io',
                    '_blank'
                  )
                }
              />

              <p className="PaperHeartThankYouText">Thank you!</p>
            </Segment>
          </Visibility>
        </div>
      </Router>
    );
  }
}
