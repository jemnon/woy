exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
    {
      allContentfulCategories {
        edges {
          node {
            id
            name
            posts {
              bodyShort {
                childMarkdownRemark {
                  html
                }
              }
              publishDate
              slug
              title
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
              categories {
                name
                posts {
                  slug
                }
              }
            }
          }
        }
      }
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
              childMarkdownRemark {
                html
              }
            }
            body {
              childMarkdownRemark {
                html
              }
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
  // category pages
  /* data.allContentfulCategories.edges.forEach(edge => {
    const { name } = edge.node;
    createPage({
      path: `categories/${name}`,
      component: require.resolve('./src/templates/categories.tsx'),
      context: {
        page: edge.node,
      },
    });
  }); */
};
