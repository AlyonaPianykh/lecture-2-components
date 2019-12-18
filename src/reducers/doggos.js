import {
  ADD_DOGGO,
  REMOVE_DOGGO,
  REMOVE_ALL_DOGGOS
} from '../action-types';

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

    // todo: add remove doggo functionality
    case REMOVE_DOGGO:{
      const { payload: { doggoUrl } } = action;

      const { likedDoggos } = state;

      const changedLikedDoggos = likedDoggos.filter(el => el !== doggoUrl);

      // this is new state
      return {
        likedDoggos: changedLikedDoggos
      };
    }

    case REMOVE_ALL_DOGGOS: {
      return {
        likedDoggos: []
      };
    }

    default:
      return state
  }
};

export default doggos;
