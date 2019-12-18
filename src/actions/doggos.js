import {
  ADD_DOGGO,
  REMOVE_DOGGO,
  REMOVE_ALL_DOGGOS
} from '../action-types';

export const likeDoggo = (doggoUrl) => ({
  type: ADD_DOGGO,
  payload: {
    doggoUrl
  }
});

export const removeDoggo = (doggoUrl) => ({
  type: REMOVE_DOGGO,
  payload: {
    doggoUrl
  }
});

export const removeAllDoggos = () => ({
  type: REMOVE_ALL_DOGGOS
});
