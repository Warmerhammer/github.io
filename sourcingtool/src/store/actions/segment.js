import { SEGMENT_GENERATE, SEGMENT_SAVE, SEGMENT_DELETE } from './actionTypes';

export const segmentGenerate = (segmentId) => {
  return {
    type: SEGMENT_GENERATE,
    payload: {
      segmentId,
    },
  };
};

export const segmentSave = (segmentId) => {
  return {
    type: SEGMENT_SAVE,
    payload: {
      segmentId,
    },
  };
};

export const segmentDelete = (segmentId) => {
  return {
    type: SEGMENT_DELETE,
    payload: {
      segmentId,
    },
  };
};
