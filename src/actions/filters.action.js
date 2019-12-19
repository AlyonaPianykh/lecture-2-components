import { GET_FILTERS, GET_LIST_BY_BREED, LOADING } from '../action-types';
import axios from 'axios';

export const getFilters = function () {
  return (dispatch) => {
    return axios.get('https://dog.ceo/api/breeds/list/all')
      .then(({ data = {} }) => {
        const { message = {} } = data;

        dispatch({
          type: GET_FILTERS,
          payload: {
            doggos: message
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};


export const getDoggosByBreed = function(bread) {
  if (!bread) return;

  return (dispatch) => {
      dispatch({
          type: LOADING,
          payload: {
              loading: true
          }
      });
    return axios.get(`https://dog.ceo/api/breed/${bread}/images`)
      .then(({ data = {} }) => {
        const { message = {} } = data;

        dispatch({
          type: GET_LIST_BY_BREED,
          payload: {
            images: message
          }
        });

          dispatch({
              type: LOADING,
              payload: {
                  loading: false
              }
          });
      })
      .catch(err => {
          console.log(err);
          dispatch({
              type: LOADING,
              payload: {
                  loading: false
              }
          });
      });
  };
};
