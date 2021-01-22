import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

// import axios from '../../apis/firebase';

const initialState = {
  iconName: {
    Search: 'search',
    Delete: 'delete',
    Save: 'save',
    Edit: 'edit'
  },
  buttons: [],
};

let btnArray = [];

const onButtonGenerate = (state, action) => {
  const newButtonObject = [action.payload.title];
  btnArray = _.unionWith(btnArray, newButtonObject);

  return {
    ...state,
    buttons: { [action.payload.index]: btnArray },
  };
};

const onButtonDelete = (state, action) => {
  console.log(action.id);
  btnArray = _.filter(btnArray, (null, !action.id));
  console.log(btnArray);

  return { ...state, buttons: btnArray };
};

// const onButtonClick = (state, action) => {
//   console.log(action.payload.title);

//   if (action.payload.title === 'Save') {
//     console.log(action);
//     return axios
//       .post('/savedsegment.json', {
//         index: action.payload.index,
//         title: action.payload.title,
//         buttons: 
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   return state;
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.BUTTON_GENERATE:
      return onButtonGenerate(state, action);
    // case actionTypes.BUTTON_CLICK:
    //   return onButtonClick(state, action);
    case actionTypes.BUTTON_DELETE:
      return onButtonDelete(state, action);
    default:
      return state;
  }
};

export default reducer;
