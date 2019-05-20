import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MarkdownRenderer from 'react-markdown-renderer';
import { getPosts } from '../../actions/posts';

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }
  render() {
    const { data } = this.props;
    return (
      <section className="posts ph3">
        <ul className="list ma0 pl0">
          {data && Array.isArray(data)
            ? data.map(post => (
                <li>
                  <h1 className="ma0 mb4 f1 noto-serif-tc">{post.title}</h1>
                  <MarkdownRenderer markdown={post.body} />
                </li>
              ))
            : null}
        </ul>
      </section>
    );
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

const mapStateToProps = state => {
  const { posts } = state;
  const { data, error, isLoading } = posts;
  return {
    data,
    error,
    isLoading,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPosts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
