const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.payload.name,
        age: action.payload.age,
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case 'DELETE':
      return {
        persons: state.persons.filter(person => person.id !== action.ElId),
      };
    default:
      return state;
  }
};

export default reducer;