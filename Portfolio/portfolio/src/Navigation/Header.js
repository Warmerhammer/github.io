import React, { Component } from 'react';
import { Menu, Button, Container } from 'semantic-ui-react';
import GreyButtonHover from '../Styles/GreyButtonHover';
import classes from './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Home',
      buttonHover: false,
      buttonColor: 'grey',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Button
          onMouseEnter={() => this.setState({ buttonColor: 'black'})}
          onMouseLeave={() => this.setState({ buttonColor: 'grey'})}
          onMouseDown={() => this.setState({buttonColor: 'red'})}
          floated="right"
          basic
          color={this.state.buttonColor}
        >
          Resume
        </Button>
        <Menu text borderless floated="right">
          <Menu.Item
            name="Home"
            pathname="/"
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          >
            <p>01.Home</p>
          </Menu.Item>
          <Menu.Item
            name="About"
            pathname="/About"
            className={classes.menu}
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          >
            <p>02.About</p>
          </Menu.Item>
          <Menu.Item
            name="Projects"
            pathname="/Projects"
            className={classes.menu}
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}
          >
            <p>03.Projects</p>
          </Menu.Item>
          <Menu.Item
            name="Contact"
            pathname="/Contact"
            className={classes.menu}
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          >
            <p>04.Contact</p>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}
