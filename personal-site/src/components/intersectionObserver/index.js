import * as React from 'react';

export default class LaocationObserver extends React.Component {
  state = {
    hasIntersected: false,
  };

  targetContainerRef = React.createRef();

  LocationObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  observer = 'any';

  componentDidMount() {
    this.observer = new IntersectionObserver(this.load, this.options)
    this.observer.observe(this.targetContainerRef.current);
  }

  componentWillUnmount() {
    this.observer.unobserve(this.targetContainerRef.current);
  }

  load = entries => {
    if (!this.props.continueObserving && !this.state.hasIntersected) {
      const entry = entries.find(
        entry => entry.target === this.targetContainerRef.current
      );

      if (entry && entry.isIntersecting) {
        this.setState({ hasIntersected: true });
        this.props.onIntersection && this.props.onIntersection(entries);
      }
      this.observer.unobserve(this.targetContainerRef.current);
    } else if (this.props.continueObserving && this.props.onIntersection) {
      this.props.onIntersection(entries);
    }
  };

  render() {
    const { children = null, continueObserving } = this.props;
    return (
      <div
        className="intersectionObserver"
        ref={this.targetContainerRef}
        style={{ ...this.props.style }}
      >
        {continueObserving ? children : this.hasIntersected && children}
      </div>
    );
  }
}
