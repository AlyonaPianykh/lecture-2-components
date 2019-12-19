import {ADD_DOGGO, DEL_ALL_DOGGOS, DEL_DOGGO} from '../action-types';

export const likeDoggo = (doggoUrl) => ({
    type: ADD_DOGGO,
    payload: {
        doggoUrl
    }
});

export const delDoggo = (doggoUrl) => ({
    type: DEL_DOGGO,
    payload: {
        doggoUrl
    }
});

export const delAllDoggo = () => ({
    type: DEL_ALL_DOGGOS,
});
