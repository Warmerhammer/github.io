import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPersons} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePersons(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToState = dispatch => {
    return{
        onAddPersons: (name, age) => dispatch({type: 'ADD', payload: {name: name, age: age}}),
        onDeletePersons: (id) => dispatch({type: 'DELETE', ElId: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Persons);
