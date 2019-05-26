import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from 'next/link';
import { getPosts } from '../../actions/posts';
import PostPreview from './PostPreview';

class Posts extends Component {
  componentDidMount() {
    const { getPosts } = this.props;
    getPosts();
  }
  render() {
    const { data } = this.props;
    return (
      <section className="posts">
        <ul className="list ma0 pl0">
          {Array.isArray(data)
            ? data.map((post, key) => (
                <li className="pb4 bb b--ss-orange mb4" key={`post-${key}`}>
                  <PostPreview
                    body={post['body-short']}
                    categories={post.categories}
                    id={post.id}
                    images={post.images}
                    publishDate={post['publish-date']}
                    tiny={post.tiny}
                    title={post.title}
                  />
                  <div className="tr">
                    <Link href={`/post/${post.id}`} prefetch>
                      <a className="no-underline ss-orange hover-near-black">
                        ...read more
                      </a>
                    </Link>
                  </div>
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
