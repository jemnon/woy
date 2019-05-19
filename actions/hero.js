import get from '../lib/hero';

export const actionTypes = {
  HERO_GET_ERROR: 'HERO_GET_ERROR',
  HERO_GET_LOADING: 'HERO_GET_LOADING',
  HERO_GET_SUCCESS: 'HERO_GET_SUCCESS',
};

export const heroGetSuccess = resp => ({
  type: actionTypes.HERO_GET_SUCCESS,
  resp,
});

export const heroGetLoading = () => ({
  type: actionTypes.HERO_GET_LOADING,
});

export const heroGetError = error => ({
  type: actionTypes.HERO_GET_ERROR,
  error,
});

export const getHero = () => async dispatch => {
  dispatch(heroGetLoading());
  try {
    const resp = await get();
    const { data } = resp;
    dispatch(heroGetSuccess(data));
  } catch (error) {
    dispatch(heroGetError(error));
  }
};
