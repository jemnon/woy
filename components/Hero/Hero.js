import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHero } from '../../actions/hero';
import { isDomUsable } from '../../utils/utils';
import HeroImage from './HeroImage';
import Logo from '../Header/Logo';

class Hero extends Component {
  componentDidMount() {
    const { getHero } = this.props;
    getHero();
  }
  render() {
    const baseStyles = 'relative w-100 vh-100 bg-near-white';
    return (
      <section className={`hero ${baseStyles}`}>
        {isDomUsable ? <HeroImage /> : null}
        <div className="bg-black-60 z-2 absolute left-0 top-0 w-100 h-100 flex items-center justify-center">
          <Logo color="white" />
        </div>
      </section>
    );
  }
}

Hero.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  getHero: PropTypes.func,
};

Hero.defaultProps = {
  data: null,
  error: null,
  isLoading: false,
  getHero: () => {},
};

const mapStateToProps = state => {
  return {
    data: state.data,
    error: state.error,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getHero }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hero);
