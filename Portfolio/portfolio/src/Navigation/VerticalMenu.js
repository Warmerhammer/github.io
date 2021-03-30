import React, { Component, createRef } from 'react';
import { Menu, Sticky, Ref, Transition, Container } from 'semantic-ui-react';
import _ from 'lodash';

import './VerticalMenu.css';

export default class VerticalMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: this.props.vActiveItem,
      scrolling: false,
      trailingDebounce: _.debounce(
        () => this.setState({ scrolling: false, opacity: 0 }),
        1000,
        {
          leading: false,
          trailing: true,
        }
      ),
      show: false,
      opacity: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.handelScroll();
      this.notScrolling();
      this.setState({
        scrolling: true,
        opacity: 1,
      });
    }, 1500);

    setTimeout(() => {
      this.setState({ scrolling: false, opacity: 0 });
    }, 3000);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.state.trailingDebounce);
    document.removeEventListener(
      'scroll',
      _.debounce(() => this.setState({ scrolling: true, opacity: 1 }), 100, {
        leading: true,
        trailing: false,
      })
    );
    document.removeEventListener(
      'scroll',
      this.state.trailingDebounce.cancel()
    );
  }

  handelScroll = () => {
    document.addEventListener(
      'scroll',
      _.debounce(
        () => {
          this.setState({ scrolling: true, opacity: 1 });
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
    this.setState({ scrolling: true, show: true, opacity: 1 });
  };

  handleMouseLeave = () => {
    this.setState({ show: false });

    setTimeout(() => {
      this.setState({
        scrolling: false,
        opacity: 0,
      });
    }, 1000);
  };

  handleClick = route => {
    this.props.aSetActiveItem(route);
    this.props.aMenuClick(route);
  };

  contextRef = createRef();

  render() {
    return (
      <Ref innerRef={this.contextRef}>
        <Container
          onMouseOver={() => this.handleMouseOver()}
          onMouseLeave={() => this.handleMouseLeave()}
          style={{ opacity: `${this.state.opacity}` }}
        >
            <Sticky active pushing context={this.contextRef}>
              <Menu
                className="VerticalMenu"
                size="large"
                vertical
                text
                color={'black'}
                borderless
                fixed="right"
              >
                {this.props.routes.map((route, index) => (
                  <Transition
                    visible={
                      route.name !== this.props.aNotActiveItem ||
                      this.state.show === true
                    }
                    animation="fade"
                    duration={600}
                    key={index}
                  >
                   
                      <Menu.Item
                        name={route.name}
                        key={index}
                        to={route.name}
                        active={route.name !== this.props.vActiveItem}
                        onClick={() => this.handleClick(route)}
                        position="right"
                        link={false}
                        style={{
                          textAlign: 'center',
                          opacity: `${this.state.opacity}`,
                        }}
                        duration={1000}
                      >
                        {route.name}
                      </Menu.Item>
                    
                  </Transition>
                ))}
              </Menu>
            </Sticky>
        </Container>
      </Ref>
    );
  }
}
