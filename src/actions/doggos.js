import { ADD_DOGGO, DELETE_DOGGO, DELETE_ALL_DOGGO } from '../action-types';

export const likeDoggo = (doggoUrl) => ({
  type: ADD_DOGGO,
  payload: {
    doggoUrl
  }
});

export const deleteDoggo = (doggoUrl) => ({
  type: DELETE_DOGGO,
  payload: {
    doggoUrl
  }
});

export const deleteAllDoggo = (doggoUrl) => ({
  type: DELETE_ALL_DOGGO,
  payload: {
    doggoUrl
  }
});