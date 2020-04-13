/* eslint @typescript-eslint/camelcase: 0 */

require('dotenv').config({
  path: '.env',
});

const postsQuery = `{
  allContentfulPosts {
    edges {
      node {
        title
        slug
        categories {
          name
        }
        images {
          fluid {
            aspectRatio
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
  }
}`;

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) =>
      data.allContentfulPosts.edges.map(({ node }) => node),
  },
];

module.exports = {
  siteMetadata: {
    title: `Whisper of Yum`,
    description: `Whipser of Yum site. Food, cocktails, wine, LA, and travel.`,
    author: `Jeri Mobley`,
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
    {
      resolve: `gatsby-source-instagram`,
      options: {
        type: `user-profile`,
        username: `whisperofyum`,
        access_token: process.env.INSTAGRAM_TOKEN,
        instagram_id: '223482132127355',
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Whisper of Yum`,
        short_name: `Whisper of Yum`,
        start_url: `https://whisperofyum.com`,
        background_color: `#f4ede6`,
        theme_color: `#cf7651`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
