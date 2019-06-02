import React from 'react';
import PropTypes from 'prop-types';
import MarkdownRenderer from 'react-markdown-renderer';

const PostBody = ({ author, body }) => (
  <article className="post-body tracked">
    {author ? (
      <h4 className="f5 pa0 ma0 mb4 noto-serif-tc normal">
        by <span className="ss-orange">{author}</span>
      </h4>
    ) : null}
    <div style={{ lineHeight: 2 }}>
      {body ? <MarkdownRenderer markdown={body} /> : null}
    </div>
  </article>
);

PostBody.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
};

PostBody.defaultProps = {
  author: 'jeri',
  body: null,
};

export default PostBody;
