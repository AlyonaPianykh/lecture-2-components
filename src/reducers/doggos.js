import {ADD_DOGGO, REMOVE_ALL_DOGGO, REMOVE_DOGGO} from '../action-types';


const intialState = {
  likedDoggos: []
};

// this is doggos reducer
const doggos = (state = intialState, action) => {

  switch (action.type) {
    case ADD_DOGGO: {
      const { payload: { doggoUrl } } = action;

      const { likedDoggos } = state;

      // this is new state
      return {
        likedDoggos: [...likedDoggos, doggoUrl]
      };
    }
    case REMOVE_DOGGO: {
      const { payload: { doggoUrl } } = action;

      const { likedDoggos } = state;

      // this is new state
      return {
        likedDoggos: likedDoggos.filter(dogs => dogs !== doggoUrl)
      };
    }
    case REMOVE_ALL_DOGGO: {

      // this is new state
      return {
        likedDoggos: []
      };
    }
      // todo: add remove doggo functionality
    default:
      return state
  }
};

export default doggos;
