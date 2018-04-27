import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOADING,
  ERROR,
  USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
};
console.log(EMAIL_CHANGED);

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.payload};
    case LOADING:
      return {...state, loading: action.payload};
    case ERROR:
      return {...state, error: action.payload};
    case USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
};
