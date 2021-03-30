import React, { Component, createRef } from 'react';
import { Sticky, Icon, Button, Ref, Menu } from 'semantic-ui-react';
import _ from 'lodash';

export default class IconMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconOpacity: 0,
      activeItem: null,
      scrolling: false,
      show: false,
      trailingDebounce: _.debounce(
        () => this.setState({ iconOpacity: 0 }),
        1000,
        {
          leading: false,
          trailing: true,
        }
      ),
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.handleScroll();
      // this.notScrolling();
      this.setState({
        iconOpacity: 1,
      });
    }, 1500);

    setTimeout(() => {
      this.setState({ iconOpacity: 0 });
    }, 3000);
  }

  componentDidUpdate() {
    if (!this.props.aVisible && this.state.iconOpacity === 1) {
      this.setState({
        iconOpacity: 0,
      });
    } else if (
      this.props.aVisible &&
      this.state.iconOpacity === 0 &&
      this.props.aActiveItem
    ) {
      this.setState({
        iconOpacity: 1,
        activeItem: this.props.aActiveItem,
      });
    } else if (
      this.props.aActiveItem === false &&
      this.state.iconOpacity === 1
    ) {
      this.setState({
        iconOpacity: 0,
      });
    } 
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.state.trailingDebounce);
    document.removeEventListener(
      'scroll',
      _.debounce(
        () =>
          this.setState({
            iconOpacity: 0,
          }),
        100,
        {
          leading: true,
          trailing: false,
        }
      )
    );
    document.removeEventListener(
      'scroll',
      this.state.trailingDebounce.cancel()
    );
  }

  handleScroll = () => {
    document.addEventListener(
      'scroll',
      _.debounce(
        () => {
          this.setState({
            iconOpacity: 1,
          });
        },
        100,
        {
          leading: true,
          trailing: false,
        }
      )
    );
  };

  notScrolling() {
    document.addEventListener('scroll', this.state.trailingDebounce);
  }

  handleMouseOver = () => {
    this.state.trailingDebounce.cancel();
    this.setState({ iconOpacity: 1 });
  };

  handleMouseLeave = () => {
    this.setState({ show: false });

    setTimeout(() => {
      this.setState({
        iconOpacity: 0,
      });
    }, 1000);
  };

  contextRef = createRef();

  render() {
    return (
      <Ref innerRef={this.contextRef}>
        <Sticky
          active
          pushing
          context={this.contextRef}
          style={{
            margin: '0',
            padding: '0 0 0 0',
            opacity: `${this.state.iconOpacity}`,
          }}
        >
          <Menu
            vertical
            text
            borderless
            color={'black'}
            fixed="left"
            attached="bottom"
            onMouseOver={() => this.handleMouseOver()}
            onMouseLeave={() => this.handleMouseLeave()}
            style={{
              width: '2vw',
              padding: '40vh 0 10vh 4vh',
              margin: '45vh 0 -40vh 7.5vw',
              border: 'none',
              opacity: `${this.state.iconOpacity}`,
              bottom: '15vh',
            }}
          >
            <Button
              style={{
                margin: '0 0 2vh 0',
                padding: '0',
                backgroundColor: 'white',
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
              style={{
                margin: '0 0 2vh 0',
                padding: '0',
                backgroundColor: 'white',
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
              style={{
                margin: '0 0 0 0',
                padding: '0',
                backgroundColor: 'white',
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
          </Menu>
        </Sticky>
      </Ref>
    );
  }
}
