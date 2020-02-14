import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Post } from '../types/post';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface Node {
  node: Post;
}

interface HomeProps {
  data: {
    allContentfulPosts: {
      edges: Array<Node>;
    };
  };
}

const IndexPage: FC<HomeProps> = ({ data: { allContentfulPosts } }) => {
  const { edges: posts } = allContentfulPosts || {};
  return (
    <Layout>
      <SEO description="WOY Home page" title="WOY Home page" meta="Home Meta" />
      <ul>
        {posts.map(post => {
          const [{ fluid }] = post.node.images;
          return (
            <li key={post.node.id}>
              {post.node.title}
              <Img fluid={fluid} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulPosts(limit: 10) {
      edges {
        node {
          slug
          id
          publishDate
          categories {
            name
          }
          title
          images {
            fluid {
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
          body {
            body
          }
          bodyShort {
            bodyShort
          }
        }
      }
    }
  }
`;

export default IndexPage;
