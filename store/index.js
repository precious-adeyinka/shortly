import {createStore, applyMiddleware, compose} from 'redux'
import reduxThunkMidleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createWrapper} from 'next-redux-wrapper'
import rootReducer from './reducers/rootReducer'

// const middlewares = [reduxThunkMidleware]

const bindMiddleware = (middlewares) => {
  if (process.env.NODE_ENV !== 'production') {
    const {composeWithDevTools} = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middlewares));
  }
  return compose(applyMiddleware(...middlewares));
};

const initStore = () => {
  return createStore(rootReducer, bindMiddleware([reduxThunkMidleware]));
};

export const wrapper = createWrapper(initStore);
