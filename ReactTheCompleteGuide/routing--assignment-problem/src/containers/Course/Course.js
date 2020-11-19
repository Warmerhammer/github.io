import React, { Component } from 'react';

class Course extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate () {
      console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.location.search}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
