import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth-reducer';

export let store = createStore(
  authReducer,
  applyMiddleware(thunk)
);

export let dispatch = store.dispatch
