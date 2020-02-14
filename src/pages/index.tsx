import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Post } from '../types/post';
import Layout from '../components/layout';

interface HomeProps {
  data?: {
    allContentfulPosts?: {
      edges?: Post[];
    };
  };
}

const IndexPage: FC<{}> = () => <Layout>home</Layout>;

export const query = graphql`
  {
    allContentfulPosts(limit: 10) {
      edges {
        node {
          slug
          publishDate
          categories {
            name
          }
          title
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
