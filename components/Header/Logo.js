import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ color, styles }) => (
  <img
    alt="whisper-of-yum"
    className={styles}
    src={`/static/logo-${color}-horizontal.svg`}
  />
);

Logo.propTypes = {
  color: PropTypes.string,
  styles: PropTypes.string,
};

Logo.defaultProps = {
  color: 'black',
  styles: null,
};

export default Logo;
