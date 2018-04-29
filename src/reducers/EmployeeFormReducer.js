import {EMPLOYEE_UPDATE} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // ES6
      // key interpolation -> [action.payload.prop] will be replaced with the key of the property just passed
      // would be name: action.payload.value, this is the same as doing:
      // const newState = {};
      // newState[action.payload.prop] = action.payload.value
      return {...state, [action.payload.prop]: ation.payload.value};
    default:
      return state;
  }
};