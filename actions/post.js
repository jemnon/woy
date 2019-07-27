import { getById } from '../lib/api';

export const actionTypes = {
  POST_GET_BY_ID_ERROR: 'POST_GET_BY_ID_ERROR',
  POST_GET_BY_ID_LOADING: 'POST_GET_BY_ID_LOADING',
  POST_GET_BY_ID_SUCCESS: 'POST_GET_BY_ID_SUCCESS',
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
