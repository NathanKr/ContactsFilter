import { combineReducers } from 'redux';
import filterContactsReducer from './filterContactsReducer';
import loadContactsReducer from './loadContactsReducer';

const rootReducer  = combineReducers({
    filter : filterContactsReducer,
    contacts : loadContactsReducer
});

export default rootReducer;