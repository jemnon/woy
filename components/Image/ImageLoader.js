/**
 * Loads an image and passes an `onFinish` callback.
 *
 * @param {String} url - image url
 * @param {Function} onFinish - callback
 *
 */
function getImage(url, onLoaded) {
  const image = new Image();
  image.src = url;
  image.onload = event =>
    onLoaded({ event, url: image.src, status: 'success' });
  image.onerror = event => onLoaded({ event, url: image.src, status: 'error' });
  return image;
}

export default getImage;
