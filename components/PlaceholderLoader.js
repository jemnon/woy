import React from 'react';
import PropTypes from 'prop-types';

const PlaceholderLoader = ({ ease, endColor, heightClass, startColor }) => (
  <div
    className={`placeholder-loader bg-${endColor} ${heightClass} w-100 absolute z-0 top-0 left-0`}
  >
    <div
      className={`${ease} bg-${startColor} w-100 h-100 absolute top-0 left-0 alternate fade-opacity infinite animate-1s`}
    />
  </div>
);

PlaceholderLoader.propTypes = {
  ease: PropTypes.string,
  endColor: PropTypes.string,
  heightClass: PropTypes.string,
  startColor: PropTypes.string,
};

PlaceholderLoader.defaultProps = {
  ease: 'ease-in-out',
  endColor: 'light-silver',
  heightClass: 'h3',
  startColor: 'near-white',
};

export default PlaceholderLoader;
