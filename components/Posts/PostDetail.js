import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostById } from '../../actions/post';
import Image from '../Image/Image';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import { generateImagesArry } from '../../lib/images';

class PostDetail extends Component {
  componentDidMount() {
    const { getPostById, id } = this.props;
    if (id) getPostById(id);
  }
  render() {
    const {
      author,
      body,
      categories,
      images,
      publishDate,
      tiny,
      title,
    } = this.props;
    const parsedImages = generateImagesArry(images);
    return (
      <article className="post tracked">
        <PostHeader
          categories={categories}
          publishDate={publishDate}
          title={title}
        />
        <div className="mb4">
          <Image
            tiny={tiny}
            images={parsedImages}
            ratio={3 / 4}
            transition="opacity .3s ease"
          />
        </div>
        <PostBody author={author} body={body} />
      </article>
    );
  }
}

PostDetail.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  getPostById: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  publishDate: PropTypes.string.isRequired,
  tiny: PropTypes.string,
  title: PropTypes.string.isRequired,
};

PostDetail.defaultProps = {
  author: 'Jeri',
  tiny: null,
};

const mapStateToProps = state => {
  const { post } = state;
  return { ...post };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPostById }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetail);
