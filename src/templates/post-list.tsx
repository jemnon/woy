import React, { FC } from 'react';
import { graphql, navigate } from 'gatsby';
import { Post as PostType } from '../types/post';
import Layout from '../organisms/Layout';
import Pagination from '../molecules/Pagingation';
import SEO from '../molecules/SEO';

interface PostNode {
  node: PostType;
}

interface PostListProps {
  data?: {
    allContentfulPosts?: {
      edges?: PostNode[];
    };
  };

  pageContext?: {
    currentPage: number;
    limit: number;
    totalPages: number;
  };
}

const metaDesc =
  `Just like you (or not), I love food. So much so, ` +
  `my partner and I decided to create this repository of my go-to, ` +
  `flavor-bomb dishes, with simple-ish prep. I get down making all sorts ` +
  `of eats, especially Filipino dishes from my childhood. ` +
  `I keep it simple and straight to the point; brief-ish description, ingredients, and steps.` +
  `I figure, if it looks good and you feel so inclined to making it, ` +
  `I'll spare you the endless scrolling through the details of why I ` +
  `chose a specific ingredient over another and get straight to what ` +
  `you want. Enjoy the content.`;

const PostList: FC<PostListProps> = ({ data, pageContext }) => {
  const { edges: posts } = data?.allContentfulPosts || {};

  const handlePaginationClick = (page: number): void => {
    navigate(`/posts/${page}`);
  };

  return (
    <Layout>
      <SEO
        description={metaDesc}
        image="https://res.cloudinary.com/dd8c1nipl/image/upload/c_scale,w_880/v1586932061/woy/pork-chop.jpg"
        title="Whisper of Yum | Recipes, Cooking and Los Angeles"
        type="article"
      />
      <div>
        {posts && (
          <>
            <ul>
              {posts.map((post, idx) => {
                console.log(post);
                return <li key={post.node.id}>{post.node.title}</li>;
              })}
            </ul>
            {pageContext?.currentPage && pageContext.totalPages && (
              <Pagination
                currentPage={pageContext?.currentPage}
                onClick={handlePaginationClick}
                totalPages={pageContext?.totalPages}
              />
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query postsPageQuery($skip: Int!, $limit: Int!) {
    allContentfulPosts(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: publishDate }
    ) {
      edges {
        node {
          id
          slug
          publishDate
          title
          images {
            fixed(width: 400) {
              src
            }
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
`;

export default PostList;
