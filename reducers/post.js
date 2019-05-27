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
  [actionTypes.POST_GET_BY_ID_SUCCESS]: (state, action) => {
    const { resp } = action;
    const dataMap = {
      author: resp.author,
      body: resp.body,
      categories: resp.categories,
      images: resp.images,
      publishDate: resp['publish-date'],
      tiny: resp.tiny,
      title: resp.title,
    };
    return {
      ...state,
      ...dataMap,
      error: null,
      isLoading: false,
    };
  },
};

export default (state = defaultState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
