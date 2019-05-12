import React from 'react';
import PropTypes from 'prop-types';

const ImageTiny = ({ alt, imageUrl }) => (
  <img
    alt={alt}
    className="image-tiny aspect-ratio--object"
    data-id="image-tiny"
    src={imageUrl}
    style={{
      transform: 'scale(1.1)',
      filter: 'blur(15px)',
    }}
  />
);

ImageTiny.propTypes = {
  alt: PropTypes.string,
  imageUrl: PropTypes.string,
};

ImageTiny.defaultProps = {
  alt: '',
  imageUrl: null,
};

export default ImageTiny;
