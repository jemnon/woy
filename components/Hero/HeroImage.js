import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import loadImage from '../Image/ImageLoader';
import { imageForLoad } from '../Image/ImageUtils';

const HeroImage = ({ images, onLoaded }) => {
  const [status, setLoaded] = useState(null);
  const [src, setSrc] = useState(null);
  const handleLoad = resp => {
    const { src, status } = resp || {};
    setLoaded(status);
    setSrc(src);
    onLoaded(status);
  };
  useEffect(() => {
    if (!status) {
      const url = imageForLoad(images);
      loadImage(handleLoad, null, url);
    }
    return () => loadImage(null);
  }, [status]);
  return (
    <div
      className={`hero-image absolute w-100 h-100 z-0 ${
        status ? 'o-100' : 'o-0'
      }`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        transition: 'opacity 1.5s ease',
      }}
    />
  );
};

HeroImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLoaded: PropTypes.func.isRequired,
};

export default HeroImage;
