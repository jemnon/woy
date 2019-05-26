import React from 'react';
import PropTypes from 'prop-types';
import MarkdownRenderer from 'react-markdown-renderer';

const PostBody = ({ author, body }) => (
  <article className="post-body tracked">
    <h4 className="f4 pa0 ma0 mb4 noto-serif-tc normal">
      by <span className="ss-orange">{author}</span>
    </h4>
    <div style={{ lineHeight: 2 }}>
      <MarkdownRenderer markdown={body} />
    </div>
  </article>
);

PostBody.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string.isRequired,
};

PostBody.defaultProps = {
  author: 'jeri',
};

export default PostBody;
