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
            href="https://jemnon.github.io/sunny-sloth-css-utils/css/tachyons.min.css"
            rel="stylesheet"
          />
        </Head>
        <body className="lato vh-100 bg-ss-cream near-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
