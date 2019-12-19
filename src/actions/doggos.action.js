import {ADD_DOGGO, LOADING, REMOVE_ALL, REMOVE_DOGGO} from '../action-types';

export const likeDoggo = (doggoUrl) => {
  console.log('action ADD_DOGGO triggered');
  return {
    type: ADD_DOGGO,
    payload: {
      doggoUrl
    }
  };
};

export const removeDoggo = (doggoUrl) => ({
  type: REMOVE_DOGGO,
  payload: {
    doggoUrl
  }
});

export const removeAll = () => ({
  type: REMOVE_ALL
});

export const setLoading = (loading) => {
  return ({
    type: LOADING,
    payload: {
      loading
    }
  });
};
