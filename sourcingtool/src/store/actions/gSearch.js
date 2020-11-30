import * as actionTypes from './actionTypes';

export const gSearchStart = (term) => {
  return {
    type: actionTypes.FETCH_GSEARCH,
    payload: term
  }
}