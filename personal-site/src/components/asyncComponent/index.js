import React from 'react';
import { Spring } from 'react-spring/renderprops';
//import { delay } from '../../utils';

export default class AsyncComponent extends React.Component {
  state = { show: false };

  timer = null;

  componentDidMount() {
    this.props.onInitialized();
    this.timer = setInterval(this.toggle, 2000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  toggle = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return(
      <div className='tileContainer' style={this.props.style}>
        <h1>
          Component Loaded
        </h1>
      </div>
    )
  }
}
