import { actionTypes } from '../actions/post';
import { parseData } from '../lib/api';
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
  [actionTypes.POST_GET_BY_ID_SUCCESS]: (state, action) => {
    const { resp } = action;
    return {
      ...state,
      ...parseData(resp),
      error: null,
      isLoading: false,
    };
  },
  [actionTypes.POST_GET_BY_SLUG_ERROR]: (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  }),
  [actionTypes.POST_GET_BY_SLUG_LOADING]: state => ({
    ...state,
    isLoading: true,
  }),
  [actionTypes.POST_GET_BY_SLUG_SUCCESS]: (state, action) => {
    const { resp } = action;
    return {
      ...state,
      ...parseData(resp),
      error: null,
      isLoading: false,
    };
  },
};

export default (state = defaultState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
