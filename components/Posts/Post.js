import React from 'react';
import PropTypes from 'prop-types';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import Image from '../Image/Image';
import { generateImagesArry } from '../../lib/images';

const Post = ({
  author,
  body,
  categories,
  id,
  images,
  publishDate,
  tiny,
  title,
}) => {
  const parsedImages = generateImagesArry(images);
  return (
    <article className="post">
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

Post.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  publishDate: PropTypes.string.isRequired,
  tiny: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Post.defaultProps = {
  author: 'Jeri',
  tiny: null,
};

export default Post;
