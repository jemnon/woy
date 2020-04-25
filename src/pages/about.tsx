import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container-styled';
import Header from '../components/Header';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import SEO from '../components/SEO';

const AboutPage: FC = () => {
  return (
    <Layout>
      <SEO description="About Jeri Mobley, Whisper of Yum" title="About" />
      <Header isVisible={true}>
        <Nav />
      </Header>
      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <Container topSpacing="1.5rem">About</Container>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulAbout {
      image {
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
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default AboutPage;
