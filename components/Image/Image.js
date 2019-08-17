import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ImageTiny from './ImageTiny';
import loadImage from './ImageLoader';
import useIntersectionObserver from './useIntersectionObserver';
import { imageForLoad, parseRatio } from './ImageUtils';

const Image = ({
  alt,
  bgColor,
  images,
  intersectionOptions,
  onLoaded,
  ratio,
  tiny,
  transition,
}) => {
  const imageRef = useRef();
  const intersectionRef = useRef();
  const [hasIntersected] = useIntersectionObserver(
    intersectionOptions,
    intersectionRef,
  );
  const [status, setStatus] = useState(null);
  useEffect(() => {
    const handleLoaded = resp => {
      const { src, status } = resp || {};
      setStatus(status);
      onLoaded({ src, status });
    };
    if (hasIntersected && !status) {
      const url = imageForLoad(images);
      loadImage(handleLoaded, imageRef, url);
    }
    return () => loadImage(null);
  }, [hasIntersected, imageRef, onLoaded, images, status]);
  return (
    <div
      className={`image aspect-ratio w-100 overflow-hidden z-0 bg-${bgColor}`}
      data-id="image"
      style={{ paddingBottom: `${parseRatio(ratio)}%` }}
      ref={intersectionRef}
    >
      {hasIntersected && <ImageTiny alt={alt} imageUrl={tiny} />}
      <img
        alt={alt}
        data-id="image-tag"
        data-testid="image-tag"
        className={`aspect-ratio--object ${status ? 'o-100' : 'o-0'}`}
        ref={imageRef}
        style={{ transition }}
      />
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  bgColor: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  intersectionOptions: PropTypes.shape({
    root: PropTypes.node,
    rootMargin: PropTypes.string,
    threshold: PropTypes.number,
  }),
  onLoaded: PropTypes.func,
  ratio: PropTypes.number,
  tiny: PropTypes.string,
  transition: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
  bgColor: 'white-40',
  images: [],
  intersectionOptions: {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  },
  onLoaded: () => {},
  ratio: 9 / 16,
  tiny: null,
  transition: null,
};

export default Image;
