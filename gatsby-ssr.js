const React = require('react');

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

  setPreBodyComponents([]);
};
