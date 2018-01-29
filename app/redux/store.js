import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import questionsReducer from './reducers/questions-reducer';

export let store = createStore(
  questionsReducer,
  applyMiddleware(thunk)
);

export let dispatch = store.dispatch