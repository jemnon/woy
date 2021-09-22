/* eslint @typescript-eslint/camelcase: 0 */

require('dotenv').config({
  path: '.env',
});

const postsQuery = `{
  allContentfulPosts {
    edges {
      node {
        title
        id
        slug
        publishDate
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
    title: `Whisper of Yum | Recipes, Cooking and Los Angeles`,
    description: `Simple-ish, healthy and comforting eats for the homecook; compilation of Filipino, wholesome, and international recipes.`,
    image:
      'https://images.ctfassets.net/lz7g6u6kccw7/5ZTQ6JUabdhzkYxGsOWwAN/38506c10912bb5fb03443efb790da33f/creamy_garlic_pork_chops.JPG?w=800&q=60',
    author: `Jeri Mobley-Arias`,
    siteUrl: `https://www.whisperofyum.com`,
    webStoryUrl: `https://www.whisperofyum.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
      },
    },
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        disableVendorPrefixes: true,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.whisperofyum.com',
        sitemap: 'https://www.whisperofyum.com/sitemap.xml',
        policy: [
          {
            userAgent: '*',
          },
        ],
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
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_TOKEN,
      },
    },
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
    /* {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
      },
    }, */
  ],
};
