import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

import reducer from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

export const logger = (store) => (next) => (action) => {
  console.log('current state ', store.getState());
  console.log(`Action type: ${action.type}, payload: ${action.payload}`);

  return next(action);
};

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
