import { GET_FILTERS, GET_LIST_BY_BREED } from '../action-types';

const intialState = {
  filtersObject: {},
  images: []
};

// this is doggos reducer
const filters = (state = intialState, action) => {

  switch (action.type) {
    case GET_FILTERS: {
      const { payload: { doggos } } = action;

      return {
        ...state,
        filtersObject: doggos
      };
    }

    case GET_LIST_BY_BREED: {
      const { payload: { images } } = action;

      return {
        ...state,
        images
      };
    }

    default:
      return state
  }
};

export default filters;
