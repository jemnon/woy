import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostById, getPostBySlug } from '../../actions/post';
import Image from '../Image/Image';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import Spinner from '../Spinner';

class PostDetail extends Component {
  componentDidMount() {
    const { getPostById, id } = this.props;
    if (id) getPostById(id);
  }
  renderContent() {
    const {
      author,
      body,
      categories,
      images,
      publishDate,
      tiny,
      title,
    } = this.props;
    return (
      <article>
        <PostHeader
          categories={categories}
          publishDate={publishDate}
          title={title}
        />
        <div className="mb4">
          <Image
            tiny={tiny}
            images={images || null}
            ratio={3 / 4}
            transition="opacity .3s ease"
          />
        </div>
        <PostBody author={author} body={body} />
      </article>
    );
  }
  renderLoading() {
    return (
      <div className="flex flex-auto flex-column justify-center items-center">
        <Spinner />
      </div>
    );
  }
  render() {
    const { isLoading } = this.props;
    return (
      <article className="post tracked">
        {isLoading ? this.renderLoading() : this.renderContent()}
      </article>
    );
  }
}

PostDetail.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  getPostById: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})),
  id: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  publishDate: PropTypes.string,
  tiny: PropTypes.string,
  title: PropTypes.string,
};

PostDetail.defaultProps = {
  author: 'Jeri',
  body: null,
  categories: null,
  id: null,
  images: [],
  publishDate: null,
  tiny: null,
  title: null,
};

const mapStateToProps = state => {
  const { post } = state;
  return { ...post };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPostById, getPostBySlug }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetail);
