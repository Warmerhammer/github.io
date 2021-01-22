import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: return updateObject(state, {id: new Date(), payload: action.result * 2});
    case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    default: return state;
  }
};

export default reducer;
