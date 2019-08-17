import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PostBody from './PostBody';
import PostHeader from './PostHeader';
import Image from '../Image/Image';

const PostPreview = ({
  author,
  body,
  categories,
  id,
  images,
  publishDate,
  tiny,
  title,
}) => {
  return (
    <article className="post">
      <PostHeader
        categories={categories}
        id={id}
        publishDate={publishDate}
        title={title}
      />
      <div className="mb4 overflow-hidden">
        <div className="grow">
          <Link href={`/post/${id}`} prefetch>
            <a className="no-underline black">
              {/* <Image
                tiny={tiny}
                images={images}
                ratio={3 / 4}
                transition="opacity .3s ease"
              /> */}
            </a>
          </Link>
        </div>
      </div>
      <PostBody author={author} body={body} />
    </article>
  );
};

PostPreview.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  publishDate: PropTypes.string.isRequired,
  tiny: PropTypes.string,
  title: PropTypes.string.isRequired,
};

PostPreview.defaultProps = {
  author: 'jeri',
  tiny: null,
};

export default PostPreview;
