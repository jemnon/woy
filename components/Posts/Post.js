import React from 'react';
import PropTypes from 'prop-types';
import MarkdownRenderer from 'react-markdown-renderer';
import moment from 'moment';
import Image from '../Image/Image';
import { generateImagesArry } from '../../lib/images';
import { parsedCategories } from '../../utils/utils';

const Post = ({
  author,
  body,
  categories,
  images,
  publishDate,
  tiny,
  title,
}) => {
  const parsedImages = generateImagesArry(images);
  const date = moment(publishDate).format('MMMM Do YYYY');
  return (
    <article className="post tracked">
      <h6
        className="ma0 mb4 f4 noto-serif-tc lh-title ttl"
        style={{ fontWeight: 'normal' }}
      >
        {date} -{' '}
        <span className="ss-orange">{parsedCategories(categories)}</span>
      </h6>
      <h1
        className="ma0 mb4 f1 noto-serif-tc lh-title"
        style={{ fontWeight: 'normal' }}
      >
        {title}
      </h1>
      <div className="mb4">
        <Image
          tiny={tiny}
          images={parsedImages}
          ratio={3 / 4}
          transition="opacity .3s ease"
        />
      </div>
      <div className="f4 mb4 noto-serif-tc">
        by <span className="ss-orange">{author}</span>
      </div>
      <div style={{ lineHeight: 2 }}>
        <MarkdownRenderer markdown={body} />
      </div>
    </article>
  );
};

Post.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
