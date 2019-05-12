import isDomUsable from '../../utils/utils';

/**
 * Itereates through images and generates image sizes,
 * for the `srcSet` attribute of the img tag.
 *
 * @param {Array} images - list of image urls.
 * @return `image.jpg 1x, image.jpg@2x 2x, image.jpg@3x 3x`
 *
 */
function generateSrcSet(images) {
  if (!Array.isArray(images)) return null;
  return images.map((image, key) => `${image} ${key + 1}x`);
}
/**
 * It will determine which image asset is needed for preloading.
 * It will return the 1x or 2x asset.
 *
 * @param {Array} images - an array of images
 * @return some-image@2x.jpg
 *
 */
function imageForLoad(images) {
  if (!Array.isArray(images)) return null;
  return isDomUsable() && isRetina() ? images[1] : images[0];
}
/*
 * Returns a boolean, to determine, if the user is on a retina device.
 *
 * @return true / false
 *
 */
function isRetina() {
  return window.matchMedia(
    '(min--moz-device-pixel-ratio: 2), (-o-min-device-pixel-ratio: 2/1), (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), (min-resolution: 2dppx)',
  ).matches;
}
/**
 * Returns a formatted ratio.
 *
 * @param {Number} ratio - 0.50
 * @return 50
 *
 */
function parseRatio(ratio) {
  return ratio && typeof ratio === 'number'
    ? Number(ratio * 100).toFixed(2)
    : 0;
}

export { generateSrcSet, imageForLoad, isRetina, parseRatio };
