import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import loadImage from './ImageLoader';
import ImageTiny from './ImageTiny';
import { generateSrcSet, imageForLoad, parseRatio } from './ImageUtils';

const Image = ({ alt, bgColor, images, onLoaded, ratio, tiny, transition }) => {
  const [status, setLoaded] = useState(null);
  const srcSet = generateSrcSet(images);
  useEffect(() => {
    const image = imageForLoad(images);
    /* istanbul ignore next */
    const handleLoad = resp => {
      const { status } = resp || {};
      setLoaded(status);
      onLoaded();
    };
    loadImage(image, handleLoad);
  });
  return (
    <div
      className={`image aspect-ratio w-100 overflow-hidden z-0 bg-${bgColor}`}
      data-id="image"
      style={{ paddingBottom: `${parseRatio(ratio)}%` }}
    >
      {tiny ? <ImageTiny imageUrl={tiny} /> : null}
      {srcSet ? (
        <img
          alt={alt}
          data-id="image-tag"
          data-testid="image-tag"
          className={`aspect-ratio--object ${status ? 'o-100' : 'o-0'}`}
          loading="lazy"
          src={images[0]}
          srcSet={status === 'success' ? srcSet : null}
          style={{ transition }}
        />
      ) : null}
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  bgColor: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  onLoaded: PropTypes.func,
  ratio: PropTypes.number,
  tiny: PropTypes.string,
  transition: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  bgColor: 'near-white',
  images: [],
  onLoaded: () => {},
  ratio: 9 / 16,
  tiny: null,
  transition: null,
};

export default Image;
