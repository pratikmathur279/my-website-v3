import { combineReducers } from 'redux';
import GlobalReducer from './reducers/globalReducer.js';
import ToastReducer from './reducers/toastReducer.js';

const rootReducer = combineReducers({
    GlobalReducer,
    ToastReducer
});

export default rootReducer;