import React, { Component } from 'react';
import { Button, Segment, Transition, Icon } from 'semantic-ui-react';

import './home.css';

export default class Home extends Component {
  state = {
    buttonBasic: true,
    buttonColor: 'red',
    iconOpacity: 0,
  };

  handleMouseDown = () => {
    var localIconOpacity;

    if (this.state.iconOpacity === 1) {
      localIconOpacity = 0;
      this.setState({
        buttonBasic: true,
        buttonColor: 'red',
        iconOpacity: localIconOpacity,
      });
    } else if (this.state.iconOpacity === 0) {
      localIconOpacity = 1;
      this.setState({
        buttonBasic: false,
        buttonColor: 'red',
        iconOpacity: localIconOpacity,
      });
    }
  };

  render() {
    return (
      <Transition
        visible={true}
        animation="fade"
        duration={1500}
        mountOnShow={false}
        unmountOnHide={true}
        transitionOnMount={false}
        className="scrollable"
        as={Segment}
        style={{ margin: '0', padding: '0', zIndex: '5000', position: 'relative', }}
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
              languages to build stuff. I enjoy emersing myself in code and
              solving interesting problems.
            </p>
            <div
              className="HomeButtonDiv"
            >
              <Segment
                className="HomeButtonSegment"
              >
                <Button
                  className="HomeButton"
                  onMouseDown={() => this.handleMouseDown()}
                  onMouseEnter={() => this.setState({ buttonBasic: 'true' })}
                  onMouseLeave={() => this.setState({ buttonColor: 'red', buttonBasic: 'true' })}
                  basic={this.state.buttonBasic}
                  color={this.state.buttonColor}
                  style={{ zIndex: '500000000', marginLeft: '0'}}
                >
                  Get In Touch
                </Button>

                <Button
                  active={this.state.iconOpacity === 1}
                  style={{
                    opacity: `${this.state.iconOpacity}`,
                    margin: '0 0 0 1vw',
                    padding: '0',
                    backgroundColor: 'white',
                    zIndex: '500000000'
                  }}
                  onClick={() => window.open('mailto:rodonnel@gmail.com', '_blank')}
                >
                  <Icon
                    as={Icon}
                    name="mail outline"
                    color="red"
                    style={{ backgroundColor: 'white' }}
                  />
                </Button>

                <Button
                  active={this.state.iconOpacity === 1}
                  style={{
                    opacity: `${this.state.iconOpacity}`,
                    margin: '0 0 0 1vw',
                    padding: '0',
                    backgroundColor: 'white',
                    zIndex: '500000000'
                  }}
                  onClick={() => window.open('https://www.linkedin.com/in/richardo510/', '_blank')}

                >
                  <Icon
                    as={Icon}
                    name="linkedin"
                    color="red"
                    style={{ backgroundColor: 'white' }}
                  />
                </Button>
                <Button
                  active={this.state.iconOpacity === 1}
                  style={{
                    opacity: `${this.state.iconOpacity}`,
                    margin: '0 0 0 1vw',
                    padding: '0',
                    backgroundColor: 'white',
                    zIndex: '500000000'
                  }}
                  onClick={() => window.open('https://github.com/Warmerhammer/github.io', '_blank')}
                >
                  <Icon
                    as={Icon}
                    name="github"
                    color="red"
                    style={{ backgroundColor: 'white' }}
                  />
                </Button>
              </Segment>
            </div>
          </div>
        </Segment>
      </Transition>
    );
  }
}
