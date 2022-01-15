import { combineReducers } from 'redux';
import { AuthReducer } from './authReducer';
import { ResultReducer } from './resultReducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
    result: ResultReducer
});

export { RootReducer };
