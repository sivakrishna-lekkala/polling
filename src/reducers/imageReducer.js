import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.images, action) {
  console.log("state1234");
  console.log(state);
  switch (action.type) {

    case types.SEARCH_MEDIA_SUCCESS: 
      return action.result;
    default:
      return state;
  }
}
