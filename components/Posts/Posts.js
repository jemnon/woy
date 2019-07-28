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
    if (!Array.isArray(data)) return null;
    return (
      <section className="posts">
        <ul className="list ma0 pl0">
          {data.map((post, key) => (
            <li className="pb4 bb b--ss-orange mb4" key={`post-${key}`}>
              <PostPreview
                body={post.fields.bodyShort}
                categories={null}
                id={post.sys.id}
                images={null}
                publishDate={post.fields.publishDate}
                slug={post.fields.slug}
                tiny={null}
                title={post.fields.title}
              />
              <div className="tr">
                <Link href={`/post/${post.fields.slug}`} prefetch>
                  <a className="no-underline ss-orange hover-near-black">
                    ...read more
                  </a>
                </Link>
              </div>
            </li>
          ))}
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
