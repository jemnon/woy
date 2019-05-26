import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { compose } from 'redux';
import Header from '../components/Header/Header';

class Post extends Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    return { id };
  }
  render() {
    const { router } = this.props;
    const { pathname } = router;
    return (
      <article className="post">
        <Header isEnabled pathname={pathname} />
        <div>post page</div>
      </article>
    );
  }
}

Post.propTypes = {
  router: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Post.defaultProps = {
  router: { pathname: '' },
};

export default compose(withRouter)(Post);
