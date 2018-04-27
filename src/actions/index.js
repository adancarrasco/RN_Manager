import firebase from 'firebase';

import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

// Used for asynchronous actions when we need to wait for response to call the action
// Using Redux Thunk we return a function from the Action Creator
// This function will automatically be called whenever we call this action
// Then we manually dispatch the action when the callback is ready using dispatch()
// dispatch receives the Action Creator object
export const loginUser = ({email, password}) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => dispatch({type: LOGIN_USER_SUCCESS, payload: user}));
  };
};
