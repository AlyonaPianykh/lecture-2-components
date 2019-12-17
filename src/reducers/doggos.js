import { ADD_DOGGO, DELETE_DOGGO, DELETE_ALL_DOGGO } from '../action-types';

const intialState = {
  likedDoggos: [],
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
      }}

    case DELETE_DOGGO: {
      const { payload: { doggoUrl } } = action;

      const { likedDoggos } = state;

      // this is new state
      return {
        likedDoggos: likedDoggos.filter(doggos => doggos !== doggoUrl)
      }
    }
    case DELETE_ALL_DOGGO: {

      // const { likedDoggos } = state;

      // this is new state
      return {
        likedDoggos: intialState.likedDoggos
      }
    }



      // todo: add remove doggo functionality
    default:
      return state
  }
};

export default doggos;
