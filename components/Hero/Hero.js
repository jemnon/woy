import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';

const Hero = ({ images }) => {
  const baseStyles = 'relative';
  return (
    <section className={`hero ${baseStyles}`}>
      <Image images={images} ratio={19 / 39} />
    </section>
  );
};

Hero.propTypes = {
  images: PropTypes.ArrayOf(PropTypes.shape({})).isRequired,
};
