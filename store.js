import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import defaultState from './reducers/default.json';
import post from './reducers/post';
import posts from './reducers/posts';

const rootReducer = combineReducers({
  post,
  posts,
});

const composeEnhancers = composeWithDevTools({
  stateSanitizer: state => {
    // objectMaps can get huge and slow down dev tools.
    // So in dev, tell dev tools not to render them.
    const objectMaps = {
      fetching: state.objectMaps.fetching,
      note: 'OBJECT MAPS SANITIZED',
    };
    return { ...state, objectMaps };
  },
});

export function initializeStore(initialState = defaultState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
  );
}
