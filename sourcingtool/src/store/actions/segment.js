import {
  SEGMENT_GENERATE,
  SEGMENT_INIT,
} from './actionTypes';
import axios from '../../apis/firebase';
import history from '../../history';

export const savedSegmentsInit = () => async dispatch => {
  const response = await axios.get('/saved.json');

  dispatch({ type: SEGMENT_INIT, payload: response.data });
};

export const segmentGenerate = segmentId => {
  return {
    type: SEGMENT_GENERATE,
    payload: {
      segmentId,
    },
  };
};

export const segmentSave = (
  index,
  btnArray,
  btnClicked,
  content
) => async dispatch => {
  await axios
    .post('/saved.json', { index, btnArray, btnClicked, content })
    .catch(error => console.log(error));

  dispatch(savedSegmentsInit());
};

export const segmentDelete = (segmentKey, pathName) => async dispatch => {
  console.log('Delete activated', segmentKey, pathName);
  axios.delete(`/saved/${segmentKey}.json`)

  dispatch(savedSegmentsInit());
  history.push(`${pathName}`)
};
