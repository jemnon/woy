import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Container from '../organisms/Container';
import Header from '../organisms/Header';
import Layout from '../organisms/Layout';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import Spacer from '../atoms/Spacer';
import MarkdownList from '../molecules/MarkdownList';
import { HStack } from '../organisms/Stack';
import SEO from '../molecules/SEO';

interface PrivacyPolicyPageProps {
  data: {
    contentfulPrivacyPolicyPage: {
      Title: string;
      bodyText: {
        childMarkdownRemark: {
          html: string;
        };
      };
      updatedAt: string;
    };
  };
}

const PrivacyPolicyPage: FC<PrivacyPolicyPageProps> = ({
  data: { contentfulPrivacyPolicyPage },
}) => (
  <Layout>
    <SEO title="Privacy Policy" pathname="/privacy-policy" />
    <Header />
    <Container>
      <Heading level="1">{contentfulPrivacyPolicyPage.Title}</Heading>
      <Spacer />
      <HStack sp="sm1">
        <Text fontWeight="bold">Updated: </Text>
        <time
          dateTime={contentfulPrivacyPolicyPage.updatedAt}
          style={{ marginTop: '-1px' }}
        >
          {new Date(contentfulPrivacyPolicyPage.updatedAt).toLocaleDateString(
            'en-US',
            {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            },
          )}
        </time>
      </HStack>
      <Spacer />
      <MarkdownList
        dangerouslySetInnerHTML={{
          __html: contentfulPrivacyPolicyPage.bodyText.childMarkdownRemark.html,
        }}
      />
    </Container>
  </Layout>
);

export const query = graphql`
  {
    contentfulPrivacyPolicyPage {
      Title
      bodyText {
        childMarkdownRemark {
          html
        }
      }
      updatedAt
    }
  }
`;

export default PrivacyPolicyPage;
