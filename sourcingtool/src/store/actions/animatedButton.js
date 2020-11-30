import { BUTTON_GENERATE, BUTTON_DELETE, BUTTON_CLICK } from './actionTypes';

export const generateButton = (title, index) => {
  return {
    type: BUTTON_GENERATE,
    payload: {
      title,
      index,
    },
  };
};

export const deleteButton = id => {
  return {
    type: BUTTON_DELETE,
    id,
  };
};

export const buttonClick = (title, index) => {
  return {
    type: BUTTON_CLICK,
    payload: {
      title,
      index
    },
  };
};
