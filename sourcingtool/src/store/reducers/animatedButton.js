import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  iconName: {
    Search: 'search',
    Delete: 'delete',
    Save: 'save',
  },
  buttons: [],
};

let btnArray = [];

const onButtonGenerate = (state, action) => {
  const newButtonObject = [action.payload.title];
  btnArray = _.unionWith(btnArray, newButtonObject);
  console.log(btnArray);
  
  return {
    ...state,
    buttons: { [action.payload.index]: btnArray },
  };
};

const onButtonDelete = (state, action) => {
  console.log(action.id);
  btnArray = _.filter(btnArray, (null, !action.id));
  console.log(btnArray);

  return { ...state, buttons: btnArray};
};

const onButtonClick = (state, action) => {
  console.log(state, action);

  if (action.payload.title === 'Save') {
    return onButtonGenerate(state, action);
  }
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUTTON_GENERATE:
      return onButtonGenerate(state, action);
    case actionTypes.BUTTON_CLICK:
      return onButtonClick(state, action);
    case actionTypes.BUTTON_DELETE:
      return onButtonDelete(state, action);
    default:
      return state;
  }
};

export default reducer;
