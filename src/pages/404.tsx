import React, { FC } from 'react';
import styled from 'styled-components';
import Container from '../organisms/Container';
import Header from '../organisms/Header';
import Layout from '../organisms/Layout';
import { H1 } from '../atoms/Headings';
import Link from '../atoms/Link';
import SEO from '../molecules/SEO';

const NotFoundLink = styled.a`
  padding-left: ${({ theme: { spacing } }): string => spacing.sm1};
  color: ${({ theme }): string => theme.colors.orange};
`;

const NotFoundPage: FC = () => (
  <Layout>
    <SEO
      description="Recipes, Cooking, and Los Angeles"
      title="Whisper of Yum | Recipes, Cooking and Los Angeles"
      image="https://res.cloudinary.com/dd8c1nipl/image/upload/v1586838879/woy/social-logo.jpg"
    />
    <Header />
    <Container>
      <H1>404</H1>
      <p>
        Oopsies! You've found yourself on a page that doesn't exist.
        <NotFoundLink as={Link} to="/">
          Click Here
        </NotFoundLink>
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;
