import React, { Component, lazy, Suspense, createRef } from 'react';
import {
  Container,
  Ref,
  Grid,
  Sticky,
  Table,
  Segment,
  Transition,
  Visibility,
} from 'semantic-ui-react';

import Placeholder from '../../Styles/Placeholder';
import './dynamicModule.css';

export default class DynamicModule extends Component {
  state = {
    Component: null,
    loaded: false,
    initializing: false,
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
    once: true,
    firstComponent: true,
  };

  contextRef = createRef();

  handleUpdate = (e, { calculations }) => this.setState({ calculations });

  handleBottomVisible = () => {
    // console.log(this.state.firstComponent);
    if (this.state.firstComponent) {
      this.setState({
        loaded: true,
        firstComponent: false,
      });

      setTimeout(() => {
        this.props.transition();
      }, 1500);
    } else if (this.state.calculations.fits) {
      this.setState({
        loaded: true,
      });
    }
  };

  handleTransition = () => {
    this.props.transition();
  };

  componentDidMount() {
    this.setState({
      Component: lazy(this.props.component),
      initializing: true,
    });

    // setTimeout(() => {
    //   this.onInitialized();
    // }, 1000);
  }

  render() {
    const { placeholder } = this.props;
    const { loaded, Component, calculations } = this.state;

    return (
      <Ref innerRef={this.contextRef}>
        {/* <Grid columns={2} style={{ margin: '0px' }}>
          <Grid.Column> */}
        <Visibility
          continuous={false}
          once
          onUpdate={this.handleUpdate}
          style={{ padding: '0 0 0 0' }}
          onBottomVisible={() => this.handleTransition()}
        >
          <Suspense fallback={placeholder}>
            {loaded ? (
              <Transition
                visible={true}
                animation="fade"
                duration={1500}
                mountOnShow={false}
                unmountOnHide={true}
                transitionOnMount={true}
              >
                <Container className="dynamicModule">
                  <Component
                    style={{
                      position: 'absolute',
                      height: '100%',
                    }}
                    project={Boolean}
                  />
                </Container>
              </Transition>
            ) : (
              <Visibility
                once
                fireOnMount={true}
                onBottomVisible={() => this.handleBottomVisible()}
                offset={[75, 75]}
              >
                <Transition
                  visible={true}
                  animation="fade"
                  duration={1500}
                  mountOnShow={false}
                  unmountOnHide={true}
                  transitionOnMount={true}
                >
                  <Placeholder />
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
