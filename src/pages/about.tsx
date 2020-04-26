import React, { FC } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ImageWrapper from '../components/image-wrapper-styled';
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

const AboutPageContent = styled.article`
  display: grid;
  grid-template-areas: 'heading' 'image' 'description';
  h1 {
    grid-area: 'heading';
  }
  section {
    grid-area: 'descripton';
  }
`;

const AboutPage: FC<AboutPageProps> = ({ data: { contentfulAbout } }) => {
  return (
    <Layout>
      <SEO description="About Jeri Mobley, Whisper of Yum" title="About" />
      <Header isVisible={true}>
        <Nav />
      </Header>
      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <Container>
          <AboutPageContent>
            <H1>About</H1>
            <ImageWrapper>
              <Img
                alt="about jeri mobley"
                durationFadeIn={0}
                fluid={contentfulAbout.image.fluid}
                placeholderClassName="tiny"
              />
            </ImageWrapper>
            {contentfulAbout.description.childMarkdownRemark.html && (
              <section
                dangerouslySetInnerHTML={{
                  __html: contentfulAbout.description.childMarkdownRemark?.html,
                }}
              />
            )}
          </AboutPageContent>
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
