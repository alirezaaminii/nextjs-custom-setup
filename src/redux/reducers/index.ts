import {combineReducers} from 'redux';
import errors from './errors';

const rootReducer = combineReducers({
    errors
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
