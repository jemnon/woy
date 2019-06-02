import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { compose } from 'redux';
import Categories from '../components/Categories';
import Header from '../components/Header/Header';
import PostDetail from '../components/Posts/PostDetail';
import { HEADER_HEIGHT } from '../utils/constants';

class Post extends Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    return { id };
  }
  render() {
    const { id, router } = this.props;
    const { pathname } = router;
    return (
      <article className="post" style={{ paddingTop: HEADER_HEIGHT }}>
        <Header isEnabled pathname={pathname} />
        <div className="flex nl3 nr3 mw8 center pt4">
          <div className="w-two-thirds-l w-100 ph3">
            <PostDetail id={id} />
          </div>
          <div className="w-third dn db-l ph3">
            <Categories />
          </div>
        </div>
      </article>
    );
  }
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Post.defaultProps = {
  router: { pathname: '' },
};

export default compose(withRouter)(Post);
