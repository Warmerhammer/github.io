import * as React from 'react';

export default class LocationObserver extends React.Component {
  state = {
    hasIntersected: false,
    continueObserving: false,
  };

  targetContainerRef = React.createRef();

  componentDidMount() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    this.observer = new IntersectionObserver(this.load, options);
    this.observer.observe(this.targetContainerRef.current);
  }


  load = entries => {
    if (!this.state.continueObserving && !this.state.hasIntersected) {
      const entry = entries.find(
        entry => entry.target === this.targetContainerRef.current
      );

      console.log(entry.target);
      console.log(entry.isIntersecting);
      


      if (entry && entry.isIntersecting) {
        this.setState({ hasIntersected: true });
        this.props.onIntersection && this.props.onIntersection(entries);

        this.observer.unobserve(this.targetContainerRef.current);
      }
      
    } else if (this.state.continueObserving && this.props.onIntersection) {
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
        {continueObserving ? children : this.state.hasIntersected && children}
      </div>
    );
  }
}
