import React, { Component } from 'react';
import { Button, Segment, Transition } from 'semantic-ui-react';

import './home.css';

export default class Home extends Component {
  state = {
    buttonBasic: false,
    buttonColor: 'red',
  };

  handleMouseDown = () => {
    this.setState({
      buttonBasic: true,
      buttonColor: 'red',
    });
  };

  handleMouseUp = () => {
    this.setState({
      buttonBasic: false,
      buttonColor: 'red',
    });
  };

  render() {
    return (
      <Transition
        visible={true}
        animation="fade"
        duration={1500}
        mountOnShow={false}
        unmountOnHide={true}
        transitionOnMount={true}
        className="scrollable"
      >
        <Segment className="HomeSegment">
          <p className="homeSpecialColor">01. Home</p> <br />
          <div className="homecontent">
            <p className="homegreytext"> Hi, my name is </p>
            <p className="bigboldtext">RICHARD O'DONNELL;</p>
            <p className="bigboldsubtext"> THANKS FOR VISITING</p>

            <p className="greytext">
              Thanks for visiting my portfolio. As a computer science
              professional I leverage engineering principles and programming
              languages to build stuff. I enjoy emersing myself in code
              and solving interesting problems. 
            </p>
            <div className="HomeButton">
              <Button
                className="HomeButton"
                onMouseDown={() => this.handleMouseDown()}
                onMouseUp={() => this.handleMouseUp()}
                basic={this.state.buttonBasic}
                color={this.state.buttonColor}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </Segment>
      </Transition>
    );
  }
}
