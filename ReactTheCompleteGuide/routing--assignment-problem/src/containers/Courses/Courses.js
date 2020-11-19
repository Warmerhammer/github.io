import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: 'Angular - The Complete Guide' },
      { id: 2, title: 'Vue - The Complete Guide' },
      { id: 3, title: 'PWA - The Complete Guide' },
    ],
    title: '',
  };

  courseSelectHandler = (id, title) => {
    this.props.history.push({pathname: '/courses/' + id, search: title=title});
    console.log(this.props);
  };

  render() {
    let courses = this.state.courses.map(course => {
      return (
        <article
          className="Course"
          onClick={() => this.courseSelectHandler(course.id, course.title)}
          key={course.id}
        >
          {course.title}
        </article>
      );
    });

    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">{courses}</section>
        <Route path={this.props.match.url + '/:id'} search={this.state.title} exact component={Course} />
      </div>
    );
  }
}

export default Courses;
