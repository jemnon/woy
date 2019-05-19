import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../actions/posts';

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }
  render() {
    const { data } = this.props;
    return <section className="posts" />;
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

Posts.defaultProps = {
  getPosts: () => {},
  data: null,
};

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPosts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
