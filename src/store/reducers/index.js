import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import xmlReducer from './xmlReducer';

export default combineReducers({
    settings: settingsReducer,
    xml: xmlReducer,
});