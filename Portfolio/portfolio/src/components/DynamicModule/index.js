import React, { Component, lazy, Suspense, createRef } from 'react';
import _ from 'lodash';
import {
  Container,
  Ref,
  Transition,
  Visibility,
} from 'semantic-ui-react';

import './dynamicModule.css';

export default class DynamicModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: lazy(this.props.component),
      loaded: false,
      visible: false,
      calculations: {
        direction: 'none',
        height: 0,
        width: 0,
        topPassed: false,
        bottomPassed: false,
        pixelsPassed: 0,
        percentagePassed: 0,
        topVisible: false,
        bottomVisible: false,
        fits: false,
        passing: false,
        onScreen: false,
        offScreen: false,
      },
      firstComponent: true,
      firstUp: true,
      blink: true,
      dProjectVisible: this.props.aProjectVisible,
      rollCount: 0,
    };
  }
  contextRef = createRef();

  handleUpdate = (e, { calculations }) => {
    var localacomponent = this.props.aComponent || this.props.pComponent;

    var localIndex = _.findIndex(this.props.aProjects, function (o) {
      return o === localacomponent;
    });

    if (this.props.aFirstComponent) {
      this.setState({
        visible: true,
        loaded: true,
      });
      this.props.transition(localacomponent);
    }

    //"switch" through different downward movement scenarios
    if (localacomponent && !this.props.aFirstComponent) {
      if (
        calculations.direction === 'down' &&
        calculations.bottomVisible === true &&
        localIndex === -1
      ) {
        this.setState({
          visible: true,
          loaded: true,
        });
        this.props.transition(localacomponent);
      } else if (
        localIndex > -1 &&
        calculations.direction === 'down' &&
        calculations.topPassed === true
      ) {
        if (localacomponent === 'Project2' && this.state.blink === true) {
          this.setState({
            blink: false,
            visible: false,
          });
        } else {
          this.setState({
            visible: false,
          });
        }
      } else if (
        calculations.direction === 'down' &&
        localIndex > -1 &&
        calculations.bottomVisible &&
        this.state.visible === false
      ) {
        this.setState({
          visible: true,
          loaded: true,
        });
      }

      //"switch" through different upwards movement scenarios
      if (
        calculations.direction === 'up' &&
        localIndex > -1 &&
        calculations.bottomVisible === true
      ) {
        if (this.state.rollCount < 2) {
          this.setState({
            rollCount: this.state.rollCount + 1,
          });
        } else if (this.state.rollCount === 2) {
          this.setState({
            loaded: true,
            visible: true,
          });
        }

        setTimeout(() => {
          this.setState({
            rollCount: 0,
          });
        }, 500);
      } else if (
        calculations.direction === 'up' &&
        localIndex > -1 &&
        calculations.bottomVisible === false
      ) {
        this.setState({
          visible: false,
        });
      }

      // set active item
      if (
        calculations.direction === 'up' &&
        localIndex > -1 &&
        calculations.topVisible
      ) {
        this.props.aSetActiveItemReverse(localacomponent);
      } else if (
        calculations.direction === 'down' &&
        calculations.bottomVisible === true &&
        localIndex > -1
      ) {
        this.props.aSetActiveItem(localacomponent);
      }
    }
  };

  handleProjectVisible = pComp => {
    this.props.aSetProjectVisible(pComp);
  };

  componentDidMount() {
    if (this.props.aFirstComponent === true) {
      // setTimeout(() => {
      //   this.props.transition('Home');
      // }, 1500)

      this.setState({
        loaded: true,
        visible: true,
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      loaded: false,
      visible: false,
    });
  }

  render() {
    const { placeholder } = this.props;
    let { loaded, Component } = this.state;

    return (
      <Ref innerRef={this.contextRef} className="DynamicModuleRef">
        {/* <Grid columns={2} style={{ margin: '0px' }}>
          <Grid.Column> */}
        <Visibility
          className="DynamicModuleVisibility"
          fireOnMount={true}
          once
          onUpdate={this.handleUpdate}
          style={{ padding: '0' }}
          // onTopPassed={() => this.handleupdate()}
        >
          <Suspense fallback={placeholder}>
            {loaded ? (
              <Transition
                visible={this.state.visible}
                animation="fade"
                duration={1500}
                mountOnShow={false}
                unmountOnHide={false}
                transitionOnMount={true}
                onHide={() => this.setState({ loaded: false })}
              >
                <Container className="dynamicModule">
                  <Component
                    project={Boolean}
                    dHandleProjectVisible={pComp =>
                      this.handleProjectVisible(pComp)
                    }
                    dProjectVisible={this.props.aProjectVisible}
                  />
                </Container>
              </Transition>
            ) : (
              <Visibility
                once
                fireOnMount={false}
                offset={[75, 75]}
                as={Container}
                className="dynamicContentInvisibleContainer"
              >
                <Transition
                  visible={!loaded}
                  animation="fade"
                  duration={500}
                  unmountOnHide={false}
                  mountOnShow={false}

                >
                  <Container
                    style={{ opacity: 0, padding: '0', margin: '0' }}
                    className="dynamicModule"
                  >
                    <Component
                      project={Boolean}
                      // dHandleProjectVisible={pComp =>
                      //   this.handleProjectVisible(pComp)
                      // }
                    />
                  </Container>
                </Transition>
              </Visibility>
            )}
          </Suspense>
        </Visibility>
        {/* </Grid.Column> */}

        {/* <Grid.Column width={'4'}>
            <Sticky context={this.contextRef}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Calculation</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>direction</Table.Cell>
                    <Table.Cell>{calculations.direction}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>pixelsPassed</Table.Cell>
                    <Table.Cell>
                      {calculations.pixelsPassed.toFixed()}px
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>percentagePassed</Table.Cell>
                    <Table.Cell>
                      {(calculations.percentagePassed * 100).toFixed()}%
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>fits</Table.Cell>
                    <Table.Cell>{calculations.fits.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>width</Table.Cell>
                    <Table.Cell>{calculations.width.toFixed()}px</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>height</Table.Cell>
                    <Table.Cell>{calculations.height.toFixed()}px</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>onScreen</Table.Cell>
                    <Table.Cell>{calculations.onScreen.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>offScreen</Table.Cell>
                    <Table.Cell>{calculations.offScreen.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>passing</Table.Cell>
                    <Table.Cell>{calculations.passing.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>topVisible</Table.Cell>
                    <Table.Cell>
                      {calculations.topVisible.toString()}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>bottomVisible</Table.Cell>
                    <Table.Cell>
                      {calculations.bottomVisible.toString()}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>topPassed</Table.Cell>
                    <Table.Cell>{calculations.topPassed.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>bottomPassed</Table.Cell>
                    <Table.Cell>
                      {calculations.bottomPassed.toString()}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Sticky>
          </Grid.Column>
        </Grid> */}
      </Ref>
    );
  }
}
