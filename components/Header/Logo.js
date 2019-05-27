import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Logo = ({ color, styles }) => (
  <Link href="/">
    <a className="no-underline">
      <img
        alt="whisper-of-yum"
        className={styles}
        src={`/static/logo-${color}-horizontal.svg`}
      />
    </a>
  </Link>
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
