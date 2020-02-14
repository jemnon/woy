exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    {
      allContentfulPosts {
        edges {
          node {
            slug
            publishDate
            categories {
              name
            }
            title
            bodyShort {
              bodyShort
            }
            images {
              fluid {
                base64
                aspectRatio
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
          }
        }
      }
      allContentfulHeroes {
        edges {
          node {
            images {
              fluid {
                aspectRatio
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
            updatedAt
          }
        }
      }
    }
  `);
  // post pages
  data.allContentfulPosts.edges.forEach(edge => {
    const { slug } = edge.node;
    createPage({
      path: `post/${slug}`,
      component: require.resolve('./src/templates/post.tsx'),
      context: {
        page: edge.node,
      },
    });
  });
};
