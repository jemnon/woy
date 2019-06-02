import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Link from 'next/link';
import { parsedCategories } from '../../utils/utils';

const renderTitle = (id, title) => {
  const heading = (
    <h1 className="ma0 mb4 f1-ns f3 noto-serif-tc lh-title normal">{title}</h1>
  );
  const link = (
    <Link href={`/post/${id}`} prefetch>
      <a className="no-underline black dib hover-ss-orange">{heading}</a>
    </Link>
  );
  return id ? link : heading;
};

const PostHeader = ({ categories, id, publishDate, title }) => {
  const date = publishDate ? moment(publishDate).format('MMMM Do YYYY') : null;
  return (
    <header className="post-header tracked">
      {id && title ? renderTitle(id, title) : null}
      <h6 className="ma0 mb4 f5 noto-serif-tc lh-title ttl normal">
        <span>{date ? `${date} - ` : null}</span>
        <span className="ss-orange">{parsedCategories(categories)}</span>
      </h6>
    </header>
  );
};

PostHeader.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  id: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostHeader;
