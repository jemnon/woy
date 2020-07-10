import React, { FC } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Styles/container-styled';
import Header from '../components/Header';
import { Grid, H1, P } from '../components/Styles/';
import { HEADER_HEIGHT } from '../components/Header';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import PartnerCard from '../components/PartnerCard';
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
        image: { fluid: FluidObject };
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
            <H1 textAlign="center" verticalRhythm="roomy">
              {contentfulPartners.title}
            </H1>
          )}
          {contentfulPartners.description && (
            <P
              dangerouslySetInnerHTML={{
                __html:
                  contentfulPartners.description?.childMarkdownRemark?.html,
              }}
              textAlign="center"
              verticalRhythm="roomy"
            />
          )}
          {contentfulPartners.cardList && (
            <Grid columns={2}>
              {contentfulPartners.cardList.map(card => (
                <PartnerCard
                  description={card.description}
                  key={card.partnerName}
                  image={card.image}
                  linkText={card.linkText}
                  linkUrl={card.linkUrl}
                  partnerName={card.partnerName}
                  promoCode={card.promoCode}
                />
              ))}
            </Grid>
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
          fluid(maxWidth: 764) {
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
