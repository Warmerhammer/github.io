import { combineReducers } from 'redux';

export const count = () => {
  return (count = 0, action) => {
    if (action.type === 'increment') {
      return count + 1;
    } else if (action.type === 'decrement') {
      return count - 1;
    } else {
      return count;
    }
  };
};

export default combineReducers({
  count,
});
