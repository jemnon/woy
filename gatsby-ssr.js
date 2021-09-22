const React = require('react');
const { renderToString } = require('react-dom/server');
const inline = require('glamor/inline');
const Layout = require('./src/organisms/Layout').default;

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const bodyHTML = renderToString(bodyComponent);
  const inlinedHTML = inline(bodyHTML);

  replaceBodyHTMLString(inlinedHTML);
};

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>;
};

exports.onRenderBody = function ({ setHeadComponents, setPreBodyComponents }) {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
          var blogherads = blogherads || {}; 
          blogherads.adq = blogherads.adq || [];
        `,
      }}
    />,
  ]);

  setPreBodyComponents([
    <script
      type="text/javascript"
      async="async"
      data-cfasync="false"
      src="https://ads.blogherads.com/static/blogherads.js"
    ></script>,
    <script
      type="text/javascript"
      async="async"
      data-cfasync="false"
      src="https://ads.blogherads.com/sk/12/123/1235555/28585/header.js"
    ></script>,
  ]);
};
