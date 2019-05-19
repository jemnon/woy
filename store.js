import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import defaultState from './reducers/default.json';
import hero from './reducers/hero';
import post from './reducers/post';
import posts from './reducers/posts';

const rootReducer = combineReducers({
  hero,
  post,
  posts,
});

export function initializeStore(initialState = defaultState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
