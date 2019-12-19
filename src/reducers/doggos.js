import { ADD_DOGGO, DEL_DOGGO, DEL_ALL_DOGGOS } from '../action-types';

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

    case DEL_DOGGO: {
      const { payload: { doggoUrl } } = action;
      const { likedDoggos } = state;
      return {
        likedDoggos: likedDoggos.filter(doggos => doggos !== doggoUrl)
      };
    }

    case DEL_ALL_DOGGOS: {
      return {
        likedDoggos: intialState.likedDoggos
      };
    }

    default:
      return state
  }
};

export default doggos;
