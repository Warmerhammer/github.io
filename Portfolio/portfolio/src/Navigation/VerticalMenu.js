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
        () => this.setState({ scrolling: false }),
        1000,
        {
          leading: false,
          trailing: true,
        }
      ),
    };
  }

  componentDidMount() {
    this.handelScroll();
    this.notScrolling();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.state.trailingDebounce);
    document.removeEventListener(
      'scroll',
      _.debounce(() => this.setState({ scrolling: true }), 100, {
        leading: true,
        trailing: false,
      })
    );
    document.removeEventListener('scroll', this.state.trailingDebounce.cancel())

  }

  handelScroll = () => {
    document.addEventListener(
      'scroll',
      _.debounce(() => this.setState({ scrolling: true }), 100, {
        leading: true,
        trailing: false,
      })
    );
  };

  notScrolling() {
    document.addEventListener('scroll', this.state.trailingDebounce);
  }

  handleMouseOver = () => {
    this.state.trailingDebounce.cancel();
    this.setState({ scrolling: true });
  };

  handleMouseLeave = () => {
    this.setState({ scrolling: false });
  };

  contextRef = createRef();

  render() {
    return (
      <Ref innerRef={this.contextRef}>
        <Container
          onMouseEnter={() => this.handleMouseOver()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <Transition
            visible={this.state.scrolling}
            animation="fade"
            duration={1000}
            mountOnShow={false}
            transitionOnMount={true}
            unmountOnHide={false}
          >
            <Sticky active pushing context={this.contextRef}>
              <Menu
                className="VerticalMenu"
                size="large"
                vertical
                text
                color="red"
                borderless
                fixed="bottom"
              >
                {this.props.routes.map(route => (
                  <Menu.Item
                    name={route.name}
                    key={route.path}
                    as={this.props.vNavLink}
                    to={route.path}
                    active={this.state.activeItem === `${route.name}`}
                    onClick={() =>
                      this.setState({ activeItem: `${route.name}` })
                    }
                    exact
                  >
                    {route.name}
                  </Menu.Item>
                ))}
              </Menu>
            </Sticky>
          </Transition>
        </Container>
      </Ref>
    );
  }
}
