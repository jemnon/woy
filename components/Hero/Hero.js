import React from 'react';
import PropTypes from 'prop-types';
import { isDomUsable } from '../../utils/utils';
import HeroImage from './HeroImage';
import Logo from '../Header/Logo';

const Hero = ({ images }) => {
  const baseStyles = 'relative w-100 vh-100 bg-near-white';
  return (
    <section className={`hero ${baseStyles}`}>
      {isDomUsable ? <HeroImage images={images} /> : null}
      <div className="bg-black-60 z-2 absolute left-0 top-0 w-100 h-100 flex items-center justify-center">
        <Logo color="white" />
      </div>
    </section>
  );
};

Hero.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Hero;
