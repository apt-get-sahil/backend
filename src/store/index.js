import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import {thunk} from 'redux-thunk';


// Your combined reducers

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
export default store;