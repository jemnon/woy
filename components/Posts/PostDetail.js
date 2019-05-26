import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import { generateImagesArry } from '../../lib/images';

const PostDetail = ({
  author,
  body,
  categories,
  images,
  publishDate,
  tiny,
  title,
}) => {
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
};

PostDetail.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  publishDate: PropTypes.string.isRequired,
  tiny: PropTypes.string,
  title: PropTypes.string.isRequired,
};

PostDetail.defaultProps = {
  author: 'Jeri',
  tiny: null,
};

export default PostDetail;
