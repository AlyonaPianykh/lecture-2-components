import { ADD_DOGGO, DEL_DOGGO, DEL_ALL_DOGGOS, UNDO_DOGGOS } from '../action-types';

export const likeDoggo = (doggoUrl) => ({
  type: ADD_DOGGO,
  payload: {
    doggoUrl
  }
});

export const deleteDoggo = (doggoUrl) => ({
  type: DEL_DOGGO,
  payload: {
    doggoUrl
  }
});

export const deleteAllDoggos = () => ({
  type: DEL_ALL_DOGGOS,
});

export const undoDoggos = () => ({
  type: UNDO_DOGGOS
});
