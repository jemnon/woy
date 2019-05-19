import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';
import Layout from '../components/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
