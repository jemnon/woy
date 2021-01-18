import React, { FC } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import Breadcrumbs from '../molecules/Breadcrumbs';
import Layout from '../organisms/Layout';
// import PartnerCard from '../molecules/PartnerCard';
import SEO from '../molecules/SEO';

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

const PartnersPageTitle = styled.h1`
  max-width: 21.75rem; /* 348px */
  margin-left: auto;
  margin-right: auto;
  ${up('md')} {
    max-width: none;
  }
`;

const PartnersPageDescription = styled.section`
  ${up('md')} {
    max-width: 35rem; /* 560px */
    margin-left: auto;
    margin-right: auto;
  }
`;

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
      <Breadcrumbs title="Partners" />
      {contentfulPartners.title && <h1>{contentfulPartners.title}</h1>}
      {contentfulPartners.description && (
        <p
          dangerouslySetInnerHTML={{
            __html: contentfulPartners.description?.childMarkdownRemark?.html,
          }}
        />
      )}
      {contentfulPartners.cardList && (
        <>
          {contentfulPartners.cardList.map(card => (
            <>{JSON.stringify(card)}</>
          ))}
        </>
      )}
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
