import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import thunk from redux-thunk
import rootReducer from '../reducers/reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply thunk middleware
);

export default store;
