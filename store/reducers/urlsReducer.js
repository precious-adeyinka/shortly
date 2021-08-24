import * as t from '../types';

const urlsReducer = (state = [], action) => {

  switch (action.type) {
    case t.SET_URLS:
      if (action.payload !== undefined) {
        // return {...state, data: [...action.payload]}
        return [...state, ...action.payload]
      }
      else {
        return state;
      }
      break
    case t.UPDATE_URLS:
      if (action.payload !== undefined && Object.keys(state).length !== 0) {
        let target = action.payload;
        // filter the state for the payload match, based on id
        let source = state.filter(item => item.id === target.id);
        // check if the payload exists, don't add it if it does
        if (source.length > 0) {
          return [...state]
        }
        else {
          return [action.payload, ...state]
        }
      }
      else {
        return [...state, action.payload]
      }
      break
    default:
      return [...state]
      break
  }
}

export default urlsReducer;