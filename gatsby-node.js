const getInstagramData = async graphql => {
  try {
    const data = await graphql(`
      query {
        allInstagramContent(limit: 4) {
          edges {
            node {
              media_type
              permalink
              id
              localImage {
                childImageSharp {
                  fluid(
                    cropFocus: CENTER
                    maxHeight: 500
                    maxWidth: 500
                    quality: 90
                  ) {
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
      }
    `);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getFavorites = async graphql => {
  const data = await graphql(`
    {
      allContentfulFavoritePosts(limit: 5) {
        edges {
          node {
            posts {
              title
              publishDate
              slug
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
              bodyPreview {
                bodyPreview
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    }
  `);
  return data;
};

const getAllPosts = async graphql => {
  const data = await graphql(`
    {
      allContentfulPosts {
        edges {
          previous {
            title
            slug
            images {
              fluid {
                aspectRatio
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
          next {
            title
            slug
            images {
              fluid {
                aspectRatio
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
          node {
            slug
            publishDate
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
            totalTime
            servings
            ingredients {
              childMarkdownRemark {
                html
              }
            }
            optionalIngredients {
              childMarkdownRemark {
                html
              }
            }
            instructions {
              childMarkdownRemark {
                html
              }
            }

            relatedRecipes {
              id
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
              publishDate
              slug
            }
          }
        }
      }
    }
  `);
  return data;
};

const getLatestPost = async graphql => {
  const data = await graphql(`
    query {
      allContentfulPosts(limit: 1, sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
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
          }
        }
      }
    }
  `);
  return data;
};

const getRecentPosts = async graphql => {
  const data = await graphql(`
    query {
      allContentfulPosts(
        limit: 5
        sort: { fields: publishDate, order: DESC }
        skip: 1
      ) {
        edges {
          node {
            title
            publishDate
            slug
            images {
              fluid(cropFocus: CENTER) {
                aspectRatio
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
            bodyPreview {
              bodyPreview
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `);
  return data;
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data: latestPostData } = await getLatestPost(graphql);
  const { data: favoritesData } = await getFavorites(graphql);
  const { data: instaData } = await getInstagramData(graphql);
  const { data: recentPostsData } = await getRecentPosts(graphql);
  const { data: postsData } = await getAllPosts(graphql);
  createPage({
    path: '/',
    component: require.resolve('./src/templates/home.tsx'),
    context: {
      page: {
        latestPost: latestPostData.allContentfulPosts.edges,
        favorites: favoritesData.allContentfulFavoritePosts.edges,
        instagram: instaData.allInstagramContent.edges,
        recentPosts: recentPostsData.allContentfulPosts.edges,
      },
    },
  });
  // post pages
  postsData.allContentfulPosts.edges.forEach(edge => {
    const { slug } = edge.node;
    createPage({
      path: `post/${slug}`,
      component: require.resolve('./src/templates/post.tsx'),
      context: {
        page: { ...edge.node, next: edge.next, previous: edge.previous },
      },
    });
  });
  // generate pagination for posts page
  const postsPerPage = 9;
  const postsLen = postsData.allContentfulPosts.edges.length;
  const totalPages = Math.ceil(postsLen / postsPerPage);
  Array.from({ length: totalPages }).forEach((_, idx) => {
    createPage({
      path: `/posts/${idx + 1}`,
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
