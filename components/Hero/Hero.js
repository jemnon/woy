import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHero } from '../../actions/hero';
import HeroImage from './HeroImage';
import Logo from '../Header/Logo';
import PlaceholderLoader from '../PlaceholderLoader';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadStatus: null,
    };
    this.handleLoaded = this.handleLoaded.bind(this);
  }
  componentDidMount() {
    const { getHero } = this.props;
    getHero();
  }
  handleLoaded(status) {
    this.setState({ loadStatus: status });
  }
  render() {
    const { images } = this.props;
    const { loadStatus } = this.state;
    const baseStyles = 'relative w-100 vh-100-ns h5';
    const logoColor = loadStatus ? 'white' : 'black';
    return (
      <section className={`hero ${baseStyles}`}>
        {images ? (
          <HeroImage images={images} onLoaded={this.handleLoaded} />
        ) : null}
        <div
          className={`${
            loadStatus ? 'bg-black-60' : ''
          } z-2 absolute left-0 top-0 w-100 h-100 flex items-center justify-center`}
          style={{ transition: 'opacity 1.5s ease' }}
        >
          <Logo color={logoColor} />
        </div>
        {!loadStatus ? (
          <PlaceholderLoader
            ease="bg-white-40"
            endColor="bg-ss-cream"
            heightClass="vh-100"
          />
        ) : null}
      </section>
    );
  }
}

Hero.propTypes = {
  getHero: PropTypes.func,
  images: PropTypes.arrayOf(PropTypes.string),
};

Hero.defaultProps = {
  getHero: () => {},
  images: null,
};

const mapStateToProps = state => {
  const { hero } = state;
  const { images } = hero;
  return {
    images,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getHero }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hero);
