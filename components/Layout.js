import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { compose } from 'redux';
import { calculateHeight, isDomUsable } from '../utils/utils';
import Header from './Header/Header';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      enableHeader: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    if (isDomUsable) {
      window.addEventListener('scroll', this.handleScroll);
      this.setHeader();
    }
  }
  componentWillUnmount() {
    if (isDomUsable) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  setHeader() {
    const heroHeight = calculateHeight('.hero');
    const windowY = window.pageYOffset;
    const waypoint = heroHeight / 2;
    if (waypoint >= windowY) {
      this.setState({ enableHeader: false });
    }
    if (waypoint <= windowY) {
      this.setState({ enableHeader: true });
    }
  }
  handleScroll() {
    this.setHeader();
  }
  render() {
    const { children, router } = this.props;
    const { enableHeader } = this.state;
    const { pathname } = router;
    return (
      <section className="layout vh-100">
        <Header isEnabled={enableHeader} pathname={pathname} />
        {children}
      </section>
    );
  }
}

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
