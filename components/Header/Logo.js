import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ color }) => (
  <img
    alt="whisper-of-yum"
    className={`${color === 'black' ? 'w-25 w-auto-l' : ''}`}
    src={`/static/logo-${color}-horizontal.svg`}
    style={{ minWidth: '11.75rem' }}
  />
);

Logo.propTypes = {
  color: PropTypes.string,
};

Logo.defaultProps = {
  color: 'black',
};

export default Logo;
