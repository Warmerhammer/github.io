import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  currentSegmentIndex: 0,
  savedSegments: [],
};

const onSegmentGenerate = (state, action) => {
  let newState = { ...state };
  // console.log(newState);

  let currentIndexes = _.chain(newState)
    .get('savedSegments')
    .map('index')
    .value();

  let firstBlankIndex = () => {
    for (let i = 0; i <= currentIndexes.length; i++) {
      if (i !== currentIndexes[i]) {
        return i;
      }
    }
  };

  // console.log(firstBlankIndex());

  return {
    ...state,
    currentSegmentIndex: firstBlankIndex(),
  };
};

const onSegmentInit = (state, action) => {
  let newArray = _.zipWith(
    _.keys(action.payload),
    _.values(action.payload),
    (a, b) => {
      let key = {'key': a}
     return _.merge(key,b)
    }
  );

  return _.set(state, 'savedSegments', newArray);
};

// const onSegmentDelete = (state, action) => {
//   console.log(action.id);
//   btnArray = _.filter(btnArray, (null, !action.id));
//   console.log(btnArray);

//   return { ...state, buttons: btnArray };
// };

const onSegmentSave = (state, action) => {
  let newArray = _.values(action.payload);
  return _.set(state, 'savedSegments', newArray);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEGMENT_GENERATE:
      return onSegmentGenerate(state, action);
    case actionTypes.SEGMENT_SAVE:
      return onSegmentSave(state, action);
    case actionTypes.SEGMENT_INIT:
      return onSegmentInit(state, action);
    // case actionTypes.SEGMENT_DELETE:
    //   return onSegmentDelete(state, action);
    default:
      return state;
  }
};

export default reducer;
