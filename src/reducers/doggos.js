import {ADD_DOGGO, DEL_ALL_DOGGOS, DEL_DOGGO, UNDO_DOGGOS} from '../action-types';

const intialState = {
  likedDoggos: []
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
    case DEL_DOGGO: {
      const {payload: {doggoUrl}} = action;

      console.log(1);

      const {likedDoggos} = state;

      return {likedDoggos: likedDoggos.filter(doggo => doggo !== doggoUrl)}
    }
    case DEL_ALL_DOGGOS: {
      const {likedDoggos} = state;

      return {likedDoggos: []}
    }
    case UNDO_DOGGOS: {
      console.log(1);
    }

    default:
      return state
  }
};

export default doggos;
