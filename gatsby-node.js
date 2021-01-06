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
            bodyPreview {
              bodyPreview
              childMarkdownRemark {
                htmlAst
              }
            }
            bodyShort {
              bodyShort
              childMarkdownRemark {
                html
              }
            }
            body {
              childMarkdownRemark {
                html
                htmlAst
              }
            }
            images {
              fixed(width: 400) {
                src
                base64
              }
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
  // generate pagination for homepage
  const postsPerPage = 9;
  const postsLen = data.allContentfulPosts.edges.length;
  const totalPages = Math.ceil(postsLen / postsPerPage);
  Array.from({ length: totalPages }).forEach((_, idx) => {
    createPage({
      path: idx === 0 ? `/` : `/${idx + 1}`,
      component: require.resolve('./src/templates/post-list.tsx'),
      context: {
        currentPage: idx + 1,
        limit: postsPerPage,
        skip: idx * postsPerPage,
        totalPages,
      },
    });
  });
};
