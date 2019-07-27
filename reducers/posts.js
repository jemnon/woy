import { actionTypes } from '../actions/posts';
import { posts as defaultState } from './default.json';

const parseData = data => {
  console.log(data);
};

const handlers = {
  [actionTypes.POSTS_GET_ERROR]: (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  }),
  [actionTypes.POSTS_GET_LOADING]: state => ({
    ...state,
    isLoading: true,
  }),
  [actionTypes.POSTS_GET_SUCCESS]: (state, action) => ({
    ...state,
    data: parseData(action.resp),
    error: null,
    isLoading: false,
  }),
};

export default (state = defaultState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
