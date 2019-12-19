import { ADD_DOGGO } from '../action-types';
import { REMOVE_DOGGO } from "../action-types";
import { REMOVE_ALL_DOGGO } from "../action-types";

export const likeDoggo = (doggoUrl) => ({
  type: ADD_DOGGO,
  payload: {
    doggoUrl
  }
});

export const delDoggo = (doggoUrl) => ({
  type: REMOVE_DOGGO,
  payload: {
    doggoUrl
  }
});

export const delAllDoggo = () => ({
  type: REMOVE_ALL_DOGGO
});
