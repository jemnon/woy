import { actionTypes } from '../actions/hero';
import { hero as defaultState } from './default.json';

const { CMS_URL } = process.env;

const generateImageUrls = data => {
  if (data && Array.isArray(data)) {
    return generateImagesArry(data[0].images);
  }
  return null;
};

const generateImagesArry = images => {
  if (images && Array.isArray(images)) {
    let imagesArry = [];
    images.forEach(image => {
      imagesArry.push(`${CMS_URL}/${image.url}`);
    });
    return imagesArry;
  }
  return null;
};

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
    images: generateImageUrls(action.resp),
    error: null,
    isLoading: false,
  }),
};

export default (state = defaultState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
