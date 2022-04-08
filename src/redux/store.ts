import {createStore
    , applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension/index";
import rootReducer from './reducers/index';

const store =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  ? createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  :createStore(rootReducer, applyMiddleware(thunk))

export default store;