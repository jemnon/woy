import React, { FC } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/container-styled';
import Header from '../components/Header';
import { H1 } from '../components/headings-styled';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import SEO from '../components/SEO';

interface PartnersPageProps {
  data: {
    contentfulPartners: {
      cardList: {
        description: {
          childMarkdownRemark: {
            html: string;
          };
        };
        image: FluidObject;
        linkText?: string;
        linkUrl?: string;
        partnerName: string;
        promoCode?: string;
      }[];
      description: {
        childMarkdownRemark: {
          html: string;
        };
      };
      title: string;
    };
  };
  location: {
    pathname: string;
  };
}

const PartnersPage: FC<PartnersPageProps> = ({
  data: { contentfulPartners },
  location,
}) => {
  return (
    <Layout>
      <SEO
        description="Whisper of Yum Partners"
        title="Partners"
        image="https://res.cloudinary.com/dd8c1nipl/image/upload/v1586838879/woy/social-logo.jpg"
        pathname={location.pathname}
      />
      <Header isVisible={true}>
        <Nav />
      </Header>
      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <Container>
          <Breadcrumbs title="Partners" />
          {contentfulPartners.title && (
            <H1 verticalRhythm="roomy">{contentfulPartners.title}</H1>
          )}
        </Container>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    contentfulPartners {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      cardList {
        image {
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
        linkText
        linkUrl
        partnerName
        promoCode
      }
    }
  }
`;

export default PartnersPage;
