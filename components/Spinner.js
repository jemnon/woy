import React from 'react';
import PropTypes from 'prop-types';

const baseStyles = 'br-100 bw-2 ba';

const Spinner = ({ width, height }) => (
  <div
    className={`spinner spin ${baseStyles} ${width} ${height}`}
    style={{
      borderTopColor: '#111111',
      borderLeftColor: '#cccccc',
      borderRightColor: '#cccccc',
      borderBottomColor: '#cccccc',
    }}
  />
);

Spinner.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Spinner.defaultProps = {
  width: 'w4',
  height: 'h4',
};

export default Spinner;
