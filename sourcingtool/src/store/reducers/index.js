import * as gSearchReducer from './gSearch';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import animatedButton from './animatedButton';
import segment from './segment';

const rootReducer = combineReducers ({
  searchEnter: gSearchReducer,
  form: formReducer,
  buttons: animatedButton,
  segments: segment,
})

export default rootReducer;