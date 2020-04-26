import React, { FC } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Images as Image } from '../types/images';
import Container from '../components/container-styled';
import { H1 } from '../components/headings-styled';
import Header from '../components/Header';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import SEO from '../components/SEO';

interface AboutPageProps {
  data: {
    contentfulAbout: {
      description: {
        childMarkdownRemark: {
          html: string;
        };
      };
      image: Image;
    };
  };
}

const AboutPage: FC<AboutPageProps> = ({ data: { contentfulAbout } }) => {
  return (
    <Layout>
      <SEO description="About Jeri Mobley, Whisper of Yum" title="About" />
      <Header isVisible={true}>
        <Nav />
      </Header>
      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <Container>
          <H1>About</H1>
          {contentfulAbout.description.childMarkdownRemark.html && (
            <div
              dangerouslySetInnerHTML={{
                __html: contentfulAbout.description.childMarkdownRemark?.html,
              }}
            />
          )}
        </Container>
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
