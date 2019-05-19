import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { compose } from 'redux';

const Layout = ({ children }) => (
  <section className="layout vh-100">{children}</section>
);

Layout.propTypes = {
  children: PropTypes.node,
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Layout.defaultProps = {
  children: null,
  router: { pathname: '' },
};

export default compose(withRouter)(Layout);
