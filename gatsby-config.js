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
        bodyPreview {
          childMarkdownRemark {
            html
          }
        }
        images {
          fluid(maxWidth: 100) {
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
    description: `Recipes, Asian Cooking, Food Blog, Easy Recipes, Los Angeles`,
    author: `Jeri Mobley`,
    siteUrl: `https://whisperofyum.com`,
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

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              quality: 90,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://whisperofyum.com',
        sitemap: 'https://whisperofyum.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
        'pinterest-site-verification': 'e2f1349ea701f347a95c15bab1f0fc7a',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.GATSBY_MAIL_CHIMP_API,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        head: false,
      },
    },
    /* {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        appId: process.env.GATSBY_FB_APP_ID,
        xfbml: true,
        includeInDevelopment: true,
      },
    }, */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Whisper of Yum`,
        short_name: `Whisper of Yum`,
        start_url: `/`,
        background_color: `#f4ede6`,
        theme_color: `#cf7651`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
