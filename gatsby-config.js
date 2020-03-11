/* eslint @typescript-eslint/camelcase: 0 */

require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `Whisper of Yum`,
    description: `Whipser of Yum site. Food, cocktails, wine, LA, and travel.`,
    author: `David Arias`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
    /* {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Whisper of Yum`,
        short_name: `WOF`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/`, // This path is relative to the root of the site.
      },
    }, */
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
