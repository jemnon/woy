import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,400i,700|Noto+Serif+TC"
            rel="stylesheet"
          />
          <link
            href="https://jemnon.github.io/wof-css-utils/css/tachyons.min.css"
            rel="stylesheet"
          />
          <link
            href="https://jemnon.github.io/icon-library/style.css"
            rel="stylesheet"
          />
        </Head>
        <body className="lato near-black bg-ss-cream">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
