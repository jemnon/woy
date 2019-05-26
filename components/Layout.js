import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { compose } from 'redux';

const Layout = ({ children }) => (
  <section className="layout vh-100 normal">{children}</section>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default compose(withRouter)(Layout);
