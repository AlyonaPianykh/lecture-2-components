import { ADD_DOGGO } from '../action-types';

export const likeDoggo = (doggoUrl) => ({
  type: ADD_DOGGO,
  payload: {
    doggoUrl
  }
});