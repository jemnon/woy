import { getById, getBySlug } from '../lib/api';

export const actionTypes = {
  POST_GET_BY_ID_ERROR: 'POST_GET_BY_ID_ERROR',
  POST_GET_BY_ID_LOADING: 'POST_GET_BY_ID_LOADING',
  POST_GET_BY_ID_SUCCESS: 'POST_GET_BY_ID_SUCCESS',
  POST_GET_BY_SLUG_ERROR: 'POST_GET_BY_SLUG_ERROR',
  POST_GET_BY_SLUG_LOADING: 'POST_GET_BY_SLUG_LOADING',
  POST_GET_BY_SLUG_SUCCESS: 'POST_GET_BY_SLUG_SUCCESS',
};

export const postGetByIdSuccess = resp => ({
  type: actionTypes.POST_GET_BY_ID_SUCCESS,
  resp,
});

export const postGetByIdLoading = () => ({
  type: actionTypes.POST_GET_BY_ID_LOADING,
});

export const postGetByIdError = error => ({
  type: actionTypes.POST_GET_BY_ID_ERROR,
  error,
});

export const postGetBySlugSuccess = resp => ({
  type: actionTypes.POST_GET_BY_SLUG_SUCCESS,
  resp,
});

export const postGetBySlugLoading = () => ({
  type: actionTypes.POST_GET_BY_SLUG_LOADING,
});

export const postGetBySlugError = error => ({
  type: actionTypes.POST_GET_BY_SLUG_ERROR,
  error,
});

export const getPostById = id => async dispatch => {
  dispatch(postGetByIdLoading());
  try {
    const resp = await getById(id);
    const { data } = resp;
    dispatch(postGetByIdSuccess(data));
  } catch (error) {
    dispatch(postGetByIdError(error));
  }
};

export const getPostBySlug = slug => async dispatch => {
  dispatch(postGetBySlugLoading());
  try {
    const resp = await getBySlug(slug);
    const { data } = resp;
    dispatch(postGetBySlugSuccess(data));
  } catch (error) {
    dispatch(postGetBySlugError(error));
  }
};
