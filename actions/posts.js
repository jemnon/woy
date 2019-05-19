import get from '../lib/api';

export const actionTypes = {
  POSTS_GET_ERROR: 'POSTS_GET_ERROR',
  POSTS_GET_LOADING: 'POSTS_GET_LOADING',
  POSTS_GET_SUCCESS: 'POSTS_GET_SUCCESS',
};

export const postsGetSuccess = resp => ({
  type: actionTypes.POSTS_GET_SUCCESS,
  resp,
});

export const postGetLoading = () => ({
  type: actionTypes.POSTS_GET_LOADING,
});

export const postsGetError = error => ({
  type: actionTypes.POSTS_GET_ERROR,
  error,
});

export const getPosts = () => async dispatch => {
  dispatch(postGetLoading());
  try {
    const resp = await get('/posts');
    dispatch(postsGetSuccess(resp));
  } catch (error) {
    dispatch(postsGetError(error));
  }
};
