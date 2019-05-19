import { actionTypes } from '../actions/hero';
import { hero as defaultState } from './default.json';

const handlers = {
  [actionTypes.HERO_GET_ERROR]: (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false,
  }),
  [actionTypes.HERO_GET_LOADING]: state => ({
    ...state,
    isLoading: true,
  }),
  [actionTypes.HERO_GET_SUCCESS]: (state, action) => ({
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
