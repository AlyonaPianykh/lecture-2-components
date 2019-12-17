import {ADD_DOGGO, DELETE_ALL_DOGGO, DELETE_DOGGO} from '../action-types';

const intialState = {
    likedDoggos: [],
};

// this is doggos reducer
const doggos = (state = intialState, action) => {

    switch (action.type) {
        case ADD_DOGGO: {
            const {payload: {doggoUrl}} = action;

            const {likedDoggos} = state;

            // this is new state
            return {
                likedDoggos: [...likedDoggos, doggoUrl]
            };
        }
        case DELETE_DOGGO: {
            const {payload: {doggoUrl}} = action;

            const {likedDoggos} = state;


            return {
                likedDoggos: likedDoggos.filter(doggos => doggos !== doggoUrl)
            };
        }

        case DELETE_ALL_DOGGO: {
            return {
                likedDoggos: intialState.likedDoggos
            };
        }

        default:
            return state
    }
};

export default doggos;
