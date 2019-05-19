import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import loadImage from '../Image/ImageLoader';
import { imageForLoad } from '../Image/ImageUtils';

const HeroImage = ({ images, onLoaded }) => {
  const image = imageForLoad(images);
  const [status, setLoaded] = useState(null);
  useEffect(() => {
    const handleLoad = resp => {
      const { status } = resp || {};
      setLoaded(status);
      onLoaded(status);
    };
    loadImage(image, handleLoad);
  });
  return (
    <div
      className={`hero-image absolute w-100 h-100 z-0 ${
        status ? 'o-100' : 'o-0'
      }`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        transition: 'opacity .3s ease',
      }}
    />
  );
};

HeroImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLoaded: PropTypes.func.isRequired,
};

export default HeroImage;
