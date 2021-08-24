import {combineReducers} from 'redux';
import urlsReducer from './urlsReducer';

const rootReducer = combineReducers({urls: urlsReducer});

export default rootReducer;