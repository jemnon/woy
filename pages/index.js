import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { compose } from 'redux';
import Categories from '../components/Categories';
import Hero from '../components/Hero/Hero';
import Posts from '../components/Posts/Posts';
import { calculateHeight, isDomUsable } from '../utils/utils';
import Header from '../components/Header/Header';

class Home extends Component {
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
    const { router } = this.props;
    const { enableHeader } = this.state;
    const { pathname } = router;
    return (
      <section className="home">
        <Header isEnabled={enableHeader} pathname={pathname} />
        <Hero />
        <div className="flex nl3 nr3 mw9 center pt4">
          <div className="w-two-thirds-l w-100 ph3">
            <Posts />
          </div>
          <div className="w-third dn db-l ph3">
            <Categories />
          </div>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Home.defaultProps = {
  router: { pathname: '' },
};

export default compose(withRouter)(Home);
