import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  currentSegmentIndex: 0,
  savedSegments: [],
};

const onSegmentGenerate = (state, action) => {
  let firstBlankIndex;
  let newState = { ...state };
  for (let i = 0; i <= newState.savedSegments.length; i++) {
   firstBlankIndex = i;
   break;
  }
  return {
    ...state,
    currentSegmentIndex: firstBlankIndex,
  };
};

// const onSegmentDelete = (state, action) => {
//   console.log(action.id);
//   btnArray = _.filter(btnArray, (null, !action.id));
//   console.log(btnArray);

//   return { ...state, buttons: btnArray };
// };

// const onSegmentClick = (state, action) => {
//   console.log(state, action);

//   if (action.payload.title === "Save") {
//     return {...state, }
//   }
//   return state;
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEGMENT_GENERATE:
      return onSegmentGenerate(state, action);
    // case actionTypes.SEGMENT_CLICK:
    //   return onSegmentClick(state, action);
    // case actionTypes.SEGMENT_DELETE:
    //   return onSegmentDelete(state, action);
    default:
      return state;
  }
};

export default reducer;
