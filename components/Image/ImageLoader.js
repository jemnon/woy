/**
 * Preloads an image with an `onLoaded` callback, for passing up
 * the image element, and response status.
 *
 * @param {Function} onLoaded - callback
 * @param {Object} ref - react ref of image element
 * @param {String} url - image url
 *
 */
function loadImage(onLoaded, ref, url) {
  if (!ref && !url) return;
  let image = null;
  if (!ref) {
    image = new Image();
    image.src = url;
  }
  if (ref) {
    const { current } = ref || {};
    image = current;
    image.src = url;
  }
  const handleLoad = () => {
    return onLoaded({ image, src: image.src, status: 'success' });
  };
  const handleError = () => {
    return onLoaded({ image, src: image.src, status: 'error' });
  };
  if (onLoaded && image) {
    image.addEventListener('load', handleLoad, false);
    image.addEventListener('error', handleError, false);
  }
  if (!onLoaded) {
    image.removeEventListener('load', handleLoad, false);
    image.removeEventListener('error', handleError, false);
  }
}

export default loadImage;
