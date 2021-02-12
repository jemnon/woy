import React, { FC } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Images as Image } from '../types/images';
import Layout from '../organisms/Layout';
import SEO from '../molecules/SEO';

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
  location: {
    pathname: string;
  };
}

const AboutPageContent = styled.article`
  display: grid;
  grid-template-areas: 'image' 'description';
  grid-gap: 1.5rem;
  @media ${({ theme }): string => theme.breakpoints.lg} {
    display: grid;
    grid-template-areas: 'image description';
    grid-template-columns: 50% 1fr;
  }
  section {
    grid-area: description;
    @media ${({ theme }): string => theme.breakpoints.lg} {
      padding: 2rem;
      margin-left: -4rem;
      margin-top: 4rem;
      position: relative;
      z-index: 1;
      background-color: ${({ theme }): string => theme.colors.white};
    }
    p:last-child {
      margin-bottom: 0;
    }
    h2 {
      margin: 0;
      margin-bottom: 1rem;
      font-weight: bold;
      @media ${({ theme }): string => theme.breakpoints.lg} {
        font-size: 1.5rem;
      }
      font-size: 1.25rem;
      span {
        color: ${({ theme }): string => theme.colors.orange};
      }
    }
  }
`;

const AboutPage: FC<AboutPageProps> = ({
  data: { contentfulAbout },
  location,
}) => {
  return (
    <Layout>
      <SEO
        description="Jeri Mobley creator of Whisper of Yum."
        title="About"
        type="article"
        image="https://images.ctfassets.net/lz7g6u6kccw7/5ZTQ6JUabdhzkYxGsOWwAN/38506c10912bb5fb03443efb790da33f/creamy_garlic_pork_chops.JPG?w=800&q=60"
        pathname={location.pathname}
      />
      <AboutPageContent>
        <Img
          alt="about jeri mobley"
          durationFadeIn={0}
          fluid={contentfulAbout.image.fluid}
          placeholderClassName="tiny"
        />
        {contentfulAbout.description.childMarkdownRemark.html && (
          <section
            dangerouslySetInnerHTML={{
              __html: contentfulAbout.description.childMarkdownRemark?.html,
            }}
          />
        )}
      </AboutPageContent>
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
