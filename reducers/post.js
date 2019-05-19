import { actionTypes } from '../actions/post';
import { post as defaultState } from './default.json';

const handlers = {
  [actionTypes.POST_GET_BY_ID_ERROR]: (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  }),
  [actionTypes.POST_GET_BY_ID_LOADING]: state => ({
    ...state,
    isLoading: true,
  }),
  [actionTypes.POST_GET_BY_ID_SUCCESS]: (state, action) => ({
    ...state,
    data: action.resp,
    error: null,
    isLoading: false,
  }),
};

export default (state = defaultState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
