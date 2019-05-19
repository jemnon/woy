import React from 'react';
import PropTypes from 'prop-types';

const MobileButton = ({ onClick }) => (
  <button
    className="mobile-button pa0 bg-transparent bn dn-l f3 mt1 pointer outline-0"
    data-id="mobile-button"
    onClick={onClick}
    type="button"
  >
    <i className="icon-menu-offset" />
  </button>
);

MobileButton.propTypes = {
  onClick: PropTypes.func,
};

MobileButton.defaultProps = {
  onClick: () => {},
};

export default MobileButton;
